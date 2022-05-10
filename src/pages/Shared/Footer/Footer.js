import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
       <footer  className='text-center bg-secondary mt-5 p-3'>
           <p className='text-light'><small>Copyright &copy; {year}</small></p>
       </footer>
    );
};

export default Footer;