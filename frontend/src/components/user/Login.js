import { Formik } from "formik";
import React from 'react';
import Loginimage from"./Loginimg.jpg";
import "./Login.css";
import app_config from "../../config";
import { MDBInput } from 'mdb-react-ui-kit';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const Login = () => {

  const url = app_config.apiurl;
  const navigate = useNavigate();

  const userSubmit = async (formdata) => {
    console.log(formdata);
    const res = await fetch(url+'/user/auth', {
      method: 'POST',
      body : JSON.stringify(formdata),
      headers: {
        'Content-Type' : 'application/json'
      }
    })

    console.log(res.status);
    if(res.status===201){
      const userdata = (await res.json()).result;
      //success alert
      Swal.fire(
        'Hurray!',
        'Login Successful',
        'success'
      )
      console.log(userdata);
      if(userdata.isAdmin){
        sessionStorage.setItem("admin", JSON.stringify(userdata));
        navigate("/admin/profile");
      }else{
        sessionStorage.setItem("user", JSON.stringify(userdata));
        navigate("/user/profileform");
      }
      
    }else{
      // fail alert
      Swal.fire(
        'Oops...',
        'Login Unsuccessful',
        'error'
      )
    }
  }
  return (
    <>
      {/* Section: Design Block */}
      <section className="mainlogin text-center text-lg-start">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .cascading-right {\n      margin-right: -50px;\n    }\n\n    @media (max-width: 991.98px) {\n      .cascading-right {\n        margin-right: 0;\n      }\n    }\n  "
          }}
        />
        {/* Jumbotron */}
        <div className="container py-3">
          <div className="row g-0 align-items-center">
            <div className="col-lg-4 mb-3 mb-lg-0">
              <div
                className="card cascading-right"
                style={{
                  background: "hsla(0, 0%, 100%, 0.55)",
                  backdropFilter: "blur(30px)"
                }}
              >
                <div className="card-body p-3 shadow-3 text-center">
                  <h3 className="heading2 fw-bold mb-3">Login Now</h3>
                  <Formik initialValues={{ email: '', password: '' }} onSubmit={userSubmit}>

                    {({ values, handleSubmit, handleChange }) => (
                      <form onSubmit={handleSubmit}>
                        {/* Email input */}
                        <div className="form-outline mb-2">
                          <MDBInput
                            label="Email Address"
                            type="email"
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                          />
                        </div>
                        {/* Password input */}
                        <div className="form-outline mb-2">
                          <MDBInput
                            label="Password"
                            type="password"
                            id="password"
                            className="form-control"
                            value={values.password}
                            onChange={handleChange}
                          />
                        </div>
                        {/* Submit button */}
                        <button
                          type="submit"
                          className="btn1 btn-rounded btn-block btn-outline-white mb-2"
                        >
                          Login
                        </button>
                        {/* Register buttons
                        <div className="text-center">
                          <p>or sign up using:</p>
                          <button
                            type="button"
                            className="btn4 btn-outline-white btn-link btn-floating mx-1"
                          >
                            <i className="fab fa-facebook-f" />
                          </button>
                          <button
                            type="button"
                            className="btn4 btn-outline-white btn-link btn-floating mx-1"
                          >
                            <i className="fab fa-google" />
                          </button>
                          <button
                            type="button"
                            className="btn4 btn-outline-white btn-link btn-floating mx-1"
                          >
                            <i className="fab fa-twitter" />
                          </button>
                          <button
                            type="button"
                            className="btn4 btn-outline-white btn-link btn-floating mx-1"
                          >
                            <i className="fab fa-github" />
                          </button><br></br>
                          <br></br>
                          <a>Forgot Password</a>
                        </div>*/}
                        <div className="text-center">
                          <p>Don't have an account?</p>
                          <a className="d-flex mt-2 justify-content-center align-items-center" href={'/user/signup'}>Signup...</a>
                          </div>
                      </form>
                    ) }
                  </Formik>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <img
                src={Loginimage}
                className="w-100 rounded-4 shadow-4"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* Jumbotron */}
      </section>
      {/* Section: Design Block */}
    </>
  )
}
export default Login