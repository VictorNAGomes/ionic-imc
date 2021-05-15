import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  pickValues() {
    let height = parseFloat((<HTMLInputElement>document.getElementById("height")).value);
    let weight = parseFloat((<HTMLInputElement>document.getElementById("weight")).value);
    let gender =(<HTMLInputElement>document.getElementById("gender")).value;

    let imcValue = weight / (height * height);
    console.log(imcValue);
    let imcMsg = "";

    if(gender == "f"){
      if(imcValue < 19){
        imcMsg = "Abaixo do Peso";
      }
      else if(imcValue >= 19 && imcValue < 24){
        imcMsg = "Normal";
      }
      else if(imcValue >= 24 && imcValue < 29){
        imcMsg = "Obesidade Leve";
      }
      else if(imcValue >= 29 && imcValue < 39){
        imcMsg = "Obesidade Moderada";
      }
      else if(imcValue >= 39){
        imcMsg = "Obesidade Mórbida";
      }
    }else if(gender == "m"){
      if(imcValue < 20){
        imcMsg = "Abaixo do Peso";
      }
      else if(imcValue >= 20 && imcValue < 25){
        imcMsg = "Normal";
      }
      else if(imcValue >= 25 && imcValue < 30){
        imcMsg = "Obesidade Leve";
      }
      else if(imcValue >= 30 && imcValue < 40){
        imcMsg = "Obesidade Moderada";
      }
      else if(imcValue >= 40){
        imcMsg = "Obesidade Mórbida";
      }
    }

    let navigationExtras: NavigationExtras = {
      state: {
        imcValue: imcValue.toFixed(2),
        imcMsg
      }
    }
    this.router.navigate(['/result'], navigationExtras);
  }

}
