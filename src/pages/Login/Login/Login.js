import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      if(loading || sending){
          return <Loading/>
      }

      if(error) {
          errorElement = <p className='text-danger'>Error: {error?.message}</p>
      }

      if(user) {
          navigate(from, {replace: true});
      }

      const handleSubmit = async (event) => {
          event.preventDefault();
          const email = emailRef.current.value;
          const password = passwordRef.current.value;

          await signInWithEmailAndPassword(email, password);
      }

      const handleReset = async() => {
          const email = emailRef.current.value;
          if(email){
              await sendPasswordResetEmail(email);
              toast('Sent email');
          }
          else{
              toast('Please enter your email address');
          }
      }
    return (
        <div className='container w-50 mx-auto mt-5'>
            <h2 className="text-success text-center mt-2">Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <Button variant="primary" type="submit" className='d-block mx-auto w-50'>
                    Login
                </Button>
            </Form>
            <p>{errorElement}</p>
            <p>New to Gym Equipment Warehouse?<Link to='/register' className='text-primary text-decoration-none'>Please Register</Link></p>
            <p>Forget Password?<span onClick={handleReset} className='text-primary'>Reset Password</span></p>
        </div>
    );
};

export default Login;