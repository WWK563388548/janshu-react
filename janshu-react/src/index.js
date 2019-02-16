import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyle} from './default_style.js'
import {IconGlobalStyle} from './static/icon/iconfont.js';
import App from './App';

const TheApp = () => {
    return (
        <Fragment>
            <GlobalStyle/>
            <IconGlobalStyle/>
            <App />
        </Fragment>
    );
}


ReactDOM.render(<TheApp />, document.getElementById('root'));

