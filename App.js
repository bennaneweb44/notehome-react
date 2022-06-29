/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { I18nManager} from 'react-native';
//import firebase from 'firebase';

// app
import Router from './router';
import store from './configureStore';
import { SIGN_IN_SUCCESS } from './app/modules/auth';
import { Spinner } from './app/components/common';
//import firebaseConfig from './firebase.json';

I18nManager.allowRTL(false);
I18nManager.forceRTL(false);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  componentDidMount() {
    /*if (!firebase.apps.length) {
       firebase.initializeApp(firebaseConfig);
     }

    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ loaded: true });

      if (user) {
        store.dispatch({ type: SIGN_IN_SUCCESS, payload: user });
      }
    });*/
    let user = {
        uuid : '0940e951-20cb-407f-a6b9-b9500c6feb0c',
        firstname : 'aziz',
        lastname : 'bennane'
    }
    store.dispatch({ type: SIGN_IN_SUCCESS, payload: user });
  }

  render() {
    return (
      <Provider store={store}>
        {this.state.loaded ? <Router /> : <Spinner />}
      </Provider>
    );
  }
}

export default App;
