// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import toast from 'react-hot-toast';
// import axios from 'axios';

// function Signup() {
//   const [role, setRole] = useState('student');
//   const [registerValues, setRegisterValues] = useState({
//     first_name: '',
//     last_name: '',
//     email: '',
//     phone: '',
//     password: '',
//     country_id: 0,
//     state_id: 0,
//     city_id: 0,
//     qualification_id: 0,
//   });

//   const [errors, setErrors] = useState({});
//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [qualifications, setQualifications] = useState([]);

//   const router = useRouter();

//   const handleRegisterChange = (e) => {
//     const { name, value } = e.target;
//     const parsedValue = ['country_id', 'state_id', 'city_id', 'qualification_id'].includes(name)
//       ? Number(value)
//       : value;
//     setRegisterValues({ ...registerValues, [name]: parsedValue });

//     // Perform validation on change
//     validateField(name, parsedValue);
//   };

//   const validateField = (name, value) => {
//     let error = '';

//     switch (name) {
//       case 'first_name':
//       case 'last_name':
//         if (value.length < 2 || value.length > 40) {
//           error = `${name.replace('_', ' ')} must be between 2 and 40 characters`;
//         }
//         break;
//       case 'password':
//         if (value.length < 6 || value.length > 12) {
//           error = 'Password must be between 6 and 12 characters';
//         }
//         break;
//       default:
//         break;
//     }

//     setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     // Check if there are any validation errors
//     if (Object.values(errors).some((error) => error)) {
//       toast.error('Please fix the errors before submitting');
//       return;
//     }

//     if (!registerValues.email || !registerValues.password) {
//       toast.error('Email and Password are required');
//       return;
//     }

//     const body = {
//       first_name: registerValues.first_name,
//       last_name: registerValues.last_name,
//       email: registerValues.email,
//       phone: registerValues.phone,
//       password: registerValues.password,
//       country_id: registerValues.country_id,
//       state_id: registerValues.state_id,
//       city_id: registerValues.city_id,
//       qualification_id: role === 'student' ? registerValues.qualification_id : undefined,
//     };

//     try {
//       console.log('Request Body:', body);
//       const response = await axios.post(
//         role === 'student' ? 'https://novajobs.us/api/students/register' : 'https://novajobs.us/api/trainers/register',
//         body,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       console.log('Response:', response);

//       if (response.status === 200) {
//         toast.success('Signed up successfully!');
//         router.push('/login');
//       } else {
//         toast.error('Failed to sign up.');
//       }

//       if (role === 'student' && !response.data.data.isTrainer) {
//         router.push('/');
//       } else {
//         router.push('/trainer');
//       }
//     } catch (err) {
//       console.error('Error Response:', err.response); // Log the error response
//       if (err.response && err.response.data && err.response.data.message) {
//         toast.error(`Error: ${err.response.data.message}`);
//       } else {
//         toast.error('An error occurred. Please try again.');
//       }
//     }
//   };

//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await axios.get(
//           role === 'student' ? 'https://novajobs.us/api/students/countries' : 'https://novajobs.us/api/trainers/countries'
//         );
//         console.log('Countries Response:', response.data.data);
//         setCountries(response.data.data);
//       } catch (error) {
//         console.error('Error fetching countries:', error);
//       }
//     };
//     fetchCountries();
//   }, [role]);

//   useEffect(() => {
//     if (registerValues.country_id) {
//       const fetchStates = async () => {
//         try {
//           const response = await axios.get(
//             role === 'student' ? `https://novajobs.us/api/students/stats/231` : `https://novajobs.us/api/trainers/stats/231`
//           );
//           console.log('States Response:', response.data.data);
//           setStates(response.data.data);
//         } catch (error) {
//           console.error('Error fetching states:', error);
//         }
//       };
//       fetchStates();
//     }
//   }, [registerValues.country_id, role]);

