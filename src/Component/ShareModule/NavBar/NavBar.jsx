import React from 'react'
import { useLocation,Link } from 'react-router-dom'
import { useEffect } from 'react';
import { logout } from '../../../Redux/AuthSlice/AuthSlice';
import {  useDispatch,useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { profile_pic } from '../../../Redux/Helper/Helper';
import { userDetails } from '../../../Redux/CrudSlice/CrudSlice';
import Avatar from '@mui/material/Avatar';
export default function NavBar() {
  const token= localStorage.getItem("token")
     const location = useLocation();
     const fullURL = `${location.pathname}`;
      const IsLoginOrRegister =  fullURL ==="/login" || fullURL ==="/register" ;


      const { user } = useSelector((state) => state.Crud);

       console.log("user",user)
      const dispatch = useDispatch();
      const navigate = useNavigate();
      useEffect(() => {
        dispatch(userDetails());
      }, []);
    


      
      const submitLogout = () => {
        dispatch(logout());
        navigate("/login");
        toast.success("logout successfully");
      };

  return (
<>

{!IsLoginOrRegister && (
<>

  {/* Navbar Start */}

  <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
    <a href="/" className="navbar-brand">
      <h1 className="m-0 text-primary"><i className="fa fa-book-reader me-3" />WebSkitter</h1>
    </a>
    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav mx-auto">
        <a href="/" className="nav-item nav-link active">Home</a>
        <a href="/add" className="nav-item nav-link">Add Product</a>
        <a href="/classes" className="nav-item nav-link">Classes</a>
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
          <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
            <a href="/facility" className="dropdown-item">School Facilities</a>
            <a href="/team" className="dropdown-item">Popular Teachers</a>
            <a href="/call-to-action" className="dropdown-item">Become A Teachers</a>
            <a href="/appointment" className="dropdown-item">Make Appointment</a>
            <a href="/estimonial" className="dropdown-item">Testimonial</a>
            <a href="/404" className="dropdown-item">404 Error</a>
          </div>
        </div>
        <a href="contact" className="nav-item nav-link">Contact Us</a>
        
      </div>



      <div className="navbar-nav mx-auto">
      <Link to="/user">
{token ? (

<Avatar alt="User Avatar" src={
                              user?.profile_pic
                                ? profile_pic(user?.profile_pic)
                                : null
                            }
                            style={{
                              height: "30px",
                              width: "30px",
                              borderRadius: "50%",
                            }}
                            
                             />
                         

                        

                        ) : null}
                        </Link>
                        </div>


      { token ?( 
      
            <button  onClick={submitLogout} className="btn btn-primary rounded-pill px-3 d-none d-lg-block">
            Logout<i className="fa fa-arrow-right ms-3" /></button> 
        ):(   
        <Link  to="/login" className="btn btn-primary rounded-pill px-3 d-none d-lg-block">
        login<i className="fa fa-arrow-right ms-3" /></Link>
        )
        } 

    </div>
  </nav>
  </>
  )}

</>
  )
}
