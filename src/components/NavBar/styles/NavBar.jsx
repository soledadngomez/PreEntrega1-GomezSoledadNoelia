import React from 'react'
import CartWidget from '../../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <div>
        <header class="allHeader">
        <picture class="header__logo">
        <img class="header__img" src="../src/logo-movie.png" alt="logo"/>
        </picture>
        <nav class="navigation">
            <ul class="menu">
                <li class="menu__item">
                    <a class="menu__link" href="">Inicio</a>
                </li>
                <li class="menu__item">
                    <a class="menu__link" href="">Series</a>
                </li>
                <li class="menu__item">
                    <a class="menu__link"href="">Peliculas</a>
                </li>
                <li class="menu__item">
                    <a class="menu__link" href="./paginas/presupuesto.html">Novedades</a>
                </li>
                <li class="carrito-icon">
                <CartWidget/>
                </li>
            </ul>
        </nav>
    </header>

        
    </div>

  )
}

export default NavBar