//   useEffect(() => {
//     if (registerValues.state_id) {
//       const fetchCities = async () => {
//         try {
//           const response = await axios.get(
//             role === 'student' ? `https://novajobs.us/api/students/cities/3919` : `https://novajobs.us/api/trainers/cities/3919`
//           );
//           console.log('Cities Response:', response.data.data);
//           setCities(response.data.data);
//         } catch (error) {
//           console.error('Error fetching cities:', error);
//         }
//       };
//       fetchCities();
//     }
//   }, [registerValues.state_id, role]);

//   useEffect(() => {
//     if (role === 'student') {
//       const fetchQualifications = async () => {
//         try {
//           const response = await axios.get('https://novajobs.us/api/students/qualifications');
//           setQualifications(response.data.data);
//         } catch (error) {
//           console.error('Error fetching qualifications:', error);
//         }
//       };
//       fetchQualifications();
//     }
//   }, [role]);

//   return (
//     <div id='bgimage'>
//       <div className='min-vh-100 d-flex justify-content-end px-2 px-md-4 py-3'>
//         <div className='p-4 rounded shadow-lg w-100 max-w-lg' id='bg'>
//           <h2 className='h4 text-black font-weight-bold text-center'>Welcome Back</h2>
//           <h3 className='h5 text-black font-weight-semibold py-3 text-center'>Please Create Your Account Here</h3>
//           <div className='d-flex justify-content-center mb-4'>
//             <button
//               className={`px-3 py-2 h5 font-weight-bold rounded ${role === 'student' ? 'bgchange text-white' : 'bg-light'}`}
//               onClick={() => setRole('student')}
//             >
//               Student
//             </button>
//             <button
//               className={`ml-2 px-3 py-2 h5 font-weight-bold rounded ${role === 'trainer' ? 'bgchange text-white' : 'bg-light'}`}
//               onClick={() => setRole('trainer')}
//             >
//               Trainer
//             </button>
//           </div>

//           <form onSubmit={handleSignup} >
//             <div className='mb-3'>
//               <label className='form-label text-black'>First Name</label>
//               <input
//                 type='text'
//                 name='first_name'
//                 value={registerValues.first_name}
//                 onChange={handleRegisterChange}
//                 className='form-control'
//                 placeholder='Enter your First Name'
//                 required
//                 minLength={2}
//                 maxLength={40}
//               />
//               {errors.first_name && <p className="text-danger text-xs">{errors.first_name}</p>}
//             </div>
//             <div className='mb-3'>
//               <label className='form-label text-black'>Last Name</label>
//               <input
//                 type='text'
//                 name='last_name'
//                 value={registerValues.last_name}
//                 onChange={handleRegisterChange}
//                 className='form-control'
//                 placeholder='Enter your Last Name'
//                 required
//                 minLength={2}
//                 maxLength={40}
//               />
//               {errors.last_name && <p className="text-danger text-xs">{errors.last_name}</p>}
//             </div>
//             <div className='mb-3'>
//               <label className='form-label text-black'>Email ID</label>
//               <input
//                 type='email'
//                 name='email'
//                 value={registerValues.email}
//                 onChange={handleRegisterChange}
//                 className='form-control'
//                 placeholder='Enter your email ID'
//                 required
//               />
//               {errors.email && <p className="text-danger text-xs">{errors.email}</p>}
//             </div>
//             <div className='mb-3'>
//               <label className='form-label text-black'>Phone</label>
//               <input
//                 type='number'
//                 name='phone'
//                 value={registerValues.phone}
//                 onChange={handleRegisterChange}
//                 className='form-control'
//                 placeholder='Enter your phone number'
//               />
//               {errors.phone && <p className="text-danger text-xs">{errors.phone}</p>}
//             </div>
//             <div className='mb-3'>
//               <label className='form-label text-black'>Password</label>
//               <input
//                 type='password'
//                 name='password'
//                 value={registerValues.password}
//                 onChange={handleRegisterChange}
//                 className='form-control'
//                 placeholder='Enter your password'
//                 required
//                 minLength={6}
//                 maxLength={12}
//               />
//               {errors.password && <p className="text-danger text-xs">{errors.password}</p>}
//             </div>
//             <div className='mb-3'>
//               <label className='form-label text-black'>Country</label>
//               <select
//                 name='country_id'
//                 value={registerValues.country_id}
//                 onChange={handleRegisterChange}
//                 className='form-select'
//               >
//                 <option value=''>Select Country</option>
//                 {countries.map((country) => (
//                   <option key={country.id} value={country.id}>
//                     {country.name}
//                   </option>
//                 ))}
//               </select> 
//                {errors.country_id && <p className="text-danger text-xs">{errors.country_id}</p>}
//             </div>
//             <div className='mb-3'>
//               <label className='form-label text-black'>State</label>
//               <select
//                 name='state_id'
//                 value={registerValues.state_id}
//                 onChange={handleRegisterChange}
//                 className='form-select'
//               >
//                 <option value=''>Select State</option>
//                 {states.map((state) => (
//                   <option key={state.id} value={state.id}>
//                     {state.name}
//                   </option>
//                 ))}
//               </select>
//               {errors.state_id && <p className="text-danger text-xs">{errors.state_id}</p>}
//             </div>
//             <div className='mb-3'>
//               <label className='form-label text-black'>City</label>
//               <select
//                 name='city_id'
//                 value={registerValues.city_id}
//                 onChange={handleRegisterChange}
//                 className='form-select'
//               >
//                 <option value=''>Select City</option>
//                 {cities.map((city) => (
//                   <option key={city.id} value={city.id}>
//                     {city.name}
//                   </option>
//                 ))}
//               </select>
//               {errors.city_id && <p className="text-danger text-xs">{errors.city_id}</p>}
//             </div>

