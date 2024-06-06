import React, { Component} from 'react'
import { Link } from 'react-router-dom'

 
export default class Navbar extends Component {
  render(props) {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">NewsMonkey</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/General">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/Business">Business</Link></li> 
                <li className="nav-item">
                <Link className="nav-link" to="/Entertainment">Entertainment</Link></li> 
                <li className="nav-item">
                <Link className="nav-link" to="/Health">Health</Link></li> 
                <li className="nav-item">
                <Link className="nav-link" to="/Science">Science</Link></li> 
                <li className="nav-item">
                <Link className="nav-link" to="/Sports">Sports</Link></li> 
                <li className="nav-item">
                <Link className="nav-link" to="/Technology">Technology</Link></li>
                </ul>
                
                <form className="d-flex nav-item dropdown">
                {/* <a className="nav-link active dropdown-toggle" href="#" style={{color: 'grey'}} id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                  Countries
                </a> */}
                <select onChange={(e) => { this.props.setCountry(e.target.value) }} >
                  <option className="dropdown-item" value="us" onClick={(e) => this.state.country(e)}>USA</option>
                  <option className="dropdown-item" value="in" onClick={(e) => this.state.country(e)}>India</option>
                  <option className="dropdown-item" value="gb" onClick={(e) => this.state.country(e)}>UK</option>
                  <option className="dropdown-item" value="ca" onClick={(e) => this.state.country(e)}>Canada</option>
                  <option className="dropdown-item" value="au" onClick={(e) => this.state.country(e)}>Australia</option>
                </select>
              </form>
            
            
            </div>
        </div>
        </nav>
      </div>
    )
  }
}
