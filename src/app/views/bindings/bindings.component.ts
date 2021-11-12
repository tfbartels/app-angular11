import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.sass']
})
export class BindingsComponent implements OnInit {

  url: string = 'https://media.gazetadopovo.com.br/2020/01/17155825/lamborghini-huracan-Alexander-Migl-wikimedia-commons.jpg';

  valor: string = 'aaa';

  constructor() { }

  ngOnInit(): void {
  }

  cliqueBotao(): void{
    alert('Clicou!')
  }


}
