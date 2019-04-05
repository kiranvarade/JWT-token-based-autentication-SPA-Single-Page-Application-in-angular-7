import { Component, OnInit } from '@angular/core';
import { ContactService } from "../../services/contact.service";
import { HttpErrorResponse } from "@angular/common/http";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {
  private result:any;
  private contactSubScribe:any;
  constructor(private _service:ContactService) { }
  ngOnInit() {
    this.contactSubScribe = 
          this._service.contactModuleData()
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
    this.contactSubScribe.unsubscribe();
  };

}
