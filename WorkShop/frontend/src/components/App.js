import React, { Component, Fragment, useState } from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";
import ReactDOM from 'react-dom';
import ItemForm from './ItemForm';
import ItemList from './ItemList';
import PostItem from './PostItem';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import Header from './Header';
import Footer from './Footer';
import MyNavbar from './UI/navbar/MyNavbar';



function App  (){
    // const [item, setItem] = useState([
    //     {id:1, title: 'Javascript', body: 'Description'},
    //     {id:2, title: 'Javascript 2', body: 'Description'},
    //     {id:3, title: 'Javascript 3', body: 'Description'},
    // ])

    // const createItem = (newItem) => {
    //     setItem([...items, newItem])
    // }
   
 
    return(  
        <div className ="App"> 
        <Header/>

        {/* <Router basename='/my-react-page/'>
            <Switch>
                <Routes>
                    <Route path='/header' element={<Header/>} />
                </Routes>
            </Switch>
        </Router> */}
        </div>
    );
}

export default App;