import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
    <i class="bi bi-code-slash">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
        </svg>
    </i>
    <h5 class="my-0 mr-md-auto font-weight-normal">Good idea</h5>
    <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="{% url 'home'%}">Р“Р»Р°РІРЅР°СЏ</a>
    </nav>
    <a class="btn btn-outline-primary" href="{% url 'signup' %}">Sign up</a>
    <a class="btn btn-outline-primary" href="#">Sign in</a>
    </div>

    )
  }
}

export default Header