import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.sass']
})
export class PipesComponent implements OnInit {

  livro: any = {
    titulo: 'os lusiadas',
    avaliacao:  4.47896,
    preco:  50.54,
    dataPublicacao: new Date(2021,11-1,5)  
  };

  
  constructor() { }

  ngOnInit(): void {
  }

}
