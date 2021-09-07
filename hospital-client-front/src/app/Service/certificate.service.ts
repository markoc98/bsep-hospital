import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor(private httpCLient: HttpClient) { }

  requestCert(certificateDto: any){
    return this.httpCLient.post("http://localhost:5000/certificateRequest", certificateDto);
  }
}
