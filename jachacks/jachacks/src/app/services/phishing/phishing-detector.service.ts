import { Injectable } from '@angular/core';
import { ChatGPTService } from '../chatgpt/chat-gpt.service';
import { SMTPMessage } from '../../types/SMTPMessage';
import { PhishingDetectorResult } from '../../types/PhishingDetectorResult';

@Injectable({
  providedIn: 'root'
})
export class PhishingDetectorService {

  constructor(private chatGPTService:ChatGPTService) {

   }

   public parseSMTP = (smtp:string):SMTPMessage | string => {
    const USEFUL_HEADERS = ["From","To","Subject","Date","Content-Type","Content-Transfer-Encoding","MIME-Version","Message-ID","Received"];
    let regex = 'boundary=".+"'
    let boundaryMatch = smtp.match(regex);
    if(!boundaryMatch){
      return "Invalid SMTP message. No boundary found.";
    }
    let boundary = "--" + boundaryMatch[0].replace("boundary=","").replace(/"/g,"").split(";")[0];
    let splited = smtp.split(boundary).map((part)=>part.split("\n").map((line)=>line.trim()).filter((line)=>line.length>0));
    if(splited.length<2){
      return "Invalid SMTP message. No parts found.";
    }
    let headers = splited.shift()?.filter((line)=>USEFUL_HEADERS.some((header)=>line.startsWith(header + ":"))).join("\n");
    let body = splited.shift()!.join("\n");
    if(splited[splited.length-1][0].includes("--")){
      splited.pop();
    }  
    return {header:headers!,body:body};
   }

   private listFormat = "ELEMENT1 : DETAILS|ELEMENT2 : DETAILS|...|ELEMENTN : DETAILS"
   private prompt="Give a phishingscore going from 0 to 5, with 0 being at least 70% sure that the email is safe, and 5 being 95% sure it is phishing or a scam. If the score is 3 or under, Give your reasoning as to why it might not be phishing as a list with each element of the list in the following format:" + this.listFormat + " . If the score is over 3, give your reasoning as to why it might be phishing as a list with each element of the list in the following format: " + this.listFormat + "."

  public detectPhishingFromSMTP = async (smtp:string): Promise<PhishingDetectorResult | string> => {
    let parsed = this.parseSMTP(smtp);
    if(typeof parsed === "string"){
      return parsed;
    }    

    let prompt = "What is the likelyhood of this email message being a phishing attempt?\n\n Headers:" + parsed.header + "\n\nBody:" + parsed.body  +"\n\n"+this.prompt;

    let res = await this.sendPrompt(prompt);
    return res;
  }
  public detectPhishing = async (from:string,to:string,object:string,mail:string): Promise<PhishingDetectorResult> => {
    let prompt = "What is the likelyhood of this email message being a phishing attempt?\n\n from:" + from + "\n\nto:" + to + "\n\nobject:" + object + "\n\nmail:" + mail +"\n\n" + this.prompt;

    let res = await this.sendPrompt(prompt);
    
    return res;
  }
  private sendPrompt = async (prompt:string, depth=0): Promise<PhishingDetectorResult> => {
    let answer = await this.chatGPTService.sendPromptSemiRaw(prompt,"&&&","phishingscore=SCORE&&&reasonning=ELEMENT1|ELEMENT2|...|ELEMENTN");
    
    let score = answer[0].split("phishingscore=")[1];
    try{

      let reasonning = answer[1].split("reasonning=")[1].split("|").filter((el:string)=>el.length>5);
      if(reasonning.length===0){
        this.sendPrompt(prompt,depth+1);
      }
      return {score:parseInt(score),reasonning:reasonning};
    }catch(e){
      if(depth>10){
        return {score:0,reasonning:["Error while parsing answer"]};
      }
      return this.sendPrompt(prompt,depth+1);
    }
  }
}
