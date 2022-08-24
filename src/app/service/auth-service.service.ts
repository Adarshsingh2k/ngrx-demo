import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponseData } from '../models/authResponseModel.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

  loggedIn!:boolean
  email:string='admin@xyz.com'
  password:string='check123'

  
  // login(email:string,pass:string):Observable<>{
  //   if(this.email==email && this.password==pass){
  //   this.loggedIn=true;
  //   console.log('pass');
  //   return 

  //   }
  //   else{
  //     this.loggedIn=false;
  //     console.log('fail');
  //     alert('please enter correct Password')

      
  //   }
    
    
  // }
 

  // isAuthenticated(){
  //   return this.loggedIn
  // }

  login(email: string, password: string):Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRBASE_API_KEY}`,
      { email, password, returnSecureToken: true }
    );
  }


  formatUser(data:AuthResponseData){
    const expirationDate = new Date(
      new Date().getTime() + +data.expiresIn * 1000
    );
    const user = new User(
      data.email,
      data.idToken,
      data.localId,
      expirationDate
    );
    return user;
  }
}
