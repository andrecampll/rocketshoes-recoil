import React from 'react';
import { RecoilRoot } from 'recoil';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/global';

import Routes from './routes';
import Header from './components/Header';

import './config/ReactotronConfig';
import store from './store';
import history from './services/history';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <Provider store={store}>
        <Router history={history}>
          <GlobalStyles />
          <ToastContainer autoClose={3000} />
          <Header />
          <Routes />
        </Router>
      </Provider>
    </RecoilRoot>
  );
}

export default App;
