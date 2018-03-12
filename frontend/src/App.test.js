import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
