import { Component } from '@angular/core';
import { PhishingDetectorService } from '../../../services/phishing/phishing-detector.service';

@Component({
  selector: 'app-phishing-detect',
  standalone: true,
  imports: [],
  templateUrl: './detect.component.html',
  styleUrl: './detect.component.scss'
})
export class PhishingDetectComponent {
  constructor(private phishingDetectorService:PhishingDetectorService) { }

  click = () => {
    // console.log('clicked');
    // this.phishingDetectorService.parseSMTP(`Delivered-To: massinissadjellouli@gmail.com
    // Received: by 2002:a05:6520:2553:b0:28f:3d68:49e3 with SMTP id cu19csp467081lkb;
    //         Tue, 30 Apr 2024 07:37:52 -0700 (PDT)
    // X-Google-Smtp-Source: AGHT+IFukRWvJ+R93kluVMlf9IOpz3gwUjAK630CpiRfEyWbxRMVw64UDmVHvESw5NiNUGXZBv+i
    // X-Received: by 2002:a05:6214:300b:b0:6a0:d20e:5406 with SMTP id ke11-20020a056214300b00b006a0d20e5406mr6232889qvb.17.1714487872567;
    //         Tue, 30 Apr 2024 07:37:52 -0700 (PDT)
    // ARC-Seal: i=1; a=rsa-sha256; t=1714487872; cv=none;
    //         d=google.com; s=arc-20160816;
    //         b=Z+x5hbHhsUXSrxrMIPcvpAU2IrWyIZRTj07OvL79DJibWeKL9JL08+6/e8aACd8APG
    //          QqmoTl06G9KJKMPbUmn1QZa40VWXk5rIsQm2qgaYQ3AP4LwgIyiYfVTMRZFTGjwUV6U1
    //          2PRYxDlWsxipPHRXWT5iD/tq5GsVVJDsMan3RYWKn+RMi/JCavCa3ctd9B2dMNMDhika
    //          LHN0uXEVEF8qDevNlWNywPFcPenQ4JhSFRwxD5DjhnaMMvdI4Dh/1q0Oj7WAKzMASR13
    //          95b3SotDpIDHo219/C6nHk48Jl59IM+rac3JNXKmzIQyrpYlP29Lzla8KmiFBYkCE55e
    //          q0xw==
    // ARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;
    //         h=mime-version:subject:message-id:to:reply-to:from:date
    //          :dkim-signature;
    //         bh=jD8Znb5vnpaXtBJQ2mcbu/sFMroi1MBPnNl0ZIK32Rs=;
    //         fh=hiiWbgPouy3pNXRM5ssZUcjmRMiP+9b+tfmpqor+fPM=;
    //         b=k01wzDFwKRCEWQrotZSrEUwNzoXtNAAGToa8YjObBXUj7tyoc52RVwBZerKgJkAIA7
    //          Q9V0WpNsrud2eCb8i0G9/wmA+w8Hkjwh9gcgOhvkcQl2HblyjpSIpa2nTf7EVf26xh7Q
    //          pRv71+xwFMDCahOeI75QRbNOLQPs5floITVsJdL2tdsvUN2SySw8MhHrPusAIv9JAuVY
    //          sLTkA2UaZPNX7u1UGMs7dyzlAueiKeMq3W13aH5nBw9YAp3GfWXBD/l1NMzyBHRfbZ/+
    //          RrqkcWXAXksvP90lrIaNVMVIU7T73ZprGgRnWa+woW/18OmJ+6whZmZScusudu6/0mnc
    //          Cqzw==;
    //         dara=google.com
    // ARC-Authentication-Results: i=1; mx.google.com;
    //        dkim=pass header.i=@cra-arc.gc.ca header.s=mail116 header.b=QVzPHrvz;
    //        spf=pass (google.com: domain of ne_pas_repondre-do_not_reply@cra-arc.gc.ca designates 198.103.184.36 as permitted sender) smtp.mailfrom=ne_pas_repondre-do_not_reply@cra-arc.gc.ca;
    //        dmarc=pass (p=REJECT sp=REJECT dis=NONE) header.from=cra-arc.gc.ca
    // Return-Path: <ne_pas_repondre-do_not_reply@cra-arc.gc.ca>
    // Received: from mail116.cra-arc.gc.ca (mail116.cra-arc.gc.ca. [198.103.184.36])
    //         by mx.google.com with ESMTPS id jk12-20020ad45d4c000000b006a0cde16c61si5126991qvb.417.2024.04.30.07.37.52
    //         for <MASSINISSADJELLOULI@gmail.com>
    //         (version=TLS1_2 cipher=ECDHE-ECDSA-AES128-GCM-SHA256 bits=128/128);
    //         Tue, 30 Apr 2024 07:37:52 -0700 (PDT)
    // Received-SPF: pass (google.com: domain of ne_pas_repondre-do_not_reply@cra-arc.gc.ca designates 198.103.184.36 as permitted sender) client-ip=198.103.184.36;
    // Authentication-Results: mx.google.com;
    //        dkim=pass header.i=@cra-arc.gc.ca header.s=mail116 header.b=QVzPHrvz;
    //        spf=pass (google.com: domain of ne_pas_repondre-do_not_reply@cra-arc.gc.ca designates 198.103.184.36 as permitted sender) smtp.mailfrom=ne_pas_repondre-do_not_reply@cra-arc.gc.ca;
    //        dmarc=pass (p=REJECT sp=REJECT dis=NONE) header.from=cra-arc.gc.ca
    // DKIM-Signature: v=1; a=rsa-sha256; c=simple/simple;
    //   d=cra-arc.gc.ca; s=mail116; t=1714487872;
    //   h=date:from:reply-to:to:message-id:subject:mime-version;
    //   bh=4PSQJ63Ui/FCLipAL6D7DHuZLHa8XLTopnFeu5gYdTw=;
    //   b=QVzPHrvzFJqN2MO7GaqALstoA4eWqsYSYa94uQvmyBC6Ntq7pCqD4Wrz
    //    5nreYwnKQAuua2pjpsPA+nBwPEqj8PCP2BCgtzVl1kaUXBVQtvQhc5S5L
    //    9sDApz3Qf+l3OZ/uE2HedGn+K1zWgSpkFrMKWn2hyKaC1XkCCtAS4M/vW
    //    g=;
    // Received: from unknown (HELO ec01lp4114y.isvcs.net) ([7.32.4.129])
    //   by mail116.cra-arc.gc.ca with ESMTP/TLS/ECDHE-RSA-AES128-GCM-SHA256; 30 Apr 2024 10:37:50 -0400
    // Received: from wls-cra-p104-01-jb-03.isvcs.net (localhost [127.0.0.1])
    //   by ec01lp4114y.isvcs.net (8.14.4/8.14.4) with ESMTP id 43UEboCN025266
    //   for <MASSINISSADJELLOULI@GMAIL.COM>; Tue, 30 Apr 2024 10:37:50 -0400
    // Date: Tue, 30 Apr 2024 10:37:50 -0400 (EDT)
    // From: Agence du Revenu du Canada / Canada Revenue Agency
    //  <ne_pas_repondre-do_not_reply@cra-arc.gc.ca>
    // Reply-To: Agence du Revenu du Canada / Canada Revenue Agency
    //  <ne_pas_repondre-do_not_reply@cra-arc.gc.ca>
    // To: MASSINISSADJELLOULI@GMAIL.COM
    // Message-ID: <826428152.231944.1714487870307@mailhost>
    // Subject: ID utilisateur(s) fourni(s) - Agence du revenu du Canada / User
    //  ID(s) provided - Canada Revenue Agency
    // MIME-Version: 1.0
    // Content-Type: multipart/related; 
    //   boundary="----=_Part_231942_708658302.1714487870273"
    
    // ------=_Part_231942_708658302.1714487870273
    // Content-Type: multipart/alternative; 
    //   boundary="----=_Part_231943_621527767.1714487870273"
    
    // ------=_Part_231943_621527767.1714487870273
    // Content-Type: text/plain; charset=ISO-8859-1
    // Content-Transfer-Encoding: quoted-printable
    
    // Agence du revenu du Canada | Canada Revenue Agency
    
    // Version fran=E7aise  *** The English version follows ***
    
    // Cher/Ch=E8re MASSINISSA DJELLOULI :
    
    // Votre/Vos ID utilisateur(s) a =E9t=E9 fourni r=E9cemment pour les services =
    // =E0 l'Agence du revenu du Canada.
    
    // Si vous avez effectu=E9 cette demande, veuillez ne pas tenir compte du pr=
    // =E9sent courriel.
    
    // Si vous n'avez pas effectu=E9 cette modification, veuillez t=E9l=E9phoner a=
    // u 1-800-959-7383.
    
    // Si vous t=E9l=E9phonez de l'ext=E9rieur du Canada et des =C9tats-Unis, appe=
    // lez-nous =E0 frais vir=E9s au 613-940-8496.
    
    // Le num=E9ro de t=E9l=E9imprimeur est le 1-800-665-0354.
    
    // Ce courriel vous a =E9t=E9 envoy=E9 par un syst=E8me automatis=E9. Veuillez=
    //  ne pas y r=E9pondre.=20
    
    // English version *** La version fran=E7aise pr=E9c=E8de ***
    
    // Dear MASSINISSA DJELLOULI:=20
    
    // Your user ID with the Canada Revenue Agency services was recently provided.
    
    // If you made this request please disregard this email.
    
    // If you did not make this request please call 1-800-959-8281.
    
    // If you're calling from outside Canada and the United States, call us collec=
    // t at 613-940-8495.
    
    // The TTY (teletypewriter) number is 1-800-665-0354.
    
    // This is an automated email message. Please do not reply.
    
    // Symbole du gouvernement du Canada | Symbol of the Government of Canada
    
    
    // ------=_Part_231943_621527767.1714487870273
    // Content-Type: text/html; charset=ISO-8859-1
    // Content-Transfer-Encoding: quoted-printable
    
    // <p style=3D'text-align:left;'<img src=3D'cid:image' alt=3D'Agence du revenu=
    //  du Canada | Canada Revenue Agency'></p><p style=3D'color:blue;font-weight:=
    // bold;margin-top:12px;margin-bottom:5px;text-align:center;'<span lang=3D'fr'=
    // >Version fran=E7aise</span> <span lang=3D'en'> *** The English version foll=
    // ows ***</span></p><p  lang=3D'fr'><span style=3D'font:Helvetica;'>Cher/Ch=
    // =E8re </span><span style=3D'font:Helvetica;'>MASSINISSA DJELLOULI</span><sp=
    // an style=3D'font:Helvetica;'> :</span><span style=3D'font:Helvetica;'><br><=
    // /span><span style=3D'font:Helvetica;'><br></span><span style=3D'font:Helvet=
    // ica;'>Votre/Vos ID utilisateur(s) a =E9t=E9 fourni r=E9cemment pour les ser=
    // vices =E0 l'Agence du revenu du Canada.</span><span style=3D'font:Helvetica=
    // ;'><br></span><span style=3D'font:Helvetica;'><br></span><span style=3D'fon=
    // t:Helvetica;'>Si vous avez effectu=E9 cette demande, veuillez ne pas tenir =
    // compte du pr=E9sent courriel.</span><span style=3D'font:Helvetica;'><br></s=
    // pan><span style=3D'font:Helvetica;'><br></span><span style=3D'font:Helvetic=
    // a;'>Si vous n'avez pas effectu=E9 cette modification, veuillez t=E9l=E9phon=
    // er au 1-800-959-7383.</span><span style=3D'font:Helvetica;'><br></span><spa=
    // n style=3D'font:Helvetica;'><br></span><span style=3D'font:Helvetica;'>Si v=
    // ous t=E9l=E9phonez de l'ext=E9rieur du Canada et des =C9tats-Unis, appelez-=
    // nous =E0 frais vir=E9s au 613-940-8496.</span><span style=3D'font:Helvetica=
    // ;'><br></span><span style=3D'font:Helvetica;'><br></span><span style=3D'fon=
    // t:Helvetica;'>Le num=E9ro de t=E9l=E9imprimeur est le 1-800-665-0354.</span=
    // ><span style=3D'font:Helvetica;'><br></span><span style=3D'font:Helvetica;'=
    // ><br></span><span style=3D'font:Helvetica;'>Ce courriel vous a =E9t=E9 envo=
    // y=E9 par un syst=E8me automatis=E9. Veuillez ne pas y r=E9pondre. </span></=
    // p><p style=3D'color:blue;font-weight:bold;margin-top:12px;margin-bottom:5px=
    // ;text-align:center;'<span lang=3D'en'>English version</span><span lang=3D'f=
    // r'> *** La version fran=E7aise pr=E9c=E8de ***</span></p><p  lang=3D'en'><s=
    // pan style=3D'font:Helvetica;'>Dear </span><span style=3D'font:Helvetica;'>M=
    // ASSINISSA DJELLOULI</span><span style=3D'font:Helvetica;'>: </span><span st=
    // yle=3D'font:Helvetica;'><br></span><span style=3D'font:Helvetica;'><br></sp=
    // an><span style=3D'font:Helvetica;'>Your user ID with the Canada Revenue Age=
    // ncy services was recently provided.</span><span style=3D'font:Helvetica;'><=
    // br></span><span style=3D'font:Helvetica;'><br></span><span style=3D'font:He=
    // lvetica;'>If you made this request please disregard this email.</span><span=
    //  style=3D'font:Helvetica;'><br></span><span style=3D'font:Helvetica;'><br><=
    // /span><span style=3D'font:Helvetica;'>If you did not make this request plea=
    // se call 1-800-959-8281.</span><span style=3D'font:Helvetica;'><br></span><s=
    // pan style=3D'font:Helvetica;'><br></span><span style=3D'font:Helvetica;'>If=
    //  you're calling from outside Canada and the United States, call us collect =
    // at 613-940-8495.</span><span style=3D'font:Helvetica;'><br></span><span sty=
    // le=3D'font:Helvetica;'><br></span><span style=3D'font:Helvetica;'>The TTY (=
    // teletypewriter) number is 1-800-665-0354.</span><span style=3D'font:Helveti=
    // ca;'><br></span><span style=3D'font:Helvetica;'><br></span><span style=3D'f=
    // ont:Helvetica;'>This is an automated email message. Please do not reply.</s=
    // pan></p><p style=3D'text-align:right;'<img src=3D'cid:image2' alt=3D'Symbol=
    // e du gouvernement du Canada | Symbol of the Government of Canada'></p>
    // ------=_Part_231943_621527767.1714487870273--
    
    // ------=_Part_231942_708658302.1714487870273
    // Content-Type: image/jpeg
    // Content-Transfer-Encoding: base64
    // Content-ID: <image>
    // Content-Disposition: inline
    
    // /9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAZAAA/+4ADkFkb2JlAGTAAAAAAf/b
    // AIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgIC
    // AwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD
    // AwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgAFADkAwERAAIRAQMRAf/EALwAAAEEAwEBAAAAAAAAAAAA
    // AAkABwgKBAUGAQIBAQEAAgIDAQAAAAAAAAAAAAABBwgCCQUGCgQQAAAEBAQFAgQDBQkBAAAAAAQF
    // BgcBAgMIFRYXGAARExQJEhkjJCUmIVEnMTIzNDdBocE1tyg4eAoaEQAABQEEBQcIBQURAAAAAAAA
    // ARECAwQhEhMFMUEUBgdRYSIyFRYI8HGBkbEjMwmhNDUXGOFSQyQZwdHxQmKCslNjc7N0VbU2djf/
    // 2gAMAwEAAhEDEQA/AB5Ga3XkhaYTQcBwfVKBFzS+peK6aEIyh6kf3ZjmMs3KMP7YcuNCXySmwyvy
    // Wl+c4v3R9ldFu9u2+tia7K8rQ5Gl9Tpfzi/she3AXvs9bZaVbqm1G4KHEP8AnVoLcrhtWjWauqp0
    // 4dAaUs0LUAMtmUYkEZ0iORXi0QPKwxqNlnDxN6lGhGFUTXoB6+08W+eVbu7pZfTzTw9tuymGSKGR
    // xtxUgvERvQyYTzjcxr3WYhtba4yafzTVXhy3+4u8ct7M2ynKsybwup9+6+jzDM6SlKeLLmS5q2B8
    // mA18ZzHStrIaiSmiMn7K2SVY4YpJY4dePzzVpZ2yNwh14Cia1iCovcEcEQKqUiykDjVTI4o9eOAm
    // 0FQIKCeAUi0qZtBEFIpFqAXXhRNBIkupTdMdX9Ir17c3irFVNnLeuanpYSlccb3ONXYr5Htjuk1G
    // sgY24cjj6RnGRo8+lnzxSfLvzvcXMsqp+AtJnO81dLlTHVtNBSG5lNsDKKhqK05nTvOSTNa2Z1TF
    // RRMN1PHHVvK9TRLAIjziqpUl/kXXwMpVquJwErTs2IpASlTKEmCyz1yc2jVn7MAPCUpKlSMkPVzk
    // hHnz5/jGPGOeKEsnfqrNj3k3CgsVxF8ItS2De75cGTZNU+E7K562ioZ6k88zVpvlp4JXGTZYkK89
    // jjMiU0Q0RNREC2/+c84OTm3K4uqdHR0d1g9xEgehXOzcyORFKhpU3tXpUxBmKFVpKfUqzTemE3Ln
    // HjI/BB735XmF9znJWN0mZp7pmhRo182Ogy+g4sbpty+np6Zj91Dc4oYo4mmfaVcSm2NrSVCIlQWH
    // eM3jqoFdTygXGXGgblKittyQb8r1BeL9CIS5N9KzNrlvkyijFVLZYkamc5sXmS60cVGqVyQ5JYYk
    // ViMKipMlKlG0zleFAiIeURTCyzWwciItY5lfeUK4pNOmoz9Duyy7imY57rwEIgbAixCUBrqKNlmN
    // seuEuVt3exMq4nVEzgnAW4Qe3SYP6g/CxBGPTytAACmFAbQqCDCp7AIiP6BnMPfFeQ/Ro2TQpG5Z
    // oR9F17kGubye4tOpFgXUUSaJVfZBd/cg5CLKUuxrwOax5UPKVawBCIR4w4NzE6DJ9QSwPSsVPKEF
    // Gk18wGXl6RhMn5MLj3JO2xEODcCxbTKtOI+2agT29DmmHDVR5BVG6CscRFueftOHkUwxdI4NOaIm
    // cuIJU9QOC9HnpaZC1NVFk/pkBjIis1gmstAkJ4mr77hbvFgd0HUVDdrIiObcGofNQFKarNKFUdvz
    // uuAfqIEesbOStG5LpmAJCAC4vmDF9NwK5I4IU3IDWQcErSTwplxAMiID7reRp+ZXBaN/lLdE1Bos
    // iu3G4xdvNbQETdROF9k9Opf7462UXyPfEpLlzIKH6UtMo1SHicrMKDMS44Kjg4DVJCivVLwItFgq
    // Eqc/74KmV35rdaWe+WK49sVY2C72mqq7ArtuVRGWVTxBG4FkbY0Q4yamPRJQdzSL0IHc4yMqA0UX
    // ig9MYHp9GjNLGSFSJCsQQiJSEQVvevfOhLtq9qQx8GmitEqtbZmoT4tUolmkGT3BB7l05TNVs+ZA
    // 3Zy7Uz/Ci5oz5U1ACTLEaSqEmqZBN6SlNasao0YTrAsRQ36m8rV2CqRrWKqUam2Cb5XuITWqO65Q
    // lJtkSjmkupYdg3Dcm68oJlFdA5rXsjQKzl9YlzfEcp6ZVZYyIdSTAoCxYwBVDrAQlsDsNlfbe84B
    // ijXQPHDZQgRqUU3iSSC6aFGteMUZG5Zh5BB7XI12josdE0VkD4nIkxUc8OoUX2AeMaM4eYOZ1TQL
    // Wknp1NQiEQkX49/IapLsnCYFADXFadbnY/x1ox+biidvQVDEkHcabuCQIw7Sx3IFPTaKGFFgkMdh
    // RSYGwxMvFBfjxk5SyzRBTIi9YMxxBxAwfKtKGlaBhxi/LlKb2tld2DVGV6pYnQJwbgRdtYdPL+Wr
    // M4hGn6Qk3PGXAPXURYpcBYUa5fUSVAwxWlUJ4GEsaQpfSBure41hWlIBQHxyqFa20Mc8lzpwQxd1
    // EB23b60FeLFBWyi1EoCW14/cZq7h26QJcqVGGKQNSRItYaQchelpiCKZ5x1M8HcXmPSCGtukb1mr
    // ub33ZSrPXEGD4qUuJQhn4dk6qWSTLHoKCIWxnd3UatJ3izLEebN8ZOqBMEicr8wqFoUmNyWZJHBJ
    // UomNMVRmqhKJNR6Q6K+sR7QHkuupU5auZ9xqlnQ60ba1p2VM4whEtCduFaUhlLeQSNFdiaVUglre
    // ADctStWUZhXF4hRolWGjsmTbdcObnxhXpUBlMeQck9f5Azp3e2+jENC/Z0w1yK1MjYxdryS3Htuv
    // j5GNolyq7UU3bitmQNaTEQEfbm6At6DbAKVWuMTDbECKDn6eE1FHIoCYDUCTSPPyCEReiwGP8jiF
    // G3EPN4zChBodinpIlM4b8KwOV3BIs3cZhTQknteWhgTnx+TlQIeFrDJoDaVQnriZYUpa1SMZI9SM
    // nAlK0QufSBGA7ibtLSmi0eR7hlNucE+43lJMhESaonChlJrlm2uVTFVgbXWBT7rMM/ClqMOdtWso
    // HhC2ydAlK0VMBoyinDChQLZwswyHKwzU9Amc916XkMRhO/aXJzAeAVFpkAaifJbUGiAAiEybO8J+
    // mSmYVWIs3UTdnhZJJaJbQpHNFKcbgo+iCM0GAHqIELDCBQIVEISwxxRZc/fw5DcKWRJXUnwBPt9b
    // 55NXwbd7GuQDNO+Nf2NsR1aeGYUEo12cW0pNpFqTBlg5SyJRQxBJosArMmLKMQQ2A2gMHcAQlTzB
    // xzbyZXJ0aCnQSJq5/uxAvrcifJi20G1JgLMzFjyDxiunckw5GdAyolCHheilncDRTQMkPZhgcwUg
    // qFUoDDK9akOpUSCIVh6hC33Dr4Ol196ab2+ZBzNuOxBnswbmdOsybatVfb72u4X2X1jTrDtWMb+i
    // 4ry+S4tmmwckLk/g9YrqG3+VGf54eN/vD1f8ONA39Q/MPs/oPr0P96z+kQuF3a+Mme+KyazlxGrj
    // 2tyaBt0YBIJiJ8pKhY3igQBunkkMUZYsAwqmZUynL9IYKNAg8rBzmNevTgFrUxFKelELsLnu4Um9
    // W5+T5jlZH29Dl1LGROfdifE5jDcT1W7cU3tcxpvO1hk4jK50J8DfGIXhv8RO/wDupvr0+EWab153
    // VVGDAUldBWxT1LYJKVzTjOXHNkdPJDUSlAxjjmjfC9smNBSz3wTuEqHoTKiuQUSDUlv6YUbjFimp
    // s4tz6gozdeNC4Q9GSI06rnSYSp2SJI5UCcFCKg0pqzGUwWjJShEDVrdal6ruzwrr8wzOOTN3RuyN
    // kszJDgkMn4lPK6I4zvNa5rHPY7pMV10v4hneLZXj18yrdXJeH1ZlPCSkzOk4o1lJQSU55rRwnTxU
    // WaULKva4WxVFTDNUxQVEbGxVLSpyke56VLI8N8ZPOjCEvkicKSEY8pWjZaEPVNNNNGECc5hCMZ55
    // pp5o/nGMYxjH9vHheKJXd+qsi0FFT8/6Itek/OYzD8to18JGVGaKee5tzfpYdWoF3/8AN7/xvuQ/
    // 7Gyf6TN1xkngf9l5j/nG/wCEwaKfNt/9a3R/6kf+51wsXcZwHU8BSXQeQFboJzVIzrCsoo1QMbu4
    // qwllntfI2gjZ2xbs+u7f9jEjlcUlBS6TTjqwwkZZyKYqublYIUEJBxyUzTSDadMxpgaKRewxyVuZ
    // xau+NzzBPMnU1chFcPS0D63mNYRua6yiPmpakyTZy3ltS/NyduKrgqFPpdfqlOvJEOCDgKIkkLy8
    // WbThJQQkwFRFwW0iMhrGTdi8x6C03uobt0LUGlt0LrvHSaAgtqX7XmyfioWrai6lVWxOOvFpcOBW
    // E5glLiV4bpI5Pk8ACJgSSyCq5cQD6NcSJFHFC82sDJLLVGsFeYxl6CscojFW8rhRrxqgJALQiWb5
    // cW5uOvj6ivLqUDZ5FMGtIjdWJMybgjHKcIiGViFQGoKtgQnqiqlAYFFAA5BEsXy5R9ON5fW2YFrl
    // c4K5ttUDeKZEL24spfhAnDsW1pAzJj23NMN8tVxFFG5s5RUHf5wF437hk5mliogpCBxnTkEBzCoV
    // iA8tKqQEX0jpnK8gp/B8kCimit7PhLNKK8I/ttd9+DwrQQogcU6QFrD0O246MSyTgvSVwgByVmrd
    // FqdBKE6K5ygUZF48vnlpBuyHCBF6wRLQ/dit+ja3o1HYRqPQ4dFGjJlzUiTopJXBaN2kRUSzuJk4
    // N0ODKluzCrVyJnUJMES40vPCejXqSFIsNLJRriw1WiInhklgGRlaJ91ikqEGII4EFhfXNi6iKDF5
    // pWBBqpiADjul3ocEOnpzCQtEZ0JOrJJNLLU9EvqhHlDgIPDInKDkBXKjcqLjUrFTSzii0yAhhwAT
    // PIJkGSTVwYqlVD1ppBdOWrCM0sYwqSwm/ehz4AM2NGlNGaM1KnNGaenUmjGSWMZp6M0s1KebnD8Z
    // 6U0kIyx/bLGEOX7OADFBFhaW91hxeBAd8NEmQ3sggcL3hiMjJMMHiuhTp9wNFTU5Y1Ks/OeeMsPV
    // GPLgAzuACFHkPuYq2m2jOm7JOeEyeXouVLtc0ZofhJjQnL3ieZWkjVtmdm5HQpCBh+nkirFaHOjg
    // IHp1Ks5KWi5oQhLJNNKIUrTEEmP8ojoLS3FhaiNa5N3RXExbm7kzfkaBcIExaLFTeP5YI5pHqWyV
    // lGohWiqKnfJYr5NHCGS4gvLAExQpadYwNCwLQlq1qgJYpjOQHmUAOIuUyVEdux1XQJjWbxIqtSAV
    // gqDpaI5zHAtRTN1HIUjCZmxqRrsqkQa0KkqcK8SqwA4KfiZqspHUK6eITW6YImkbBBeVxz1oGbFK
    // irRCtPvfcalLSV9bS39e4sEYo1UI27BFXEOMDHvA5YJoe6ac1alE2sK8coAhSQrOUR6S6iV1jCsM
    // qyBImsE5Q6pP5JFVRctJMA4trKnby45ZOZbajidp5nVQyzpC0Q86edBQuQ7YFaJEOYkRilmPC27u
    // TMKo0oREj6adAS14Fgs4kCAyeoELUCo8QQLgAXAAuABcAC4AKsAj/wCYjt6/WwDo9Kp1uW+T1dLp
    // zdTl6Pic+nz/AHfx/LjXl/3DXDvX7qGv2noHdPD+2OxW4O04t4k/4fpUk02aeWwWW2h0/wBJmw0n
    // 9GlmnaK006eL9PT/AC0WZN6eP/XvRl3tuXe/N8v43xPVxnXJ9g7IpeyvsvZosHrfCuNw+v0+onW6
    // XLao6g9/O9HfjOe/C99O1avtBcJdt2iTa1wPcrj4i4Puv6voIOoIMt9oLyvgfY40oO+wDsO0zHjY
    // 7NXd4d8HG8x9ziHr+P3vV63xfXx+qn2a47ZMPDxHrcRL948Rbtl+/evrbeVbVHhMy7Vx2dsbRtOz
    // QXMa/e2fBZs12/bg4GHgJ0MG5h9C6Ah33eyLuQP98WGbh8po7Hu83RevK/ZCcpf0u+y/5PqfwfmO
    // XLrfj6eMR72fdL3hm70L29cjxE23q3fd/A931eT02qOxjw0/tFvukpfw5Y33V7dVYN3u6m0X27T9
    // o/rfXu9foacOxRL/AMbnt8aauN7d3a6c6iS6gdprD08/5WIOX9ZPrHPLXY/yXyf5/F6nHs24XcnZ
    // KnuSuy45Yq7R8S41PrHS6idWwYI8XH4p+9+U/itv97Oyf1G92Uuw7RN/pXuvrGN8X3v8y6CM8e+j
    // U4Bduf8Abx3oE2qG43VXU2yfVLRrcXt21u1wSewvdJpV+mmftUMMwPHfh9hhuOfI4DxdQtqcw1Pj
    // +9uDc6M2zbjdWtFXt0m1i3G6XbVdf0Rn3bXqZ+mOkGuGH4bhv1Ttel0/o2HcBTvaw3xn7Ym7NQ9b
    // dRk3eITZ5w7cT7aHuG6hFGF5s7X9E9Ztb8P7v1fZ2qPb9995+nh7RNQalqPZ779rcD3aZbyMhtvu
    // oe7DSrb9vktW0O0lzB9q6a7rsiYL6PuPCvVi/wBF6XFt1aQ6SHyfkHc3Se0vqG/WpW5XM2F3o7st
    // D9zfq0dyXbZuv1O0s+5NE+hp7zwL8e963afKY3xLQtTmHNOR7Qmoxtrnuryf6lHnzPG7HaprnsMW
    // msOecrfpvub2XYtm3n8bE+85fdOJcX2h0hN3x47TdT3n0L3ZayaNW062bpdb8dyF6nb26dHVf7X7
    // vLOM8sq/Ldr08S+p9xxD0hahcgK9xBAuABcAC4AFwAR4fDbznS2LXPCM1a9T7acex7sNf9Gnf7Ts
    // sP8At3Mmk2bMOxj4HW59p9R7TikuoUlQ0Ff3zC6OdRx9tuheqedbk922ad0ubs0bNLec/wCUNsv3
    // 11ttmSM491+jPY4dnz6ng/FLQYpL6E8vLTyCYbH+1R3LJYTqhmnSJqezzXuV00zJsgJMratZI/2a
    // 7xtl/aevqffmW+27L5PseJav8oLebSHIXntN5CQ2N9DDtB7D9G9Ndxms2k+NPnsR0C0k/XbPnX1B
    // wvKH3nhOK4l9O6vC0OlzhgbZtp3uTWuaTaD6L+2w4ntt6Y9fNGU9Xm73b6tZq+7M/wCOZewDrfVO
    // eecX+qd/wP6RLdeny8vUD+cQQLgAXAAuABcAC4AP/9k=
    // ------=_Part_231942_708658302.1714487870273
    // Content-Type: image/jpeg
    // Content-Transfer-Encoding: base64
    // Content-ID: <image2>
    // Content-Disposition: inline
    
    // /9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAZAAA/+4ADkFkb2JlAGTAAAAAAf/b
    // AIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgIC
    // AwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD
    // AwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgAGwBzAwERAAIRAQMRAf/EALMAAAIDAAIDAAAAAAAAAAAA
    // AAgJAAcKBgsDBAUBAAMBAAIDAQAAAAAAAAAAAAABAwIEBwUICQoQAAAFAgMHAgIGBwgDAAAAAAME
    // BQYHAggBFQkAExQWFxgZERImCiMzJCU1KCEiMmJUVScxQ2M0ZGaWZ4c5SREAAQIDBQMJBAYLAAAA
    // AAAAAQACERIDITFBBAXwYTJRcYGh0RMzBgfBQhQIkeEiI1NjsfFSYpKiQ1QVNkf/2gAMAwEAAhED
    // EQA/AGm66utfNlv0xsbTO05yCerXuy+pR62XLIx8gnLYEOKMxKKelRcx2ihKoB1GUZZe1KsWUhji
    // oXMJbdb4wJqosbHOBYkj9KoxkwLjwhMptk0Y7V48jtIGu7bpPUNuWXUIvjL9w15QQlxC04nOcBxF
    // XCseoMtYulAitgkTZgUskpiMVJiAp1AVBkUyNhWNWRWInCxKm1BLCJCsNut0150tEmidWZYc4tRS
    // 1JkXEWbBy1IK3CMbOd9ykltpkyew2wurqmXakeK60tVJqu3wBA0kBUMpghUtgF6hlmtAiBjfBa29
    // ksKbCFNhCmwhTYQpsIU2EL0FRLTFxMUUVaTiKujLBA2lqySqFC59MVExQLiFD6cokDYYpU6ROlRq
    // whgRKKgxA6saasMcMccNhCw1MWAI7tg+b9iuL4cTBWlGS/Gz9llJYRJRUxm0z1eQrRpfwdqS1k06
    // cMgordUXI2hVQJPL4UEiYpyoIuGEAGCEGY9Ct/Rt5VyjSAdN0QUC6g52z8ukPmbgW7byRT0ZcWjd
    // axQ2lYedkxwqcemjCkCjlZHQqjZU8mZlXl9WJevAUMWrdhVeoPp7X1xmlay/yi2m/U+4y4gOORz6
    // 4eaUCB3rIhzJjLYcYR/Rb8+ei+jFT1P9LMv68Pr6b6cuzeuPfVo0WikcxSGjVKFPPNbTNV2QrBtS
    // jmPhx34D2yOY2Z7fNqeui8AbT8stHvOBJtqUw5DlhGa4xdwVnHq5Y8SYrbqaluqVVAgqHUU4+nOv
    // 0mDVHACYgYpo5TEb1N1j+r871/MFbyhpL/NcozE+YFFziTVfSFOnB9YxINRxtbCBLJS77RKn8m+i
    // +glL5o/UKl8vzqmb8knStMq5gOoBmUy+eq6lXqVMtprH02VWZPL0JKZ75s4rsryfcNpQf1x1P8dV
    // /wCoPjv85V+z/HfW/tf439v723cUw3f6jHDaHUvmJ8N+X/3qTgH8F38l25Y1LAQ658+ajVl6ScKl
    // M+Vvpv5eNJc7vBsADsLtWeECNCYXF+otADUIthKwJ4Y4Y4hBkA/b6e3DHDtvFeibrKNmIC7KfYXH
    // XC3/AB0xZUbnKEjtNCerX5gZrryFxp4Col4uOPHigyCx1rEoYpqCxUGs9munKhITHD1AOkwhKf1q
    // MNhCRNDsW6tV21+N7pm7WWpqszshiF2iMizVlW4rEONY9MyfWtLZZNllafZhsyRICyTwZiQnKhwk
    // fGTieCwuYFAytIZA2V2dy1YAOVUbpU6hd4o2q3fHpK3XSaTuWQ7e0p3PqFrh1NotBkSlU1m8txdl
    // rSkwlH6M1mU6DZ1ny+m11KRZLJGQlNNNYCb8E0DgUE3NAYHcqD7UfvT1ZLR9bS1O0uFrx0mSo2uY
    // NRg5IviyXIZixOYjXCmN9yDDiw25VVosZzKkN9NOPDDdFcRIYorEFIUEEMuIJWOFiZFWO5aa1rqZ
    // JvCO7Vria++zKyiWb5YG1Tbr1KboDTWe83W0ZBZ1rarAL9blTnbrfeyYmxIiwI3QWhWWKKwh9Nqx
    // UVIbAItiTMCGRh6T4BbBZbKXAEWdqsZEv81BbrdBtkXrWXw22XXffJrHJpBRmIYCQeQUd1tuYlCI
    // pYkBnNV6rRJNV6iBBrqi2jIigeHpBrFBDH4+kCsEyJEBroG5DxeLH+phYxpSD3wiajNwhm+KGo4j
    // OULgmVIiPb3INuzqW3GsNRPlWK0qOE+KySM20xniOIyXRlRAPAGTdSfhjUJXiaoGLuKbQCZd6Mpg
    // 6zzVRtFFhass+sMukrK1HlYZ2JGSp1lwXtN5aRlmGE1msY6tVKJxIQnxIaJiZAENZgOiIo1YxjE3
    // wgtQiSLTNLiqq0yaNRnUit7bt9N0V6Uk2yoM4GVV02720WisWCG+0Y+jEsrKSQ3HVIDtnGFZlfEm
    // OF5gEKFAqWNGw0gJOEBGqL1CG6yxMQ4SmWyISVYgM3AB/N2xS0rm19mPWUowjl6x2XkpjtcwyU6V
    // o5KWays7o5kZeaVauspzefyygvPhXCWSxAUelXIj4kS5cvjQFS8d0FSzubOVO2cMNam00asEmRMl
    // nHFZJpTRvFDccCDIltCZCLQflzUiGkFs1k0RWfx1vvCREIZFdzkcYZkqTJpJYqloIWGNWIymCaF4
    // mVyORyM3wVCjRmhNIxrZoRhGUCMImHOV5PVvMOva8KZ13P53OmjNIMxXq1gyeWaTvHulmkbNCEZW
    // xjCwTY6u9ubt914knSRuQkNPvctimBhVv2DXrObAjEWdIWNHoofEhBJqq7WYzmkiv1KGPxkspRmp
    // QTcVGsqZTzFJmnEEyCZM1kclngG52jSrBsYTsa6Eb4TAwjinpOua7oIfmNCz2byVR8A80K1SiXAG
    // LZjTc0kA2iNxtvWq7IkT+TJP4TkX4eU/BP5N9R+E/wCn+p/d238Nlvw2cEnCOD9i7h/du3Lhf5PU
    // f7iv4/feI7xvxb/E/M4t66+7Uvhp4aLmu7DupsK3XAds/m64sWXVh6ohAyrAtddllurbIupjFWxB
    // pBDLvA6kulaeLcKCbuhaLGKypasUcgb3d96g37dMsxC7ABlPVoSQz2xIEfuZDebHeqCluhou1tKR
    // RZb7kbq2TBUEhaRVUiKMTUE1RImKBQRQ66qK6KsMcMdhRQY6g1xjzhWJm/G8DqyQHeFdK8UyBbUE
    // M+lYucUs/HNVRU7piVGoGXO4qUeW1xxQqPtyjGQsuDT0TAsPVvDhcEZpgR5kgbT1vk1BNb6767Im
    // 27jz9ltglsTjKtOpmQWy48ruPlYRfcL4RmUmuCW5HbD8OME4opTCNqi+fbpNMGJ74BNT8KRcRlIB
    // LTmygE3lDZpbtWPo4+an1FmJHR5SNNVGhaXk4iacL0dMhONTdFahaIsSGMvPd8Lbkd7ocVb5NKgh
    // 4woHzRnAxvKKqsMKMKaXdHmC2/wW8/avu6xRjEL5n3RuqBMbqsNsW4hDY0C4UVUBnbiriCuAQnpV
    // hjTSdoFqDwwx+swxxpw9fXZJsgaTk9n5gUQMPRrv9xEEoDwrhgAGjESumjCoYw+GiAXBpxqxwwqF
    // HHEpoopw/TXXVhTh6444YbHYVJnGOdIOgzU6fWlv8r1ZhN0PtJsvOVH3LMxQazjjvDPqLKYC2rTt
    // dA91d1upISTiYcXTCS3GEcCIpeB0lxCiZL1iV1ABihCGEVuWeoW7YK578oCuac+gdPl1mopd1IU+
    // Tm8bf41lBtxS2TLbhm2OHl9+PWOFRhN1Nj2IEZm0zG8EE2uliuKg8jriICKnsEIEwKwwjAhhBJni
    // AC6KB6W4Xe8w/J4WsLjETzi3TAclqs6PhOSgRjp2mPWhc3cE0nurcKVwrFrKskk8qlpQq9McCpJL
    // MDV+mAVWOB2LYMKy1B6D02M6dNJCxhdZ51KHqYUFtGEHcnJg5WsRAfMIkA4zcyYpFSwglSecNGm3
    // SoBhiYU1jEjwBinDEMYOqovtUniDyN6z+vR+s8585zF9ZRWJbtBjWmLFgzQZoFAwkA1ZFK7hBRMR
    // aa8Qwz+VuYgDUF6+6kfH2Y4YV+uGAqAfcHnRRIWoZqE6lOsdcZp3W2zUj2QWt2gnZBJTHIjRjphP
    // +46QkyNXY3Y5XqWmsS43n0x2mpPd6rtVKOOCg+iOihVHhqzpmouWrFgsgyY4oJ1+M2RC/wA3XaSx
    // Wq6Hi7hykSpRl8PCTpIdMoSG6JCUrTrjS4ym8XU8FZUOgrKi2CaTiAmE8CKURJbiggSKl8aA8Gb4
    // 7lSMaB5+xbq9koJf+qTwXYZcTmXZdl/KJTj/ACEZ92k8FnqVxXVLlX4o9dx7sny37fnfCcP9L7Nm
    // ELI9pc+3pIN2ueX/ACjnR9Zt4bd54xPbnNXu6VeYn435w+sznJP1t9u/T+52RVPo6drk9rTx5I78
    // nXkOe87drdXUvyLdwvlkzzqWT4Hpz1I/L92TcL7826SfDvNmX8X9o3ezWT7ejb60nG1bkXyx6iXI
    // PN/OnMC91J8GPcbytwXUeQsy70e5b+gPWDgtxw/Sf7w5mz/gftXF7JP3B7ec3IJIA6Q+ZZk9HuWe
    // Z+EnzhfFH3xd5fLvsU9z3j99f9IOs2Q73qxxnxTzFu9798cNsfQtWyY9ULzdv2uVj37doXlXtgzr
    // iM4yyzHL+uHnJ79cv5tryDtN6f8AwJxOX7np/mf3nzzmOc/beK2fvJiPdm/qh07XbloN16+lfi4K
    // 9U+pPKfCRbwvWzvM6LcdzjGfB97vZt/WviNz78l4z7v5+4Livpd3slNnFt1bXJEEM9t/gLuf5e7J
    // umnX5J5x7h/K32EcTzKd3PbV1P8Aza91nu3OY8ifZMx+t/RxWxgtO8TG/p25FZz46XeJ63/nnq1y
    // DyJHfT/y+d4fjM4Pp8JzP0P7dfzLbrJuI6F9Tvt/AcHkH3pwOzwwR73T0/rRIfL18odrLUyXr/yx
    // zfdl0/5w64+L7Pcsfufchc/f1e3XL/471N+Hcy5iyf762Ck+/tv6UOOkdk/PV2HQbqnm3UYbqZ4A
    // +e/HlvMhT8xzXyS/BXVze7zL+kf0WRcPwX0e52BDGCDfb17bYpSbr7ffM/HGUZBk/cWkcL0N8nXf
    // LzD1Vfnr1j55+O/JfxHt5v4z4X3nD+n0Hv2Spb3Zv6tvqTq5Q5G8+725Z43rL0pp9vix7iu//J+U
    // Il4PyAdXPyFZNwW/zr3ffvE8u8T9r4TZhTEZOnowu3+xL3ua6M+Wa3Tkzl/qP3IIGV9Cu/bzXZ5k
    // 1GY9yfXz8qfVLm3f5TnHw7099OB+G+E2DfgtDhMY483Utav3H0q/+mOS9Jf+w+YOoveZ/wA/7yOf
    // /wDxXyz/ALM2eO3Ipr//2Q==
    // ------=_Part_231942_708658302.1714487870273--
    // `);
    this.phishingDetectorService.detectPhishingFromSMTP(`Received: from YT2PR01MB10780.CANPRD01.PROD.OUTLOOK.COM (2603:10b6:b01:f0::19)
    by YT3PR01MB6260.CANPRD01.PROD.OUTLOOK.COM with HTTPS; Fri, 10 May 2024
    20:53:10 +0000
   Received: from YT3PR01CA0125.CANPRD01.PROD.OUTLOOK.COM (2603:10b6:b01:83::26)
    by YT2PR01MB10780.CANPRD01.PROD.OUTLOOK.COM (2603:10b6:b01:f0::19) with
    Microsoft SMTP Server (version=TLS1_2,
    cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id 15.20.7544.49; Fri, 10 May
    2024 20:53:07 +0000
   Received: from YT2PEPF000001CB.CANPRD01.PROD.OUTLOOK.COM
    (2603:10b6:b01:83:cafe::65) by YT3PR01CA0125.outlook.office365.com
    (2603:10b6:b01:83::26) with Microsoft SMTP Server (version=TLS1_2,
    cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id 15.20.7544.49 via Frontend
    Transport; Fri, 10 May 2024 20:53:07 +0000
   Authentication-Results: spf=pass (sender IP is 185.71.125.108)
    smtp.mailfrom=pretix.eu; dkim=pass (signature was verified)
    header.d=pretix.eu;dmarc=pass action=none header.from=pretix.eu;compauth=pass
    reason=100
   Received-SPF: Pass (protection.outlook.com: domain of pretix.eu designates
    185.71.125.108 as permitted sender) receiver=protection.outlook.com;
    client-ip=185.71.125.108; helo=o8.shr1-de.smtp.net; pr=C
   Received: from o8.shr1-de.smtp.net (185.71.125.108) by
    YT2PEPF000001CB.mail.protection.outlook.com (10.167.241.23) with Microsoft
    SMTP Server (version=TLS1_3, cipher=TLS_AES_256_GCM_SHA384) id 15.20.7544.18
    via Frontend Transport; Fri, 10 May 2024 20:53:07 +0000
   DKIM-Signature: v=1; a=rsa-sha256; c=relaxed; s=smtp; d=pretix.eu;
    h=X-CSA-Complaints:Content-Type:MIME-Version:Subject:From:To:Date:Message-ID:
    Reply-To:List-Help; i=support@pretix.eu;
    bh=zwyD2HcYZELwJMs5f5PDGGnUY753tc9izXabSwnTaxY=;
    b=w3EMolYEGWYbP6grh21Ke3Ld4EalZmXGr30RLG/iRnBV0q49fthAzrlI2szVKYJiJ0u6HBGsQbkZ
      6/0mjVVfkWV0FpzpyoZqSvF/hVFihHZT4VZWLf57HcO53xaS0x+ZEZHN0hrTysXcJxRbcSVLl3KN
      X4vApRYinUtWajLn7OOmns26xth+CZs1pMM9KLd3H2eyDGgfyLuv63M0FGBkp3dN56C3Y2Drwq36
      Um/TGHkQb1VRRoAEAtqo2RovlxvcdL2/oRd7qxgTVp3K1DjzavN7Ut7ql5OTMFyyHDjCF2igsuXU
      dWHfxMHdlIRnZSHoEKCKHdgv9Xi7K8z10BANTA==
   X-CSA-Complaints: csa-complaints@eco.de
   Content-Type: multipart/alternative;
    boundary="===============6282216612940523072=="
   Subject: [NorthSec] CTF Information
   From: NorthSec 2024 <support@pretix.eu>
   To: Massinissa.djellouli.1@ens.etsmtl.ca
   Date: Fri, 10 May 2024 20:53:03 -0000
   Message-ID: <171537438301.210495.5743657903355718381@production-w3.pretix-app4.rami.io>
   X-Auto-Response-Suppress: OOF, NRN, AutoReply, RN
   Auto-Submitted: auto-generated
   X-Mailer: pretix
   Reply-To: contact@nsec.io
   X-Complaints-To: abuse@smtp.net
   List-Help: <https://www.rapidmail.de/unsubscribe_help>
   Return-Path: robot-vZTeaQIqWgZjJ9rn@pretix.eu
   X-MS-Exchange-Organization-ExpirationStartTime: 10 May 2024 20:53:07.3201
    (UTC)
   X-MS-Exchange-Organization-ExpirationStartTimeReason: OriginalSubmit
   X-MS-Exchange-Organization-ExpirationInterval: 1:00:00:00.0000000
   X-MS-Exchange-Organization-ExpirationIntervalReason: OriginalSubmit
   X-MS-Exchange-Organization-Network-Message-Id:
    3246927a-20c5-43a9-d37b-08dc713331d6
   X-EOPAttributedMessage: 0
   X-EOPTenantAttributedMessage: 70aae3b7-9f3b-484d-8f95-49e8fbb783c0:0
   X-MS-Exchange-Organization-MessageDirectionality: Incoming
   X-MS-PublicTrafficType: Email
   X-MS-TrafficTypeDiagnostic:
    YT2PEPF000001CB:EE_|YT2PR01MB10780:EE_|YT3PR01MB6260:EE_
   X-MS-Exchange-Organization-AuthSource:
    YT2PEPF000001CB.CANPRD01.PROD.OUTLOOK.COM
   X-MS-Exchange-Organization-AuthAs: Anonymous
   X-MS-Office365-Filtering-Correlation-Id: 3246927a-20c5-43a9-d37b-08dc713331d6
   X-MS-Exchange-AtpMessageProperties: SA|SL
   X-MS-Exchange-Organization-SCL: 1
   X-Microsoft-Antispam: BCL:4;ARA:13230031|4073199003|5073199003;
   X-Forefront-Antispam-Report:
    CIP:185.71.125.108;CTRY:DE;LANG:en;SCL:1;SRV:;IPV:NLI;SFV:NSPM;H:o8.shr1-de.smtp.net;PTR:o8.shr1-de.smtp.net;CAT:NONE;SFS:(13230031)(4073199003)(5073199003);DIR:INB;
   X-MS-Exchange-ABP-GUID: 3dbd4b1c-9966-4460-ae7d-e7941d00f2e9
   X-MS-Exchange-CrossTenant-OriginalArrivalTime: 10 May 2024 20:53:07.0232
    (UTC)
   X-MS-Exchange-CrossTenant-Network-Message-Id: 3246927a-20c5-43a9-d37b-08dc713331d6
   X-MS-Exchange-CrossTenant-Id: 70aae3b7-9f3b-484d-8f95-49e8fbb783c0
   X-MS-Exchange-CrossTenant-AuthSource:
    YT2PEPF000001CB.CANPRD01.PROD.OUTLOOK.COM
   X-MS-Exchange-CrossTenant-AuthAs: Anonymous
   X-MS-Exchange-CrossTenant-FromEntityHeader: Internet
   X-MS-Exchange-Transport-CrossTenantHeadersStamped: YT2PR01MB10780
   X-MS-Exchange-Transport-EndToEndLatency: 00:00:03.3413115
   X-MS-Exchange-Processed-By-BccFoldering: 15.20.7544.049
   X-Microsoft-Antispam-Mailbox-Delivery:
     ucf:0;jmr:0;auth:0;dest:I;ENG:(910001)(944506478)(944626604)(920097)(930097)(140003)(1420198);
   X-Microsoft-Antispam-Message-Info:
     =?Windows-1252?Q?yvkA7cp92pK1xihd1lSJguKnZD+4EnxZVSmmHLJqx/5BwYDJuYKsLfv+?=
    =?Windows-1252?Q?EfQTVmr5Cssr/wKqBR1qG8grJnQtr08dMi8MKpJMxGMKyOyHNaRpSA8U?=
    =?Windows-1252?Q?PCy2DFClTbnCcdvmQj6LuXOk+84xS9ZT8YDuWiTPFSDZMYeNJkliWhdW?=
    =?Windows-1252?Q?tZm0YOVI+1TIGRDaYXzQPiMYU/qBCaKjJkT1b/bi4Zln2Wsi8AEAc5Gs?=
    =?Windows-1252?Q?D8kMVj285suWszKpUgqtt81CavfWmSEGbtJg+D79foAHsy9XTpoafp22?=
    =?Windows-1252?Q?uT+6UbQsLCZylVBK0wuckbM576dFoodlZeF7qPSbaLGZO1tpuXQ4V88b?=
    =?Windows-1252?Q?8Y+/BWDhtKCud08GBi7Q9zO+p8r7sXQEYEy3fpeNPW5xhjA6uMBEobpY?=
    =?Windows-1252?Q?1rXK/py04vAOzSoTDaqYv/LFAAo4xvwrSugriIzpAw2ibx+b4pmH8RpL?=
    =?Windows-1252?Q?EPCFIEz/3I5M9tz7t2RBZ4OFvklMs2rYnwZa72J99UI1M7Z7IWQ/lsuK?=
    =?Windows-1252?Q?pkaq/wPrR6IJcgREsS4OIceYmtbLWKZXymxOooV/v2VIuUrnYd45b24V?=
    =?Windows-1252?Q?qoxKtWfGySaSiTbggx003YqLysvuXp3huzhYt6VCKP6k//NzrdUj2DgX?=
    =?Windows-1252?Q?02NPhOBLnbHo+W2Q8Kn5oN8VbFfOSHi263IHJtDM78kwJE13SyCLaRV7?=
    =?Windows-1252?Q?hOD93y6SLJPvTKywRtGWzGyZKnSesidZmIXLvB89RJ/DFLovxsr7nPod?=
    =?Windows-1252?Q?Jjn4S6VMIE6sWuZKANPPvvOcHkjC9smD03z4+9ObovBqrdErLkYuRMvJ?=
    =?Windows-1252?Q?N6M2G20nMCz9GTcDN880GKJC3ErQozMiHoOS3q//lAu/HkhDe5ymG/xV?=
    =?Windows-1252?Q?lI5nDizsrQN/N4up61clDPAUIVcPJX3xQT1TnG27fPeJWVvYoOGc87yW?=
    =?Windows-1252?Q?DD+27jabQ3KdwH+5sJVRQ75cQnf2u9i7lIDdVjoJCN23lOkoxr4g4OZM?=
    =?Windows-1252?Q?CAEB/tr1dDCl6+fpopnYnzSvb5HtbZ9oVpgIZcUNN45xbchG6XTlTLqM?=
    =?Windows-1252?Q?CtTltKelLmvMjYCnNo0tR+5AIIZZrYhC4C0dKPxtJqUPTZHMHezMXpVZ?=
    =?Windows-1252?Q?aAoq1uCCvaojMx5UL9FrCPeqsree7KWbUvVeXXuAXYsHIEQTXgQSy+IX?=
    =?Windows-1252?Q?Eho9X40B2P7OlPpKVIXdzic55uQGz+ko466yS5KFh1Bs57T/tRjRUM/Z?=
    =?Windows-1252?Q?5aJE0aLsYIj3Dv5qPACAF3asZvR9xQPYMS7eyuigWXAmXnM6O3raAAzx?=
    =?Windows-1252?Q?IXX0P9W3q2swDifSlbcBfEPb1UEss54V2QB1bXLL9PcmYzhWNeH65hkb?=
    =?Windows-1252?Q?dCMdT1q3QNQ5RbVT/ltw6icHgwxiHuzjoGU3NhWcfsteVKiAC2L4bC7J?=
    =?Windows-1252?Q?UUedfNxqSz5GOR9+qe9Wmp+P1z8c9IWLKGRMF5miGywR6vB8XCs/t1iT?=
    =?Windows-1252?Q?pUb4iETng0Lczd1oJrRU+DUKxXy7OvPhhSyVeAbmcz6FfwBYUVdhQWNl?=
    =?Windows-1252?Q?7nnm0k+PCsozlndHNGQL6wDJCDE8neWkU7GKMGhPs7i8Xr0ZvjXpOLQf?=
    =?Windows-1252?Q?hPJ+u/Yaep5GsXsF4SiUx+fYncCEtBInJXQS5J3p9ivPDAmikh7HafnN?=
    =?Windows-1252?Q?vCDBi6Kz4hMmOi+NbwQrTVgxkKUoVtHjBPZHamNaBb4DUTN1nOBnxFps?=
    =?Windows-1252?Q?y20TPBgtfsUWINLUduZIULtmiForhzmRFpGhJQwmLUwZH9OuNxc2WuRc?=
    =?Windows-1252?Q?8M2Jv5QbMPKka4QKGCpxh/q+CtsIi5ovV0Da5C/NEKvNBUsdSVbDRCqA?=
    =?Windows-1252?Q?IfE2qJc9+78dvfO4TbZkc+UoVgRf6U6XXGqPgiG6jA0bRek2ryEYpldH?=
    =?Windows-1252?Q?85m2uY3EdoXSbuk/aCeKGcutJxwL5nRiRv+/v2oIuIv196KA+hl6pj1n?=
    =?Windows-1252?Q?ZPyjAtyxq4yRKHpewBPgFHQVfAIrsE6BhTZP0lclzWIDoU7jG6b6k6Jo?=
    =?Windows-1252?Q?f14q8J0+RXMQvX9ePnzJgfJB3WJNwkjvxmO4X1/VOHd2fqjH7uEPqfWQ?=
    =?Windows-1252?Q?as/SCjT4AGACPDEEdyvDikW0ZvQfbusWcfRlxYlapUemQ49S6jAqwVPH?=
    =?Windows-1252?Q?+WNB7HDxAls=3D?=
   MIME-Version: 1.0
   
   --===============6282216612940523072==
   Content-Type: text/plain;
    charset="utf-8"
   Content-Transfer-Encoding: 7bit
   
   You are receiving this email because you have purchased or have been assigned a ticket for the NorthSec CTF competition.
   
   **Competition start**
   
   We plan to open the doors on Friday between 6 and 7 PM depending on the room assigned to you. The competition will start at 8 PM. We will send you a communication with more details at the beginning of the week.
   
   **Validate your team name**
   
   You will no longer be able to change your team name after Monday evening. This is your last chance to make sure that all team members have spelled your name the same way (case sensitive). You can open the details of your ticket at the following address: https://tickets.nsec.io/2024/order/BTBJA/4ykh1yaqu83oa2tx/modify
   
   **Few tickets left**
   
   With 623 players registered, this is going to be the largest NorthSec CTF ever. Could have been record breaking if it was not so expensive to get this vetted... We just capped our ticketing system at 630 players. This means 7 tickets left. After that, we will be in waitlist management mode (to pack neat teams). If your friends or colleagues haven't registered, this is the last call.
   
   **Costume/theme partial reveal**
   
   For this year's theme, you are a pentesting company that decided to have an offsite activity to encourage team building around the topic of well-being. You've been requested to dress up accordingly. Get your summer camp gear! This is not mandatory, but highly suggested by upper management.
   
   See you next week!
   
   -- 
   You are receiving this email because someone placed an order for NorthSec 2024 for you.
   You can view your order details at the following URL:
   https://tickets.nsec.io/2024/ticket/BTBJA/1/e5qxw1hsj1dkt0np/.
   
   
   --===============6282216612940523072==
   Content-Type: multipart/related;
    boundary="===============6904991196894280018=="
   
   --===============6904991196894280018==
   Content-Type: text/html;
    charset="utf-8"
   Content-Transfer-Encoding: 8bit
   
   <!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml"><head>
   <meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta content="width=device-width, initial-scale=1.0" name="viewport">
   <title>[NorthSec] CTF Information</title>
   <!--[if gte mso 9]><xml>
   <o:OfficeDocumentSettings>
   <o:AllowPNG/>
   <o:PixelsPerInch>96</o:PixelsPerInch>
   </o:OfficeDocumentSettings>
   </xml><![endif]-->
   <!--[if mso]>
           <style type="text/css">
           body, table, td {
               font-family: "Open Sans", "OpenSans", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
           }
           </style>
       <![endif]-->
   </head>
   <body align="center" style="background-color: #eee;font-family: 'Open Sans', 'OpenSans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 16px;line-height: 1.4;color: #333;margin: 0;padding: 0;">
   <table width="100%"><tbody><tr><td align="center" class="container" style="background-color: #eee;font-family: 'Open Sans', 'OpenSans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 16px;line-height: 1.4;color: #333;margin: 0;padding: 20px;">
   <!--[if gte mso 9]>
       <table width="600"><tr><td align="center">
       <![endif]-->
   <table border="0" cellspacing="0" class="layout" style="width: 100%;border-spacing: 0px;border-collapse: separate;margin: auto;max-width: 600px">
   <tbody><tr>
   <td align="center" class="logo" style="background-color: white;padding: 20px 0 0 0;mso-line-height-rule: at-least;">
   <img alt="NorthSec 2024" src="cid:image_0" style="display: block;width: 100%">
   </td>
   </tr>
   <tr>
   <td align="center" class="header" style="background-color: white;padding: 0 20px;text-align: center;">
   <h2 style="margin-top: 20px;margin-bottom: 10px;font-size: 22px;line-height: 26px;"><a href="https://can01.safelinks.protection.outlook.com/?url=https%3A%2F%2Ftickets.nsec.io%2F2024%2F&amp;data=05%7C02%7Cmassinissa.djellouli.1%40ens.etsmtl.ca%7C3246927a20c543a9d37b08dc713331d6%7C70aae3b79f3b484d8f9549e8fbb783c0%7C0%7C0%7C638509711906046628%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&amp;sdata=384uCmdZDkpdp6kFnDvwGf8PvQJPL77e8vxTgVVZRkw%3D&amp;reserved=0" originalsrc="https://tickets.nsec.io/2024/" shash="s5wEv3NRwPK5CwBxS3d+VgZam4B+RH/3UcGXVUZdi/+ascmfZEx0Jj+CbYxYQrH02OkXERZCKilT62PUrjfza+Nl/8LvnNSVN+pk3Db78o7UG2tTCXylpX5MKg3eauq449HstYEaDlw8j9TEuN2U3BoqvV45IXi3ySONwytk6hg=" style="color: #1b75bc;font-weight: bold;text-decoration: none;" target="_blank">NorthSec 2024</a>
   </h2>
   <h1 style="margin-top: 0;margin-bottom: 20px;font-size: 26px;line-height: 30px;">[NorthSec] CTF Information</h1>
   </td>
   </tr>
   <tr>
   <td class="containertd" style="background-color: white;padding: 20px;">
   <div class="content" style="text-align: left;">
   <p style="margin: 0 0 10px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;-ms-word-break: break-all;-ms-hyphens: auto;-moz-hyphens: auto;-webkit-hyphens: auto;hyphens: auto;">You are receiving this email because you have purchased or have been assigned a ticket for the NorthSec CTF competition.</p>
   <p style="margin: 0 0 10px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;-ms-word-break: break-all;-ms-hyphens: auto;-moz-hyphens: auto;-webkit-hyphens: auto;hyphens: auto;"><strong>Competition start</strong></p>
   <p style="margin: 0 0 10px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;-ms-word-break: break-all;-ms-hyphens: auto;-moz-hyphens: auto;-webkit-hyphens: auto;hyphens: auto;">We plan to open the doors on Friday between 6 and 7 PM depending on the room assigned to you. The competition will start at 8 PM. We will send you a communication with more details at the beginning of the week.</p>
   <p style="margin: 0 0 10px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;-ms-word-break: break-all;-ms-hyphens: auto;-moz-hyphens: auto;-webkit-hyphens: auto;hyphens: auto;"><strong>Validate your team name</strong></p>
   <p style="margin: 0 0 10px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;-ms-word-break: break-all;-ms-hyphens: auto;-moz-hyphens: auto;-webkit-hyphens: auto;hyphens: auto;">You will no longer be able to change your team name after Monday evening. This is your last chance to make sure that all team members have spelled your name the same way (case sensitive). You can open the details of your ticket at the following address: <a href="https://can01.safelinks.protection.outlook.com/?url=https%3A%2F%2Ftickets.nsec.io%2F2024%2Forder%2FBTBJA%2F4ykh1yaqu83oa2tx%2Fmodify&amp;data=05%7C02%7Cmassinissa.djellouli.1%40ens.etsmtl.ca%7C3246927a20c543a9d37b08dc713331d6%7C70aae3b79f3b484d8f9549e8fbb783c0%7C0%7C0%7C638509711906059069%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&amp;sdata=RyXhvYWk33INYGoD5qknJoGmdrhGp1D2JpH7XLGU2uY%3D&amp;reserved=0" originalsrc="https://tickets.nsec.io/2024/order/BTBJA/4ykh1yaqu83oa2tx/modify" shash="icMVPGh7dRYVr4A+NSePv5KOl2aOboaXQRshPgtuHIxGoqpDUl73mdYMALNaYe/IhRQnlCkBhZkShzRuPVb/6/0adPixpDe9jqC11XWASVR451JgxWX+Ohx8blpBzXba7kO1Q+6MjHGuUnRMoBzGdtYZ3g2peO+1w0VxmeKxJv4=" rel="noopener" style="color: #1b75bc;font-weight: bold;word-wrap: anywhere;word-break: break-all;" target="_blank">https://tickets.nsec.io/2024/order/BTBJA/4ykh1yaqu83oa2tx/modify</a></p>
   <p style="margin: 0 0 10px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;-ms-word-break: break-all;-ms-hyphens: auto;-moz-hyphens: auto;-webkit-hyphens: auto;hyphens: auto;"><strong>Few tickets left</strong></p>
   <p style="margin: 0 0 10px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;-ms-word-break: break-all;-ms-hyphens: auto;-moz-hyphens: auto;-webkit-hyphens: auto;hyphens: auto;">With 623 players registered, this is going to be the largest NorthSec CTF ever. Could have been record breaking if it was not so expensive to get this vetted... We just capped our ticketing system at 630 players. This means 7 tickets left. After that, we will be in waitlist management mode (to pack neat teams). If your friends or colleagues haven't registered, this is the last call.</p>
   <p style="margin: 0 0 10px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;-ms-word-break: break-all;-ms-hyphens: auto;-moz-hyphens: auto;-webkit-hyphens: auto;hyphens: auto;"><strong>Costume/theme partial reveal</strong></p>
   <p style="margin: 0 0 10px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;-ms-word-break: break-all;-ms-hyphens: auto;-moz-hyphens: auto;-webkit-hyphens: auto;hyphens: auto;">For this year's theme, you are a pentesting company that decided to have an offsite activity to encourage team building around the topic of well-being. You've been requested to dress up accordingly. Get your summer camp gear! This is not mandatory, but highly suggested by upper management.</p>
   <p style="margin: 0 0 10px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;-ms-word-break: break-all;-ms-hyphens: auto;-moz-hyphens: auto;-webkit-hyphens: auto;hyphens: auto;margin-bottom: 0;">See you next week!</p>
   </div>
   </td>
   </tr>
   <tr>
   <td class="order containertd" style="border-top: 1px solid #ccc;font-size: 12px;background-color: white;padding: 20px;">
   <div class="content" style="text-align: left;">
   <div class="order-info" style="padding-bottom: 5px;">
           You are receiving this email because someone signed you up for the following event:
       </div>
   <table class="order-details" style="width: 100%;">
   <tbody><tr>
   <td style="font-size: 12px;vertical-align: top;text-align: left;width: 20%;">
   <strong>Event:</strong>
   </td>
   <td style="font-size: 12px;vertical-align: top;text-align: left;">
                   NorthSec 2024
                   <br>
                   
                   May 16th – 19th, 2024
                   
                       09:00
                   
               </td>
   </tr>
   <tr>
   <td style="font-size: 12px;vertical-align: top;text-align: left;width: 20%;">
   <strong>Order code:</strong>
   </td>
   <td style="font-size: 12px;vertical-align: top;text-align: left;">
                   BTBJA (2024-04-17)<br>
                   
                       created by competitions@dciets.com
                   
               </td>
   </tr>
   <tr>
   <td style="font-size: 12px;vertical-align: top;text-align: left;width: 20%;">
   <strong>Contact:</strong>
   </td>
   <td style="font-size: 12px;vertical-align: top;text-align: left;">
                   NorthSec
                   
                       <br>
   <a href="mailto:contact@nsec.io" style="color: #1b75bc;font-weight: bold;">
                           contact@nsec.io
                       </a>
   </td>
   </tr>
   </tbody></table>
   <div class="order-button" style="padding-top: 5px;text-align: center;">
   <a class="button" href="https://can01.safelinks.protection.outlook.com/?url=https%3A%2F%2Ftickets.nsec.io%2F2024%2Fticket%2FBTBJA%2F1%2Fe5qxw1hsj1dkt0np%2F&amp;data=05%7C02%7Cmassinissa.djellouli.1%40ens.etsmtl.ca%7C3246927a20c543a9d37b08dc713331d6%7C70aae3b79f3b484d8f9549e8fbb783c0%7C0%7C0%7C638509711906066746%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&amp;sdata=33I7G%2FB2Urx3lHW62mxtW36ecDkGZ6NDTs9I8%2BaSDts%3D&amp;reserved=0" originalsrc="https://tickets.nsec.io/2024/ticket/BTBJA/1/e5qxw1hsj1dkt0np/" shash="cARpQm+izwO5s3embf+M+fb3j7esztQW6fYbsO0OhN4pvACJmJGw+trDPhJSctkRTCNRk03BkF3yMdGsFIGullCKCYlVvZ8MY1v0drFlXPO5sh//5t2hOWF6auUPQDLUiiOqB89z6iVIW38grKxqkefwT+6RdnSTAiVDgf5pNIY=" style="font-weight: bold;color: #1b75bc;display: inline-block;padding: 10px 16px;line-height: 1.33333;border: 1px solid #cccccc;border-radius: 6px;-webkit-border-radius: 6px;-moz-border-radius: 6px;margin: 5px;text-decoration: none;font-size: 12px;">
               View registration details
           </a>
   </div>
   </div>
   </td>
   </tr>
   </tbody></table>
   <div class="footer" style="padding: 10px;text-align: center;font-size: 12px;">
           
   
   
       
           powered by <a href="https://can01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fpretix.eu%2F&amp;data=05%7C02%7Cmassinissa.djellouli.1%40ens.etsmtl.ca%7C3246927a20c543a9d37b08dc713331d6%7C70aae3b79f3b484d8f9549e8fbb783c0%7C0%7C0%7C638509711906077334%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&amp;sdata=CBShSbXYxjzcYSwkolindkmhqlsRoZvkr1QCKIXXyQo%3D&amp;reserved=0" originalsrc="https://pretix.eu/" shash="fx1uAy7QgDr90bpa5SBuHaHyBvpbHSQc+UBnDyUiihHtqFNM+fzrEHfxQsvL8Gr0UOBM55FCML3lMBZobL2oDkja00xVb4/FqqNDxT9w/47b+Qy8Yl4kVp0+lSUdLodKMqfBypl+wkgs78PtMUcEwMBEq038gR6qvc+11Qoen1o=" style="color: #1b75bc;font-weight: bold;" target="blank">pretix</a>
   </div>
   <br>
   <br>
   <!--[if gte mso 9]>
       </td></tr></table>
       <![endif]-->
   </td></tr></tbody></table>
   </body></html>
   
   --===============6904991196894280018==
   Content-Type: image/png
   Content-Transfer-Encoding: base64
   Content-ID: <image_0>
   Content-Disposition: inline;
    filename="image_0.png"
   
   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`);
  }
}
