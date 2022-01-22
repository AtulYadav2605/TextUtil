import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';


export default function Navbar(props) {  //you can change things by giving arguments and the using those arguments, use anything with a dot with them in the {} here and then change it by giving that name you gave after . as an attribute anywhere
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">{props.title}</Link>  this is where you use props with a dot */}
        <a className="navbar-brand" href="#">{props.title}</a> 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
              <a className="navbar-brand" href="#">Home</a> 
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">{props.about}</Link>
            </li> */}
          </ul>

          <div class="form-check form-switch" style={props.mystyle}>
            <input class="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label class="form-check-label" for="flexSwitchCheckDefault">{props.switchname}</label>
          </div>
          {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}

        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: "Set Title Here",
  about: "Set About Us here"
}