import React from 'react';
import './app.css';

import Modal from './components/modal/modal';
import Tab from './components/tab/tab';
import Toggle from './components/toggle/toggle';

const App = (props) => (
  <div className='app'>
    <Toggle />
    <Modal />
    <Tab />
  </div>
);

export default App;
