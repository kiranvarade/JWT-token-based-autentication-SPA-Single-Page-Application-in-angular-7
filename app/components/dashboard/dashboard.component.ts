import { Component, OnInit } from '@angular/core';
import { LogoutService } from "../../services/logout.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  private logoutSubScribe:any;
  constructor(private _service:LogoutService,
              private _router:Router) { }
  ngOnInit() {
  }
  public logout():any{
    this.logoutSubScribe = 
            this._service.logout()
                .subscribe((posRes)=>{
                  console.log(posRes);
                  if(posRes.token == "deleted"){
                    window.localStorage
                      .removeItem("login_details");
                    this._router.navigate(["/"]);
                  }
                },
                (errRes:HttpErrorResponse)=>{
                  if(errRes.error instanceof Error){
                    console.log("Client Side Error !!!");
                  }else{
                    console.log("Server Side Error !!!");
                  };
                });
  };
  ngOnDestroy(){
    this.logoutSubScribe.unsubscribe();
  };
}
