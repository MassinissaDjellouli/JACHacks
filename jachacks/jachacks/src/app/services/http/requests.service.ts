import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor() { }
  get = async <T>(url: string,auth_header:string=""): Promise<T> => {
    const response = await fetch(url,{
      headers:{
        "Authorization":auth_header
      }
    
    });
    const data = await response.json();
    return data;
  }

  post = async <T>(url: string, body: any,auth_header:string=""): Promise<T> => {
    const response = await fetch(url, {
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
        "Authorization":auth_header
      },
      body: JSON.stringify(body),
    });    
    console.log(JSON.stringify(body));
    
    const data = await response.json();
    return data;
  }
  put = async <T>(url: string, body: any,auth_header:string=""): Promise<T> => {
    const response = await fetch(url, {
      method: 'PUT',
      headers:{
        "Content-Type": "application/json",
        "Authorization":auth_header
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  }
  delete = async <T>(url: string,auth_header:string=""): Promise<T> => {
    const response = await fetch(url, {
      method: 'DELETE',
      headers:{
        "Authorization":auth_header
      },
    });
    const data = await response.json();
    return data;
  }    
}