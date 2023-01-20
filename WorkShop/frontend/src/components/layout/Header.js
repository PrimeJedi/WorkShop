import React, { Component, Fragment } from 'react'
import SignUp from './SignUp'
import {Link} from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <h5 class="my-0 mr-md-auto font-weight-normal" >Wildberies</h5>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>       
            </svg>
            <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use href="#bootstrap"/></svg>
            </a>
    
            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" class="nav-link px-2 link-dark">Корзина</a></li>
                <li><a href="#" class="nav-link px-2 link-dark">Избранное</a></li>
                <li><a href="#" class="nav-link px-2 link-dark">Заказы</a></li>
                <li><a href="#" class="nav-link px-2 link-dark">Стать продавцом</a></li>
            </ul>

            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                <input type="search" class="form-control" placeholder="Search..." aria-label="Search"/>
            </form>
            
            <div class="col-md-3 text-end">
                <a class="btn btn-outline-primary" href  ="http://127.0.0.1:8000/Вход/"     >Зарегистрироваться</a>

                {/* <a class="btn btn-outline-primary"href  = "{% url './frontend/templates/frontend/SignUpPage.html' %}">Зарегистрироваться</a> */}
            </div>
             {/* Кнопка с сылкой на профиль */}
        {/* <div class="dropdown text-end">
            <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle"/>
            </a>
            <ul class="dropdown-menu text-small">
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
            </ul>
        </div>    */}
        </header>
    )
  }
}

export default Header