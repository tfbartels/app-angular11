import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from 'src/app/store/contador/contador.actions';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.sass']
})
export class ContadorComponent implements OnInit {


  counter1 = 0;
  counter2$:  Observable<number>;
  mensagem= '';

  constructor(private store: Store<{ contador: number }>){ 
    this.counter2$ = store.select('contador');
  }

  ngOnInit(): void {
  }

  //Counter 1
  incrementaCounter1(): void{
    this.counter1++;
  }

  decrementaCounter1(): void{
    this.counter1--;
  }



  //Counter 2
  incrementaCounter2(): void{
    this.store.dispatch(increment());
  }

  decrementaCounter2(): void{
    this.store.dispatch(decrement());
  }

  resetaCounter2() {
    this.store.dispatch(reset());
  }


  recebeMensagemFilho(mensagem : string){
    this.mensagem = mensagem;
  }
}
