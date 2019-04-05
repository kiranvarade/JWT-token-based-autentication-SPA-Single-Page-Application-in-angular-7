import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../services/login.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  private loginSubScribe:any;
  constructor(private _service:LoginService,
              private _router:Router) { }
  ngOnInit() {
  }
  public login(obj):any{
    this.loginSubScribe = 
          this._service.authenticate(obj)
              .subscribe((posRes)=>{
                if(posRes.login == "success"){
                  window.localStorage
                        .setItem("login_details",
                                JSON.stringify(posRes));
                  this._router.navigate(["/dashboard"]);
                }else{
                  alert("Login Fail !!!");
                }
              },
              (err:HttpErrorResponse)=>{
              if(err.error instanceof Error){
                console.log("Client Side Error !!!");
              }else{
                console.log("Server Side Error !!!");
              }
    });
  };
  ngOnDestroy(){
    this.loginSubScribe.unsubscribe();
  };
}
