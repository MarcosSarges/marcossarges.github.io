import React from "react";
import "./styles.css";

import { Link, match } from "react-router-dom";

type MenuProps = {
  match?: match;
  links: {
    name: string;
    to: string;
  }[];
};

export default function Menu(props: MenuProps) {
  React.useEffect(() => {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          if ($target) {
            el.classList.toggle("is-active");
            $target.classList.toggle("is-active");
          }
        });
      });
    }

    return () => document.removeEventListener("DOMContentLoaded", () => {});
  });

  return (
    <>
      <nav
        className="navbar is-hidden-tablet  has-background-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div>
            <img src="https://avatars1.githubusercontent.com/u/40393115?s=400&u=6d01731a394e08c6d8390a5fce9cf3091ee91eb2&v=4" />
            <p className="navbar-item title has-text-white">Marcos S</p>
          </div>
          <a
            role="button"
            className="navbar-burger burger has-background-white"
            aria-label="menu"
            aria-expanded="false"
            data-target="menuNav"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="menuNav" className="navbar-menu has-background-dark">
          <div className="navbar-start">
            {props.links.map(el => (
              <Link key={el.name} className="navbar-item" to={el.to}>
                {el.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <nav
        className="menu has-background-dark is-hidden-mobile"
        role="navigation"
        aria-label="main navigation"
      >
        <img src="https://avatars1.githubusercontent.com/u/40393115?s=400&u=6d01731a394e08c6d8390a5fce9cf3091ee91eb2&v=4" />
        <p className="title has-text-white">Marcos Sarges</p>
        <p className="menu-label has-text-white">Menu</p>
        <ul className="menu-list">
          {props.links.map(el => (
            <li key={el.name}>
              <Link to={el.to}>{el.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
