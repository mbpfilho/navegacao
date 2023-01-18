import React from "react"
import "./Menu.css"
import {Link} from "react-router-dom"

const Menu=props=>(
  <aside className="Menu">
    <nav>
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/param/111">Param #1</Link>
        </li>
        <li>
          <Link to="/param/numerooustring2">Param #2</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/naoExiste">Näo Existe</Link>
        </li>
      </ul>
    </nav>
  </aside>
)

export default Menu