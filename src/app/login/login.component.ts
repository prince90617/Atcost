import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer } from '@angular/core';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public message:string;
  public Email: string;
  public Password: string;
  public BaseUrl=environment.apiEndPoint;
  public apiUrl:string;
  constructor(
  private _toasterService:ToasterService,
  private _slimLoadingBarService: SlimLoadingBarService,private http:HttpClient,private renderer: Renderer) {
    
}

  ngOnInit() {
    
  }
 login(){
   this._slimLoadingBarService.start();
  const InpurtData = JSON.stringify({ email: this.Email, password:this.Password});
  this.apiUrl=this.BaseUrl+"/index.php?route=rest/login/login";
  this.http.post(this.apiUrl,InpurtData).subscribe(data=>{

      if(data["success"]==true){

      }
      else{
        this.message=data["message"];
      }
      this._slimLoadingBarService.complete();
  })
 }
}
