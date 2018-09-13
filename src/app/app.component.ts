'use strict'
import {DataService} from 'src/app/services/data.service'
import { Component, OnInit } from '@angular/core';

import {
  AuthService,
  GoogleLoginProvider
} from 'angular5-social-login';

import { Router, RouterLinkWithHref} from '@angular/router';
import { componentRefresh } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  title = 'bta';


  constructor( private socialAuthService: AuthService,private router:Router, private dataService : DataService) {}
  
  ngOnInit() {

    if(sessionStorage.getItem('username')!= null){
      var btn=<HTMLBodyElement>document.getElementById("btn");
      btn.innerText=sessionStorage.getItem('username'); 
      var logout=<HTMLButtonElement>document.getElementById("Log-out");
      logout.hidden=false;
    }
   
  
  }

  public socialSignIn(socialPlatform : string) {
  let socialPlatformProvider;

      if(socialPlatform == "google"){
        socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
      }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        var btn=<HTMLBodyElement>document.getElementById("btn");
        btn.innerText= userData.name; 
        
        var logout=<HTMLButtonElement>document.getElementById("Log-out");
        logout.hidden=false;
        sessionStorage.setItem('username',userData.name);
              
      }
    );
  }

  logout(){
   
    sessionStorage.clear();
    this.router.navigateByUrl('login');
    location.reload();
    
  } 

}


