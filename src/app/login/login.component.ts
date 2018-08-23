import { Component, OnInit } from '@angular/core';
import {Routes} from '@angular/router';
import {RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( ) {
  
   }

  ngOnInit() {
  }

  
  btnClick = function(){
    this._Router.navigateByUrl('/dashboard');
  };
}


document.onreadystatechange=function(){
  if(document.readyState==="complete"){
    
    var radio_button1=document.getElementById("radio1");
    var radio_button2=document.getElementById("radio2");
    var arrival=<HTMLInputElement>document.getElementById("arrival");
   
    radio_button1.addEventListener("click",function(){
      arrival.disabled=true;
    });
      radio_button2.addEventListener("click",function(){
        arrival.disabled=false; 
        
    });

    
  }
}

