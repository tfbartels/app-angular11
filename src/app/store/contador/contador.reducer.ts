import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './contador.actions';
 
export const initialState = 0;
 
const _contadorReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);
 
export function contadorReducer(state: number|undefined, action: any) {
  return _contadorReducer(state, action);
}