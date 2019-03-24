import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const text = 'Boilerplate Project is working';
const Test = () => <p>{text}</p>;
ReactDOM.render(<Test />, document.getElementById('app')); 