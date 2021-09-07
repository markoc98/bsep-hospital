import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RequestCertificateComponent } from './Components/request-certificate/request-certificate.component';

const routes: Routes = [
  { path: '', redirectTo: '/reqestCertificate', pathMatch: 'full' },
  { path: 'reqestCertificate', component: RequestCertificateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
