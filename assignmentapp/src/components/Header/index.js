import './index.css'

const Header = () =>{
    return(
        <nav className="navbar">
      <div className="nav-content">
        <h1 className="desktop-logo">IndigoLearn</h1>
        <ul className="desktop-header">
          <li className="desktop-header">
              Home
          </li>
          <li className="desktop-header">
            what will you learn
          </li>
          <li className="desktop-header">
            why choosing us
          </li>
          <li className="desktop-header">
            placements
          </li>
        </ul>
        <button className="header-button" type="button" >
          login/SignUp
        </button>
      </div>
    </nav>
    )
}

export default Header;