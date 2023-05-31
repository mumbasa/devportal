import { NavLink } from "react-router-dom"

const Sidebar =()=>{

return(

    <aside className="sidebar-left border-right bg-white shadow" id="leftSidebar" data-simplebar>
    <a href="#" className="btn collapseSidebar toggle-btn d-lg-none text-muted ml-2 mt-3" data-toggle="toggle">
      <i className="fe fe-x"><span className="sr-only"></span></i>
    </a>
    <nav className="vertnav navbar navbar-light">

      <div className="w-100 mb-4 d-flex">
        <a className="navbar-brand mx-auto mt-2 flex-fill text-center" href="./index.html">
          <svg version="1.1" id="logo" className="navbar-brand-img brand-sm" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 120" xmlSpace="preserve">
            <g>
              <polygon className="st0" points="78,105 15,105 24,87 87,87 	" />
              <polygon className="st0" points="96,69 33,69 42,51 105,51 	" />
              <polygon className="st0" points="78,33 15,33 24,15 87,15 	" />
            </g>
          </svg>
        </a>
      </div>
      <ul className="navbar-nav flex-fill w-100 mb-2">
        <li className="nav-item dropdown">
          <NavLink to={'/admin/dashboard'} className="nav-link">
            <i className="fe fe-home fe-16"></i>
            <span className="ml-3 item-text">Dashboard</span><span className="sr-only">(current)</span>
          </NavLink>

        </li>
      </ul>
      <p className="text-muted nav-heading mt-4 mb-1">
        <span>Components</span>
      </p>
      <ul className="navbar-nav flex-fill w-100 mb-2">
       
        <li className="nav-item dropdown">
          <a href="#forms" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
            <i className="fe fe-credit-card fe-16"></i>
            <span className="ml-3 item-text">Application</span>
          </a>
          <ul className="collapse list-unstyled pl-4 w-100" id="forms">
            <li className="nav-item">
              <NavLink className="nav-link pl-3" to={'/admin/applicants'}><span className="ml-1 item-text">All Aplication</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link pl-3" to={'/admin/search'}><span className="ml-1 item-text">Search Application</span></NavLink>
            </li>
           
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a href="#tables" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
            <i className="fe fe-grid fe-16"></i>
            <span className="ml-3 item-text">Users</span>
          </a>
          <ul className="collapse list-unstyled pl-4 w-100" id="tables">
            <li className="nav-item">
              <NavLink className="nav-link pl-3" to={'/admin/users'} ><span className="ml-1 item-text">Users</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link pl-3" to={'/admin/new/user'}><span className="ml-1 item-text">New User</span></NavLink>
            </li>
          
          </ul>
        </li>


        <li className="nav-item dropdown">
          <a href="#tables" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
            <i className="fe fe-grid fe-16"></i>
            <span className="ml-3 item-text">Source Codes</span>
          </a>
          <ul className="collapse list-unstyled pl-4 w-100" id="tables">
            <li className="nav-item">
              <a className="nav-link pl-3" href='https://github.com/mumbasa/devbackend' target="_blank" ><span className="ml-1 item-text">Back End</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link pl-3" href='https://github.com/mumbasa/devfrontsub' target="_blank"><span className="ml-1 item-text">Submissions Front End</span></a>
            </li>

            <li className="nav-item">
              <a className="nav-link pl-3" href='https://github.com/mumbasa/devportal'><span className="ml-1 item-text">Portal Front End</span></a>
            </li>
          
          </ul>
        </li>
     
      </ul>
     
     
    </nav>
  </aside>
)





}
export default Sidebar