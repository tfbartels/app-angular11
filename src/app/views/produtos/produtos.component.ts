import { Component, OnInit } from '@angular/core';
import { Produto } from './produto.model';
import { ProdutosService } from './produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.sass']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[] = [];
  displayedColumns: string[] = ['id', 'title', 'price']

  constructor(private produtoService: ProdutosService) { }


  ngOnInit(): void {
    this.produtoService.listar().subscribe( produtos => {
      this.produtos = produtos;
      console.log(this.produtos);
    });
  }

}
