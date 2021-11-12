import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  baseUrl = "https://fakestoreapi.com/products";

  constructor(private http: HttpClient) { }

  listar():Observable<Produto[]>{
    return this.http.get<Produto[]>(this.baseUrl);
  }

}
