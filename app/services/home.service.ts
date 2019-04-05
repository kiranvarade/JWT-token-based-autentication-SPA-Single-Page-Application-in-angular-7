import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private _http:HttpClient) { }
  public homeModuleData():any{
    var obj = window.localStorage.getItem("login_details");
    var my_obj = {"token":JSON.parse(obj).token};
    return this._http.post("http://localhost:8080/home"
                            ,my_obj);
  };
};
