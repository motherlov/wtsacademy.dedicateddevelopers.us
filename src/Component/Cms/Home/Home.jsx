import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../Redux/CrudSlice/CrudSlice';
import { removeProduct } from '../../../Redux/CrudSlice/CrudSlice';
import { image } from '../../../Redux/Helper/Helper';
export default function Home() {
   const [bannerdata,setBannerdata] =useState('')
   const dispatch =useDispatch();
    const ProductList = useSelector((state)=>state.Crud.ProductList);
    useEffect(()=>{
      dispatch(getProducts());
    },[dispatch])
    console.log("ProductList",ProductList)
const { totalPages ,status} = useSelector((state) => state.Crud);
 

  const token = localStorage.getItem("token");
  const [totalRecords, setPage] = useState();
  const [productId, setProductId] = useState();
  const [openModel, setOpenModel] = useState(false);
  const handleChange = (e, pageno) => {
    setPage(pageno);
    dispatch(
      getProducts({
        page: pageno,
        perpage: 10,
      })
    );
  };

  

  const handleDelete = () => {
    if (productId) {
      dispatch(removeProduct({ id: productId })).then(() => {
        dispatch(getProducts());
      });
      setOpenModel(false);
      setProductId("");
    }
  };




  return (



    <div className="container-xxl bg-white p-0">


  {/* Carousel Start */}
   
    <OwlCarousel
            className="owl-carousel owl-theme carousel slide"
            margin={10}
            items={1}
            loop={true}
            autoplay={true}
            autoplayTimeout={4000}
            dots={false}
            data-bs-ride="carousel"
          >
            {bannerdata && bannerdata.map((banner, index) => (
              <div className="carousel-inner item" key={index}>
                <div className="carousel-item active">
                  <img
                    style={{ height: "70vh", width: "100vw" }}
                    src={`https://restapinodejs.onrender.com/api/banner/photo/${banner._id}`}
                    alt=""
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div style={{ maxWidth: 900, marginBottom: "350px" }}>
                      {/* <h1 className=" text-uppercase mb-md-3">
                        {banner.title}
                      </h1> */}
                      {/* <span className="display-6 mb-md-4 ">
                        {banner.description}
                      </span> */}
                    </div>
                    <h1 className="m-0" style={{color:'white'}}>
                        {banner.title}
                      </h1>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>


  {/* Carousel End */}



  {/* Facilities Start */}

  {/* <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <h1 className="mb-3">School Facilities</h1>
        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="facility-item">
            <div className="facility-icon bg-primary">
              <span className="bg-primary" />
              <i className="fa fa-bus-alt fa-3x text-primary" />
              <span className="bg-primary" />
            </div>
            <div className="facility-text bg-primary">
              <h3 className="text-primary mb-3">School Bus</h3>
              <p className="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="facility-item">
            <div className="facility-icon bg-success">
              <span className="bg-success" />
              <i className="fa fa-futbol fa-3x text-success" />
              <span className="bg-success" />
            </div>
            <div className="facility-text bg-success">
              <h3 className="text-success mb-3">Playground</h3>
              <p className="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="facility-item">
            <div className="facility-icon bg-warning">
              <span className="bg-warning" />
              <i className="fa fa-home fa-3x text-warning" />
              <span className="bg-warning" />
            </div>
            <div className="facility-text bg-warning">
              <h3 className="text-warning mb-3">Healthy Canteen</h3>
              <p className="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="facility-item">
            <div className="facility-icon bg-info">
              <span className="bg-info" />
              <i className="fa fa-chalkboard-teacher fa-3x text-info" />
              <span className="bg-info" />
            </div>
            <div className="facility-text bg-info">
              <h3 className="text-info mb-3">Positive Learning</h3>
              <p className="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}



  {/* Facilities End */}


  {/* About Start */}


  {/* <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="mb-4">Learn More About Our Work And Our Cultural Activities</h1>
          <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
          <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos, ipsum labore duo duo sit no sea diam. Et dolor et kasd ea. Eirmod diam at dolor est vero nonumy magna.</p>
          <div className="row g-4 align-items-center">
            <div className="col-sm-6">
              <a className="btn btn-primary rounded-pill py-3 px-5" href>Read More</a>
            </div>
            <div className="col-sm-6">
              <div className="d-flex align-items-center">
                <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt style={{width: 45, height: 45}} />
                <div className="ms-3">
                  <h6 className="text-primary mb-1">Jhon Doe</h6>
                  <small>CEO &amp; Founder</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
          <div className="row">
            <div className="col-12 text-center">
              <img className="img-fluid w-75 rounded-circle bg-light p-3" src="img/about-1.jpg" alt />
            </div>
            <div className="col-6 text-start" style={{marginTop: '-150px'}}>
              <img className="img-fluid w-100 rounded-circle bg-light p-3" src="img/about-2.jpg" alt />
            </div>
            <div className="col-6 text-end" style={{marginTop: '-150px'}}>
              <img className="img-fluid w-100 rounded-circle bg-light p-3" src="img/about-3.jpg" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}


  {/* About End */}
  {/* Call To Action Start */}


  {/* <div className="container-xxl py-5">
    <div className="container">
      <div className="bg-light rounded">
        <div className="row g-0">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s" style={{minHeight: 400}}>
            <div className="position-relative h-100">
              <img className="position-absolute w-100 h-100 rounded" src="img/call-to-action.jpg" style={{objectFit: 'cover'}} />
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="h-100 d-flex flex-column justify-content-center p-5">
              <h1 className="mb-4">Become A Teacher</h1>
              <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <a className="btn btn-primary py-3 px-5" href>Get Started Now<i className="fa fa-arrow-right ms-2" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  {/* Call To Action End */}



  {/* Classes Start */}
  <div className="container-xxl py-5">
    <div className="container">
    <div class="d-grid gap-2 col-6 mx-auto">
  {/* <Link to="/add" className="btn btn-primary" type="button">Add Product</Link> */}
</div>
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <h1 className="mb-3">Your Blog</h1>
        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
      </div>
      <div className="row g-4">


           {ProductList && ProductList.map((product)=>(
            
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s"  key={product._id}>
          <div className="classes-item">
            <div className="bg-light rounded-circle w-75 mx-auto p-3">
              <img className="img-fluid rounded-circle"  src={product?.image ? image(product?.image) : "error"} alt />
            </div>
            <div className="bg-light rounded p-4 pt-5 mt-n5">
              <a className="d-block text-center h3 mt-3 mb-4" href>{product.title}</a>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  {/* <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt style={{width: 45, height: 45}} /> */}
                  <div className="ms-3">
                    <h6 className="text-primary mb-1">{product.description}</h6>
                    {/* <small>Teacher</small> */}
                  </div>
                </div>
                {/* <span className="bg-primary text-white rounded-pill py-2 px-3" href>$99</span> */}
                <span className="bg-primary text-white rounded-pill py-2 px-3" href>



                <Link to={`/update/${product._id}`}>
                              <button type="submit"   >
                             <b>Update</b>
                              </button>
                            </Link>



                </span>
              </div>
              <div className="row g-1">
                <div className="col-4">
                  <div className="border-top border-3 border-primary pt-2">
                    <h6 className="text-primary mb-1">Age:</h6>
                    <small>18-32 Years</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="border-top border-3 border-success pt-2">
                    <h6 className="text-success mb-1">Time:</h6>
                    <small>9-10 AM</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="border-top border-3 border-warning pt-2">
                    <h6 className="text-warning mb-1">Capacity:</h6>
                    <small>30 Kids</small>
                  </div>



                      <button
                              type="submit"
                              variant='contained' 
                              className="text-primary mb-1" 
                              onClick={() => {
                                handleDelete();
                                setProductId(product._id);
                                setOpenModel(true);
                              }}
                            >
                              <b>Delete</b>
                            </button>
 
                            
                    


                 
                </div>
                {/* <button className="bg-primary text-white rounded-pill py-2 px-3">Apply Course</button> */}
              </div>
              
            </div>
          </div>
        </div>


      ))}


     
       
      


      </div>


    </div>
  </div>
  {/* Classes End */}








  {/* Appointment Start */}
  {/* <div className="container-xxl py-5">
    <div className="container">
      <div className="bg-light rounded">
        <div className="row g-0">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="h-100 d-flex flex-column justify-content-center p-5">
              <h1 className="mb-4">Make Appointment</h1>
              <form>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input type="text" className="form-control border-0" id="gname" placeholder="Gurdian Name" />
                      <label htmlFor="gname">Gurdian Name</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input type="email" className="form-control border-0" id="gmail" placeholder="Gurdian Email" />
                      <label htmlFor="gmail">Gurdian Email</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input type="text" className="form-control border-0" id="cname" placeholder="Child Name" />
                      <label htmlFor="cname">Child Name</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input type="text" className="form-control border-0" id="cage" placeholder="Child Age" />
                      <label htmlFor="cage">Child Age</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{height: 100}} defaultValue={""} />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{minHeight: 400}}>
            <div className="position-relative h-100">
              <img className="position-absolute w-100 h-100 rounded" src="img/appointment.jpg" style={{objectFit: 'cover'}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  {/* Appointment End */}



  {/* Team Start */}
  {/* <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <h1 className="mb-3">Popular Teachers</h1>
        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit
          eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item position-relative">
            <img className="img-fluid rounded-circle w-75" src="img/team-1.jpg" alt />
            <div className="team-text">
              <h3>Full Name</h3>
              <p>Designation</p>
              <div className="d-flex align-items-center">
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item position-relative">
            <img className="img-fluid rounded-circle w-75" src="img/team-2.jpg" alt />
            <div className="team-text">
              <h3>Full Name</h3>
              <p>Designation</p>
              <div className="d-flex align-items-center">
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item position-relative">
            <img className="img-fluid rounded-circle w-75" src="img/team-3.jpg" alt />
            <div className="team-text">
              <h3>Full Name</h3>
              <p>Designation</p>
              <div className="d-flex align-items-center">
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  {/* Team End */}






  {/* Testimonial Start */}
  {/* <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <h1 className="mb-3">Our Clients Say!</h1>
        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
      </div>
      <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
        <div className="testimonial-item bg-light rounded p-5">
          <p className="fs-5">Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
          <div className="d-flex align-items-center bg-white me-n5" style={{borderRadius: '50px 0 0 50px'}}>
            <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg" style={{width: 90, height: 90}} />
            <div className="ps-3">
              <h3 className="mb-1">Client Name</h3>
              <span>Profession</span>
            </div>
            <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex" />
          </div>
        </div>
        <div className="testimonial-item bg-light rounded p-5">
          <p className="fs-5">Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
          <div className="d-flex align-items-center bg-white me-n5" style={{borderRadius: '50px 0 0 50px'}}>
            <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" style={{width: 90, height: 90}} />
            <div className="ps-3">
              <h3 className="mb-1">Client Name</h3>
              <span>Profession</span>
            </div>
            <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex" />
          </div>
        </div>
        <div className="testimonial-item bg-light rounded p-5">
          <p className="fs-5">Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
          <div className="d-flex align-items-center bg-white me-n5" style={{borderRadius: '50px 0 0 50px'}}>
            <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg" style={{width: 90, height: 90}} />
            <div className="ps-3">
              <h3 className="mb-1">Client Name</h3>
              <span>Profession</span>
            </div>
            <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex" />
          </div>
        </div>
      </div>
    </div>
  </div> */}
  {/* Testimonial End */}





 {/* //////////////////////////// Footer /////////////////////////////// */}



  {/* Footer Start */}
  <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h3 className="text-white mb-4">Get In Touch</h3>
          <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</p>
          <p className="mb-2"><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
          <p className="mb-2"><i className="fa fa-envelope me-3" />info@example.com</p>
          <div className="d-flex pt-2">
            <a className="btn btn-outline-light btn-social" href><i className="fab fa-twitter" /></a>
            <a className="btn btn-outline-light btn-social" href><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-outline-light btn-social" href><i className="fab fa-youtube" /></a>
            <a className="btn btn-outline-light btn-social" href><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h3 className="text-white mb-4">Quick Links</h3>
          <a className="btn btn-link text-white-50" href>About Us</a>
          <a className="btn btn-link text-white-50" href>Contact Us</a>
          <a className="btn btn-link text-white-50" href>Our Services</a>
          <a className="btn btn-link text-white-50" href>Privacy Policy</a>
          <a className="btn btn-link text-white-50" href>Terms &amp; Condition</a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h3 className="text-white mb-4">Photo Gallery</h3>
          <div className="row g-2 pt-2">
            <div className="col-4">
              <img className="img-fluid rounded bg-light p-1" src="img/classes-1.jpg" alt />
            </div>
            <div className="col-4">
              <img className="img-fluid rounded bg-light p-1" src="img/classes-2.jpg" alt />
            </div>
            <div className="col-4">
              <img className="img-fluid rounded bg-light p-1" src="img/classes-3.jpg" alt />
            </div>
            <div className="col-4">
              <img className="img-fluid rounded bg-light p-1" src="img/classes-4.jpg" alt />
            </div>
            <div className="col-4">
              <img className="img-fluid rounded bg-light p-1" src="img/classes-5.jpg" alt />
            </div>
            <div className="col-4">
              <img className="img-fluid rounded bg-light p-1" src="img/classes-6.jpg" alt />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h3 className="text-white mb-4">WebSkitters</h3>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div className="position-relative mx-auto" style={{maxWidth: 400}}>
            <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            © <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved. 
            {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
            Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="footer-menu">
              <a href>Home</a>
              <a href>Cookies</a>
              <a href>Help</a>
              <a href>FQAs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
