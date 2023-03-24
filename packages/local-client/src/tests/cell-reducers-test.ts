import { store } from '../state';
import { ActionType } from '../state/action-types';

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'text',
  },
});

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'code',
  },
});

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'code',
  },
});

console.log('Insert 3 cells');
console.log(store.getState());

const id = store.getState().cells.order[0];
console.log('Delete cell with id = ', id);

store.dispatch({
  type: ActionType.DELETE_CELL,
  payload: id,
});

console.log(store.getState());

const targetId = store.getState().cells.order[1];
store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: targetId,
    type: 'code',
  },
});

console.log('insert cell at index 1');
console.log(store.getState());

store.dispatch({
  type: ActionType.MOVE_CELL,
  payload: {
    id: targetId,
    direction: 'up',
  },
});

console.log(`move ${targetId} up one`);
console.log(store.getState());
