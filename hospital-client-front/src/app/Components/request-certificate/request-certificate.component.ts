import { Component, OnInit } from '@angular/core';
import { CertificateService } from 'app/Service/certificate.service';

@Component({
  selector: 'app-request-certificate',
  templateUrl: './request-certificate.component.html',
  styleUrls: ['./request-certificate.component.css']
})
export class RequestCertificateComponent implements OnInit {

  certificateDto: any = {givenName: '', organization:'', email:'', country: '', startDate: '', endDate: '', isCA: false}

  constructor(private certificateService: CertificateService) { }

  ngOnInit(): void {
  }

  sendRequest(){
    this.certificateService.requestCert(this.certificateDto).subscribe( data => {
        alert("Usepsno poslat zahtev");
    }, error =>{
      alert("Nesupesno slanje");
    });
  }


  request(){
    return this.httpClient.get("dsaadsads");
  }

}
