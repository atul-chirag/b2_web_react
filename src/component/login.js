import React from 'react';
import { useState } from 'react';
import { loginPage,profileStatus } from '../api-service';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Login = () => {
  const intil = {
    email : "",
    password : ""
  }

  const [form, setForm] = useState(intil)

  const navigate = useNavigate();

  
const handelchange =(evt)=>{
  setForm({
    ...form,
    [evt.target.name]: evt.target.value
  })
}

  const submitForm = (e) => {
    e.preventDefault();
    loginPage({
     email : form.email,
     password: form.password
    })
    .then((data) => {
      if(data.status === 200){
        localStorage.setItem('token', data.data.data[0].token);
        profileStatus({
          token : localStorage.getItem('token')
        })
        navigate('/dashboard');
        return data;
      }else{
       if (typeof data.data.msg === 'string'){
          swal({
           text: data.data.msg,
          });
       }else{
         swal({
           text: data.data.msg.password[0],
         });
       }
      }
      return data;
    })
    .catch((error) => {
    
    });
  };

  return (
    <>
      <div className='login_bg '>
        <div className='container align-self-center'>
              <div className='login_block w-50 m-auto '>
                    <form onSubmit={submitForm}>
                      <div className='form_login'>
                        <div className='form-group'>
                          <div className=' text-center login_logo'>
                            <img src='https://storage.googleapis.com/storage.billing2.com/assets/img/logo.png' alt='' className='img-responsive' />
                          </div>
                        </div>
                        <div className='form-group'>
                         
                            <label htmlFor='email' className='label-control'>
                              User Name
                            </label>
                            <input type='text' className='form-control ' name = "email" placeholder='Enter User Name' id='email' value={form.email} autoComplete='off' onChange={handelchange} />
                         
                        </div>
                        <div className='mb-1'>
                        
                            <label htmlFor='password' className='label-control'>
                              Password
                            </label>
                            <input type='password' className='form-control' name ="password" placeholder='Enter Password' id='password' value={form.password} autoComplete='off' onChange={handelchange} />
                         
                        </div>
                        <div className='form-group text-right'>
                          <Link to='/signup' className=''>
                            Sign Up &nbsp;<i className='fas fa-sign-in-alt'></i>
                          </Link>
                        </div>
                        <div className='text-center'>
                          <button className='btn btn-light-blue  w-120 ng-binding'>Log in</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
    </>
  );
};

export default Login;
