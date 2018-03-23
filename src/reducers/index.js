import { combineReducers } from 'redux';
import BooksReducer from './booksReducer';
import ActiveBookReducer from './activeBookReducer';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
