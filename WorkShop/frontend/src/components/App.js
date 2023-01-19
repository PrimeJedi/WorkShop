import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Footer from './layout/Footer';

class App extends Component{
    render(){
        return (
        <Fragment>
            <Header/>
            <Footer/>
        </Fragment>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
