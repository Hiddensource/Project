import { Component, OnInit } from '@angular/core';

import {
  AuthService,
  GoogleLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bta';

  
  constructor( private socialAuthService: AuthService ) {}
  ngOnInit() { 
  
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        console.log(typeof(userData));
        console.log(userData.name);
        var btn=<HTMLBodyElement>document.getElementById("btn");
        btn.innerText=userData.name;
        // Now sign-in with userData
               
      }
    );
  }
 
}
}