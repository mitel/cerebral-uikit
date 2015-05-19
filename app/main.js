import 'main.css';
import React from 'react';
import stateTree from 'stateTree.js';
import App from 'components/App.js';
//import Desktop from 'components/Desktop';
//import Chat from 'components/Chat';

import setInputValue from 'actions/setInputValue.js';
import addItem from 'actions/addItem.js';

stateTree.signal('inputValueChanged', setInputValue);
stateTree.signal('inputValueSubmitted', addItem);

let Wrapper = stateTree.injectInto(App);
//let Wrapper = stateTree.injectInto(Desktop);
//let Wrapper = stateTree.injectInto(Chat);

React.render(<Wrapper/>, document.querySelector('#app'));
//React.render(<Wrapper/>, document.querySelector('#app'));
