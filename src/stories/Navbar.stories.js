// Navbar.stories.js
import React from "react";
import Navbar from "../Components/Navbar";

export default {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "centered", // Optional parameter to center the component in the Canvas
  },
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
    
  children: (
    <div className="container-fluid d-flex flex-row">
    <a className="navbar-brand" href="/">Navbar</a>
    <div className=" d-flex flex-row">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row justify-around " style={{ marginLeft: "10px" }}>
    <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/" style={{ marginLeft: "10px" }}>Link</a>
        </li>
        <li className="nav-item dropdown" style={{ marginLeft: "10px" }}>
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" style={{ marginLeft: "10px" }}>
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
          </li>
        <li className="nav-item" style={{ marginLeft: "10px" }}>
          <a className="nav-link disabled" aria-disabled="true" href='/'>Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search" style={{ marginLeft: "20px" }}>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
  </div>
  </div>
  ),
};