//             {/* {role === 'student' && (
//               <div className='mb-3'>
//                 <label className='form-label text-black'>Qualification</label>
//                 <select
//                   name='qualification_id'
//                   value={registerValues.qualification_id}
//                   onChange={handleRegisterChange}
//                   className='form-select'
//                 >
//                   <option value=''>Select Qualification</option>
//                   {qualifications.map((qualification) => (
//                     <option key={qualification.id} value={qualification.id}>
//                       {qualification.name}
//                     </option>
//                   ))}
//                 </select>
//                 {errors.qualification_id && <p className="text-danger text-xs">{errors.qualification_id}</p>}
//               </div>
//             )} */}

//             <button type='submit' className='w-100 py-2 px-3 bgchange text-white h4 font-weight-bold rounded'>
//               Sign Up
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import axios from 'axios';

function Signup() {
  const [role, setRole] = useState('student');
  const [registerValues, setRegisterValues] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    // country_id: 0,
    // state_id: 0,
    // city_id: 0,
    // qualification_id: 0,
  });

  const [errors, setErrors] = useState({});
  // const [countries, setCountries] = useState([]);
  // const [states, setStates] = useState([]);
  // const [cities, setCities] = useState([]);
  // const [qualifications, setQualifications] = useState([]);

  const router = useRouter();

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = ['country_id', 'state_id', 'city_id', 'qualification_id'].includes(name)
      ? Number(value)
      : value;
    setRegisterValues({ ...registerValues, [name]: parsedValue });

    // Perform validation on change
    validateField(name, parsedValue);
  };

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'first_name':
      case 'last_name':
        if (value.length < 2 || value.length > 40) {
          error = `${name.replace('_', ' ')} must be between 2 and 40 characters`;
        }
        break;
      case 'password':
        if (value.length < 6 || value.length > 12) {
          error = 'Password must be between 6 and 12 characters';
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    // Check if there are any validation errors
    if (Object.values(errors).some((error) => error)) {
      toast.error('Please fix the errors before submitting');
      return;
    }

    if (!registerValues.email || !registerValues.password) {
      toast.error('Email and Password are required');
      return;
    }

    const body = {
      first_name: registerValues.first_name,
      last_name: registerValues.last_name,
      email: registerValues.email,
      phone: registerValues.phone,
      password: registerValues.password,
      // country_id: registerValues.country_id,
      // state_id: registerValues.state_id,
      // city_id: registerValues.city_id,
      // qualification_id: role === 'student' ? registerValues.qualification_id : undefined,
    };

    try {
      console.log('Request Body:', body);
      const response = await axios.post(
        role === 'student' ? 'https://api.novajobs.us/api/students/register' : 'https://api.novajobs.us/api/trainers/register',
        body,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Response:', response);

      if (response.status === 200) {
        toast.success('Signed up successfully!');
        router.push('/login');
      } else {
        toast.error('Failed to sign up.');
      }

      if (role === 'student' && !response.data.data.isTrainer) {
        router.push('/');
      } else {
        router.push('/trainer');
      }
    } catch (err) {
      console.error('Error Response:', err.response); // Log the error response
      if (err.response && err.response.data && err.response.data.message) {
        toast.error(`Error: ${err.response.data.message}`);
      } else {
        toast.error('An error occurred. Please try again.');
      }
    }
  };

  // useEffect(() => {
  //   const fetchCountries = async () => {
  //     try {
  //       const response = await axios.get(
  //         role === 'student' ? 'https://api.novajobs.us/api/students/countries' : 'https://api.novajobs.us/api/trainers/countries'
  //       );
  //       console.log('Countries Response:', response.data.data);
  //       setCountries(response.data.data);
  //     } catch (error) {
  //       console.error('Error fetching countries:', error);
  //     }
  //   };
  //   fetchCountries();
  // }, [role]);

  // useEffect(() => {
  //   if (registerValues.country_id) {
  //     const fetchStates = async () => {
  //       try {
  //         const response = await axios.get(
  //           role === 'student' ? `https://api.novajobs.us/api/students/states/${registerValues.country_id}` : `https://api.novajobs.us/api/trainers/states/${registerValues.country_id}`
  //         );
  //         console.log('States Response:', response.data.data);
  //         setStates(response.data.data);
  //       } catch (error) {
  //         console.error('Error fetching states:', error);
  //       }
  //     };
  //     fetchStates();
  //   }
  // }, [registerValues.country_id, role]);

  // useEffect(() => {
  //   if (registerValues.state_id) {
  //     const fetchCities = async () => {
  //       try {
  //         const response = await axios.get(
  //           role === 'student' ? `https://api.novajobs.us/api/students/cities/${registerValues.state_id}` : `https://api.novajobs.us/api/trainers/cities/${registerValues.state_id}`
  //         );
  //         console.log('Cities Response:', response.data.data);
  //         setCities(response.data.data);
  //       } catch (error) {
  //         console.error('Error fetching cities:', error);
  //       }
  //     };
  //     fetchCities();
  //   }
  // }, [registerValues.state_id, role]);

  // useEffect(() => {
  //   if (role === 'student') {
  //     const fetchQualifications = async () => {
  //       try {
  //         const response = await axios.get('https://api.novajobs.us/api/students/qualifications');
  //         setQualifications(response.data.data);
  //       } catch (error) {
  //         console.error('Error fetching qualifications:', error);
  //       }
  //     };
  //     fetchQualifications();
  //   }
  // }, [role]);

  return (
    <div id='bgimage'>
      <div className='min-vh-100 d-flex justify-content-end px-2 px-md-4 py-3'>
        <div className='p-4 rounded shadow-lg w-100 max-w-lg' id='bg'>
          <h2 className='h4 text-black font-weight-bold text-center'>Welcome Back</h2>
          <h3 className='h5 text-black font-weight-semibold py-3 text-center'>Please Create Your Account Here</h3>
          <div className='d-flex justify-content-center mb-4'>
            <button
              className={`px-3 py-2 h5 font-weight-bold rounded ${role === 'student' ? 'bgchange text-white' : 'bg-light'}`}
              onClick={() => setRole('student')}
            >
              Student
            </button>
            <button
              className={`ml-2 px-3 py-2 h5 font-weight-bold rounded ${role === 'trainer' ? 'bgchange text-white' : 'bg-light'}`}
              onClick={() => setRole('trainer')}
            >
              Trainer
            </button>
          </div>

          <form onSubmit={handleSignup}>
            <div className='mb-3'>
              <label className='form-label text-black'>First Name</label>
              <input
                type='text'
                name='first_name'
                value={registerValues.first_name}
                onChange={handleRegisterChange}
                className='form-control'
                placeholder='Enter your First Name'
                required
                minLength={2}
                maxLength={40}
              />
              {errors.first_name && <p className="text-danger text-xs">{errors.first_name}</p>}
            </div>
            <div className='mb-3'>
              <label className='form-label text-black'>Last Name</label>
              <input
                type='text'
                name='last_name'
                value={registerValues.last_name}
                onChange={handleRegisterChange}
                className='form-control'
                placeholder='Enter your Last Name'
                required
                minLength={2}
                maxLength={40}
              />
              {errors.last_name && <p className="text-danger text-xs">{errors.last_name}</p>}
            </div>
            <div className='mb-3'>
              <label className='form-label text-black'>Email ID</label>
              <input
                type='email'
                name='email'
                value={registerValues.email}
                onChange={handleRegisterChange}
                className='form-control'
                placeholder='Enter your email ID'
                required
              />
              {errors.email && <p className="text-danger text-xs">{errors.email}</p>}
            </div>
            <div className='mb-3'>
              <label className='form-label text-black'>Phone Number</label>
              <input
                type='number'
                name='phone'
                value={registerValues.phone}
                onChange={handleRegisterChange}
                className='form-control'
                placeholder='Enter your phone number'
              />
              {errors.phone && <p className="text-danger text-xs">{errors.phone}</p>}
            </div>
            <div className='mb-3'>
              <label className='form-label text-black'>Password</label>
              <input
                type='password'
                name='password'
                value={registerValues.password}
                onChange={handleRegisterChange}
                className='form-control'
                placeholder='Enter your password'
                required
                minLength={6}
                maxLength={12}
              />
              {errors.password && <p className="text-danger text-xs">{errors.password}</p>}
            </div>
            {/* <div className='mb-3'>
              <label className='form-label text-black'>Country</label>
              <select
                name='country_id'
                value={registerValues.country_id}
                onChange={handleRegisterChange}
                className='form-select'
              >
                <option value=''>Select Country</option>
                {countries && countries.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
              {errors.country_id && <p className="text-danger text-xs">{errors.country_id}</p>}
            </div>
            <div className='mb-3'>
              <label className='form-label text-black'>State</label>
              <select
                name='state_id'
                value={registerValues.state_id}
                onChange={handleRegisterChange}
                className='form-select'
              >
                <option value=''>Select State</option>
                {states && states.map((state) => (
                  <option key={state.id} value={state.id}>
                    {state.name}
                  </option>
                ))}
              </select>
              {errors.state_id && <p className="text-danger text-xs">{errors.state_id}</p>}
            </div>
            <div className='mb-3'>
              <label className='form-label text-black'>City</label>
              <select
                name='city_id'
                value={registerValues.city_id}
                onChange={handleRegisterChange}
                className='form-select'
              >
                <option value=''>Select City</option>
                {cities && cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
              {errors.city_id && <p className="text-danger text-xs">{errors.city_id}</p>}
            </div>

            {role === 'student' && (
              <div className='mb-3'>
                <label className='form-label text-black'>Qualification</label>
                <select
                  name='qualification_id'
                  value={registerValues.qualification_id}
                  onChange={handleRegisterChange}
                  className='form-select'
                >
                  <option value=''>Select Qualification</option>
                  {qualifications && qualifications.map((qualification) => (
                    <option key={qualification.id} value={qualification.id}>
                      {qualification.name}
                    </option>
                  ))}
                </select>
                {errors.qualification_id && <p className="text-danger text-xs">{errors.qualification_id}</p>}
              </div>
            )} */}

            <button type='submit' className='w-100 py-2 px-3 bgchange text-white h4 font-weight-bold rounded'>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
