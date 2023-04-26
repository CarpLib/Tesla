import React from "react";
import logo from "../assets/img/logo.png";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo Tesla" />
      <h1>Tesla Config</h1>
      <div>Menu</div>
    </header>
  );
}
