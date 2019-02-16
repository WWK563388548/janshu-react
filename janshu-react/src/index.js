import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyle} from './default_style.js'
import App from './App';

const TheApp = () => {
    return (
        <Fragment>
            <GlobalStyle/>
            <App />
        </Fragment>
    );
}


ReactDOM.render(<TheApp />, document.getElementById('root'));

