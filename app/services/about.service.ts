import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AboutService {
  constructor(private _http:HttpClient) { }
  public aboutModuleData():any{
    var obj = window.localStorage.getItem("login_details");
    var my_obj = {"token":JSON.parse(obj).token};
    console.log(my_obj);
    return this._http.post("http://localhost/phpjwt/about.php"
                            ,my_obj);
  };
};
