import { createAction } from '@ngrx/store';

export const increment = createAction('[Contador] Incrementa');
export const decrement = createAction('[Contador] Decrementa');
export const reset = createAction('[Contador] Reset');