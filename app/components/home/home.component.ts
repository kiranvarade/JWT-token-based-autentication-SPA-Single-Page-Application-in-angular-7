import { Component, OnInit } from '@angular/core';
import { HomeService } from "../../services/home.service";
import { HttpErrorResponse } from "@angular/common/http";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  private result:any;
  private homeSubScribe:any;
  constructor(private _service:HomeService) { }
  ngOnInit() {
    this.homeSubScribe = 
          this._service.homeModuleData()
              .subscribe((posRes)=>{
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
    this.homeSubScribe.unsubscribe();
  }

}
