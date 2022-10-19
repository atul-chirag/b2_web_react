import React from 'react';
import { useState } from 'react';
import { signupPage } from '../api-service';
import { Link, useNavigate } from 'react-router-dom';
import { countries as countryList } from '../api-service/Coutries_show';
import uuid from 'react-uuid';
import swal from 'sweetalert';

const Signup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [referralType, setReferralType] = useState('');
  const [referralValue, setReferralValue] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState({ error: false, errorMsg: [] });


  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    signupPage({
      firstname,
      lastname,
      email,
      password,
      referralType,
      referralValue,
      location
    })
      .then((data) => {
        if (data.status === 200) {
          navigate('/');
          localStorage.setItem('token', data.data.data[0].token);
          localStorage.setItem('access', data.data.data[0].access);
          return data;
        } else if (data.status === 422) {
          setError({ error: true, errorMsg: data.data.msg });
        }
      })
      .catch((error) => {
        swal({
          text: error.response.data.msg[0],
        });
      });
  };

  console.log(error)

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
                  <label htmlFor='firstname' className='label-control'>
                    First Name
                  </label>
                  <input type='text'
                    className='form-control'
                    placeholder='Enter First Name'
                    id='firstname'
                    defaultValue={firstname}
                    autoComplete='off'
                    onChange={(e) => setFirstname(e.target.value)} />
                  {
                    error.error && error.errorMsg?.firstname[0] ? <span style={{ color: 'red' }}>{error.errorMsg.firstname[0]}</span> : <span></span>
                  }

                </div>
                <div className='form-group'>
                  <label htmlFor='lastname' className='label-control'>
                    Last Name
                  </label>
                  <input type='text'
                    className='form-control '
                    placeholder='Enter Last Name'
                    id='lastname'
                    defaultValue={lastname}
                    autoComplete='off'
                    onChange={(e) => setLastname(e.target.value)} />
                  {
                    error.error && error.errorMsg?.lastname[0] ? <span style={{ color: 'red' }}>{error.errorMsg.lastname[0]}</span> : <span></span>
                  }
                </div>
                <div className='form-group'>
                  <label htmlFor='email' className='label-control'>
                    Email
                  </label>
                  <input type='text'
                    className='form-control '
                    placeholder='Enter Email'
                    id='email'
                    defaultValue={email}
                    autoComplete='off'
                    onChange={(e) => setEmail(e.target.value)} />
                  {
                    error.error && error.errorMsg?.email[0] ? <span style={{ color: 'red' }}>{error.errorMsg.email[0]}</span> : <span></span>
                  }
                </div>
                <div className='mb-1'>
                  <label htmlFor='password' className='label-control'>
                    Password
                  </label>
                  <input type='password'
                    className='form-control'
                    placeholder='Enter Password'
                    id='password'
                    defaultValue={password}
                    autoComplete='off'
                    onChange={(e) => setPassword(e.target.value)} />
                  {
                    error.error && error.errorMsg?.password[0] ? <span style={{ color: 'red' }}>{error.errorMsg.password[0]}</span> : <span></span>
                  }
                </div>
                <div className='mb-1'>
                  <label htmlFor='password' className='label-control'>
                    Your Location
                  </label>
                  <select name="location" id="" className='form-control' value={location} onChange={(e) => setLocation(e.target.value)} >
                    <option value="select" selected >Select</option>
                    {
                      countryList.length > 0 ?
                        countryList.map((value) =>
                          <option key={uuid()} value={value.code}> {`${value.name} - (${value.prefix})`}</option>
                        )
                        : <option>No Record Found</option>
                    }
                  </select>
                  {
                    error.error && error.errorMsg?.location[0] ? <span style={{ color: 'red' }}>{error.errorMsg.location[0]}</span> : <span></span>
                  }
                </div>
                <div className='mb-1'>
                  <label htmlFor='referral' className='label-control'>
                    Referral
                  </label>
                  <select name="referral_type" id="referral_type" className='form-control' value={referralType} onChange={(e) => setReferralType(e.target.value)}>
                    <option value="select" selected >Select</option>
                    <option key={uuid()} value="email_marketing_message">Email Marketing Message</option>
                    <option key={uuid()} value="contacted_by_billing2">Contacted By Billing2</option>
                    <option key={uuid()} value="recommended_by">Recommended By</option>
                    <option key={uuid()} value="website_link">Website link</option>
                    <option key={uuid()} value="search_engine">Search engine</option>
                  </select>
                  <input type='referral_value'
                    className='form-control my-2'
                    id='referral_value'
                    autoComplete='off'
                    defaultValue={referralValue}
                    hidden={referralType === 'email_marketing_message' ||
                      referralType === 'select' ||
                      referralType === '' ? true : false}
                    onChange={(e) => setReferralValue(e.target.value)} />
                  {/* {
                    error.error ? <span style={{ color: 'red' }}>{error.errorMsg.referral_value[0]}</span> : <span></span>
                  } */}
                </div>
                <div className='form-group text-right'>
                  <Link to='/' className=''>
                    Login &nbsp;<i className='fas fa-sign-in-alt'></i>
                  </Link>
                </div>
                <div className='text-center'>
                  <button className='btn btn-light-blue  w-120 ng-binding'>Signup</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
