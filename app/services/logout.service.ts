import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  constructor(private _http:HttpClient) { }
  public logout():any{
    var obj = window.localStorage.getItem("login_details");
    var my_obj = {"token":JSON.parse(obj).token};
    return this._http.post("http://localhost/phpjwt/logout.php"
                            ,my_obj);
  };
};
