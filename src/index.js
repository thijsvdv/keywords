import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

Storage.prototype.setObject = function (key, value) {
    this.setItem(key, JSON.stringify(value));
};


Storage.prototype.getObject = function (key) {
    var value = this.getItem(key);
    try {
        return JSON.parse(value);
    }
    catch(err) {
        console.log("JSON parse failed for lookup of ", key, "\n error was: ", err);
        return null;
    }
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
