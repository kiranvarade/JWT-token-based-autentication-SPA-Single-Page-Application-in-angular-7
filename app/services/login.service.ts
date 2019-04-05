import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private _http:HttpClient) { }
  public authenticate(obj:any):any{
    return this._http.post("http://localhost/phpjwt/generate_jwt.php"
                            ,obj);
  }
}
