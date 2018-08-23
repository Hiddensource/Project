import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.onreadystatechange = function () {
      if (document.readyState === "complete") {
        var radio_button1 = document.getElementById("radio1");
        var radio_button2 = document.getElementById("radio2");
        var arrival = <HTMLInputElement>document.getElementById("destDate");

        radio_button1.addEventListener("click", function () {
          arrival.disabled = true;
        });
        radio_button2.addEventListener("click", function () {
          arrival.disabled = false;

        });

      }

    }
    let button = document.getElementById("submit");

    button.addEventListener("click", function () {

      var src = ((document.getElementById("source") as HTMLInputElement).value);

      var parentElement1 = <HTMLInputElement>document.getElementById("src");

      parentElement1.innerHTML = src;

      var dest = ((document.getElementById("destination") as HTMLInputElement).value);

      var parentElement2 = <HTMLInputElement>document.getElementById("dst");

      parentElement2.innerHTML = dest;

      var srcDate = ((document.getElementById("srcDate") as HTMLInputElement).value);

      var parentElement3 = <HTMLInputElement>document.getElementById("choosen_date");

      parentElement3.innerHTML = srcDate;






    });

  }

}
