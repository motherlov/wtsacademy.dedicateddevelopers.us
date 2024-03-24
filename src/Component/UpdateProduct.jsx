import { TextField, Button, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import image1 from  '../Component/Image/download (1).jpg'
import { updateProductDetail } from "../Redux/CrudSlice/CrudSlice";
import { getProductById } from "../Redux/CrudSlice/CrudSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const UpdateProduct = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { updateProduct } = useSelector((state) => state.Crud);
   console.log("update", updateProduct);

  const [img, setImg] = useState("");
  const { status } = useSelector((s) => s?.Crud);
  console.log(status, "status");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("title", data.title);
    formData.append("description", data.description);
    // formData.append("image", img); //name of the input field
    {
      img
        ? formData.append("image", img)
        : formData.append("image", updateProduct.image);
    }
    dispatch(updateProductDetail(formData));
    navigate("/");
  };

  useEffect(() => {
    dispatch(getProductById(id));
  }, [id, dispatch]); // third braket use

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (updateProduct) {
      setValue("title", updateProduct.title);
      setValue("description", updateProduct.description);
    }
  }, [updateProduct]);

  return (
    <div>
      <main id="main">
        <section className="mt-5">
          <div className="container py-4 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100 mt-5">
              <div className="col-md-8 col-lg-7 col-xl-6">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  className="img-fluid"
                  alt="Phone image"
                />
              </div>
              <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <form>
                  <h1 style={{ color: "green" }}> Update New Data</h1>
                  <br />

                  <TextField
                    {...register("title", {
                      required: "title is required",
                    })}
                    label=""
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    name="title"
                    error={errors.title}
                    helperText={errors.title && errors.title.message}
                  />

                  <TextField
                    {...register("description", {
                      required: "description is required",
                    })}
                    label=""
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    name="description"
                    error={errors.description}
                    helperText={
                      errors.description && errors.description.message
                    }
                  />

                  <TextField
                    input
                    type="file"
                    {...register("image")}
                    label=""
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    onChange={(e) => setImg(e.target.files[0])}
                    error={errors.image}
                    helperText={errors.image && errors.image.message}
                  />

                  {img !== "" && img !== undefined && img !== null ? (
                    <img
                      height="40px"
                      src={URL.createObjectURL(img)}
                      alt=""
                      className="upload-img"
                    />
                  ) : (
                    <>
                      {updateProduct?.image === "" ? (
                        <img
                          height="40px"
                          src={image1}
                          alt=""
                          className="upload-img"
                        />
                      ) : (
                        <img
                          height="40px"
                          src={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${updateProduct?.image}`}
                          alt=""
                          className="upload-img"
                        />
                      )}
                      {img === "" && <p>Drag or drop content here</p>}
                    </>
                  )}

                  {status === "loading" ? (
                    // Display the loader while loading is in progress
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="large"
                      type="submit"
                      onClick={handleSubmit(onSubmit)}
                      sx={{ marginTop: 2 }}
                    >
                      {/* {/ <Loader /> /} */}Update
                    </Button>
                  ) : (
                    // Render the link when not loading
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="large"
                      type="submit"
                      onClick={handleSubmit(onSubmit)}
                      sx={{ marginTop: 2 }}
                    >
                      Update Data
                    </Button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UpdateProduct;