import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-contador',
  templateUrl: './show-contador.component.html',
  styleUrls: ['./show-contador.component.sass']
})
export class ShowContadorComponent implements OnInit {

  @Input()
  counter1 = 0;

  counter2$: Observable<number>;

  @Output()
  emitirMensagemPai = new EventEmitter();

  constructor(private store: Store<{ contador: number }>){ 
    this.counter2$ = store.select('contador');
  }

  ngOnInit(): void {

  }

  emitirMensagem(): void{
    this.emitirMensagemPai.emit('Mensagem do componente filho');
  }
}
