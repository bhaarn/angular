import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, (_state) => _state + 1),
  on(decrement, (_state) => _state - 1),
  on(reset, (_state) => initialState)
);

export function counterReducer(state: undefined, action: undefined) {
  return _counterReducer(state, action);
}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
