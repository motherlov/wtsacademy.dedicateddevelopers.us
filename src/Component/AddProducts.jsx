import { TextField, Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { addProduct } from "../Redux/CrudSlice/CrudSlice";
import { useNavigate } from "react-router-dom";


const AddProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title,setTitle] =useState('')
  const [description,setDescription] = useState('')
  const [image, setImage] = useState('');

  const { status } = useSelector((s) => s?.Crud);
  console.log(status, "status");


  const handleSubmit = () => {

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);
    dispatch(addProduct(formData));
    navigate("/");

  };

  return (
    <>
    <main id="main">
      <section className="mt-5">
        <div className="container py-4 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100 mt-5">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                // src="/img/ktem.png"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
              <h1 style={{color:"green"}}> Add New Data</h1>

             

<TextField
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  name="title"
                  label="Enter Your title"
                  type="text"
                  value={title}
                  onChange={(e)=>setTitle(e.target.value)}
                  autoComplete="given-title"
                  autoFocus
                />


                  <TextField
                  label="Enter Your description"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  onChange={(e)=>setDescription(e.target.value)}
                  autoComplete="given-title"
                  autoFocus
                  
                />

            
                 <TextField
                  type="file"
                 
                  label=""
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  onChange={(e) => setImage(e.target.files[0])} 
                  autoComplete="given-title"
                  autoFocus
                 
                />    


                  {image !== "" && image !== undefined && image !== null ? (
                 <img src={URL.createObjectURL(image)}  style={{height: "100px"}}  alt="" className="upload-img"/>
                
                  ) : (
                    <>
                    {image === "" && <p>Drag or drop content here</p>}
                    </>
                  )}  

                  

              
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    onClick={handleSubmit}
                    sx={{ marginTop: 2 }}
                  >
            
                  Insert Data
                  </Button>
              </form>
    
            </div>
          </div>
        </div>
      </section>
    </main>
  </>
  )
};

export default AddProducts;