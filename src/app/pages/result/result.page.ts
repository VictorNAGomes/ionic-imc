import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      let getNav = this.router.getCurrentNavigation();
      let imcValue = getNav.extras.state.imcValue;
      let imcMsg = getNav.extras.state.imcMsg;
      let imc = document.createElement("h1");
      imc.innerHTML = `
        IMC:   ${imcValue} <br />
        Estado: ${imcMsg}
      `;
      document.getElementById('data').appendChild(imc);

    });
   }

  ngOnInit() {
  }

}
