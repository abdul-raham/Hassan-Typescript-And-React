import {Link} from "react-router-dom"
import Logo from '../assets/logo.png'

function Nav() {
    
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src={Logo} alt="logo" className='class-fluid ms-5' width={"35px"} /> <b className='text-bold '>ATRIC</b></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link  className="nav-link active"  to="/Who">Who we are</Link>
                    </li>
                     
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            What we do
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">  
                            <li><Link className="dropdown-item" to="/Who">Overview</Link></li>
                            <li><Link className="dropdown-item" to="/learning">Learning</Link></li>
                            <li><Link className="dropdown-item" to="/incubation">Incubation</Link></li>
                            <li><Link className="dropdown-item" to="/research">research</Link></li>
                            <li><Link className="dropdown-item" to="/consulting">consulting</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link active"  to="/news">News</Link>
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link active"  to="/carear">Carear</Link>
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link active"  to="/Contact">Contact</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Applications
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">  
                            <li><Link className="dropdown-item" to="/Intend">internship</Link></li>
                            <li><Link className="dropdown-item" to="/ResearchForm">research</Link></li>
                            <li><Link className="dropdown-item" to="/Job">job</Link></li>
                            <li><Link className="dropdown-item" to="/Form_incubation">incubation</Link></li>
                            <li><Link className="dropdown-item" to="/ConsultingForm">consultation</Link></li>
                        </ul>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>   
                </form>
            </div>
        </div>
    </nav>

  )
}

export default Nav
