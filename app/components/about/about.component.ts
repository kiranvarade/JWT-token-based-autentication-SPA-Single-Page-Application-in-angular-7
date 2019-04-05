import { Component, OnInit } from '@angular/core';
import { AboutService } from "../../services/about.service";
import { HttpErrorResponse } from "@angular/common/http";
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {
  private result:any;
  private aboutSubScribe:any;
  constructor(private _service:AboutService) { }
  ngOnInit() {
    this.aboutSubScribe = 
          this._service.aboutModuleData()
              .subscribe((posRes)=>{
                console.log("about"+posRes);
                this.result = posRes;
              },
              (err:HttpErrorResponse)=>{
                if(err.error instanceof Error){
                  console.log("Client Side Error !!!");
                }else{
                  console.log("Server Side Error !!!");
                }
              });
  }
  ngOnDestroy(){
    this.aboutSubScribe.unsubscribe();
  }
}
