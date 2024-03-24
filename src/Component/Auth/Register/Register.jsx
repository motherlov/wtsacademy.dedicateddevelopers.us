import React, { useState,useEffect } from 'react';
import { Box, Typography, TextField, Button, IconButton,Grid,Link, InputAdornment } from '@mui/material';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import { Visibility, VisibilityOff } from '@mui/icons-material';
//import backgroundImage from './your-background-image.jpg';
import {useDispatch,useSelector } from 'react-redux';
 import { useNavigate } from 'react-router-dom';
 import { signup } from '../../../Redux/AuthSlice/AuthSlice';
const Register = () => {
  




  const [first_name, setFirst_name] =useState('');
  const [last_name, setLast_name] =useState('');
  const [email, setEmail] = useState('');
  const[password,setPassword] = useState('');
  const [image,setImage] =useState('')

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit =(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("first_name",first_name);
    formData.append("last_name",last_name);
    formData.append("email",email);
    formData.append("password",password);
    formData.append("profile_pic", image);
    dispatch(signup(formData));
  }

 const {redirect} = useSelector((state)=>state.Auth)
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const RedirectUser = () => {
    let name = localStorage.getItem("name");
    let isInLoginPage = window.location.pathname.toLowerCase() === "/register";
    if (name !== null && name !== undefined && name !== "") {
        isInLoginPage && navigate("/login");
    }
};
useEffect(()=>{
  RedirectUser()
},[redirect])



  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  
  return (
    <Box
      sx={{
        backgroundImage: `url('https://as2.ftcdn.net/v2/jpg/02/84/97/07/1000_F_284970777_9z4o7upA5NW9docOpg8FWnPS4yXLiI8i.jpg')`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: 2,
        overflow: 'hidden', // Prevents background overflow
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: 4,
          borderRadius: 4,
          textAlign: 'center',
          //overflow: 'hidden', // Prevents content from overflowing
          
        }}
      >
<Container component="main" maxWidth="xs">
      <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: 'hidden',
        }}
      >
        <Typography component="h1" variant="h5">
          Registration Form
        </Typography>
        <Box component="form"  noValidate sx={{ mt: 1 }}>


        <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  name="firstname"
                  label="First Name"
                  type="text"
                  value={first_name}
                  onChange={(e)=>setFirst_name(e.target.value)}
                  autoComplete="given-name"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  name="Lastname"
                  label="Last Name"
                  type="text"
                  value={last_name}
                  onChange={(e)=>setLast_name(e.target.value)}
                  autoComplete="given-name"
                  autoFocus
                />
              
 {/* <Grid item xs={12} sm={6}>
            <TextField
                  required
                  fullWidth
                  id="phone"
                  value={phone}
                  label="mobile"
                  name="phone"
                  type="number"
                  variant="outlined"
                  inputProps={{ maxLength: 10, inputMode: 'numeric', pattern: '[0-9]*' }}
                  onChange={(e)=>setPhone(e.target.value)}
                  autoComplete="mobile-number"
                /> 
                </Grid> */}

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="email Address"
            name="email"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            autoComplete="email"
            autoFocus
            InputLabelProps={{ shrink: true }}
            InputProps={{
            inputProps: {
            pattern: '^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$',
    },
  }}
          />


<TextField
      label="Password"
      id="password"
      name="password"
      margin="normal"
            required
            fullWidth
            value={password}
       onChange={(e)=>setPassword(e.target.value)}
      type={showPassword ? 'text' : 'password'}
      autoComplete="current-password"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleTogglePasswordVisibility} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />

              {/* <TextField
                  required
                  fullWidth
                  id="answer"
                  label="answer"
                  name="answer"
                  value={answer}
                  type="text"
                  onChange={(e)=>setAnswer(e.target.value)}
                  autoComplete="answer"
                /> */}

               <TextField
                  required
                  fullWidth
                  name="profile_pic"
                //   label="profile_pic"
                  type="file"
                  id="profile_pic"
                  onChange={handleFileChange}
                  autoComplete="new-profile_pic"
                /> 
                <div>
               {image && <img src={image} alt="Uploaded" style={{ maxWidth: '80px', maxHeight: '90px' }} />}
               </div> 

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
           onClick={handleSubmit}
          >
            Sign Up
          </Button>

     
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          {/* <Button  variant="contained" color="success" fullWidth>Sign up with Google</Button>
      <br/>
      <br/>
      <Button  variant="contained" color="success" fullWidth> Sign up with Facebook </Button> */}
          
        </Box>
      </Box>
    </Container>


        
      </Box>
    </Box>
  );
};

export default Register;