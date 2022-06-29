import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

// app
import auth from './app/modules/auth';
import post from './app/modules/post';

const reducers = combineReducers({
  auth,
  post,
  form: formReducer,
});

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default store;
