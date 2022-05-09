import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification} from 'react-firebase-hooks/auth';
import { Link,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    let errorElement;

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [sendEmailVerification, sending] = useSendEmailVerification(auth);

      if(loading || sending){
          return <Loading/>
      }

      if(error) {
          errorElement = <p className='text-danger'>Error: {error?.message}</p>
      }

      if(user) {
          console.log(user)
      }

      const handleSubmit = async (event) => {
          event.preventDefault();
          const name = nameRef.current.value;
          const email = emailRef.current.value;
          const password = passwordRef.current.value;
          
          await createUserWithEmailAndPassword(email, password);
          await sendEmailVerification(email);
          console.log(name);
          navigate('/home')
          toast('Registration completed')
      }
    return (
        <div className='container w-50 mx-auto mt-5'>
            <h2 className="text-success text-center mt-2">Please Register</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={nameRef} type="text" placeholder="Your name"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <Button variant="primary" type="submit" className='d-block mx-auto w-50'>
                    Register
                </Button>
            </Form>
            <p>{errorElement}</p>
            <p>Already Have an account?<Link to='/login' className='text-primary text-decoration-none'>Please Login</Link></p>
            <SocialLogin/>
        </div>
    );
};

export default Register;