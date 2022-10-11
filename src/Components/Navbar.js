import React  from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
        <a className="navbar-brand" href="/">Text Analyser</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> 
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/about">Home</Link>
            <Link className="nav-link" to="/">Features</Link>
            <Link className="nav-link" to="/">Pricing</Link>
          </div>
    </div>
        <div class="form-check form-switch">
  <input className="form-check-input text-light" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.text}`} for="flexSwitchCheckDefault" >Enable {props.text} mode</label>
</div>
  </div>
</nav>
  )
}
