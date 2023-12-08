import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import "./ErrorPage.css";


function ErrorPage() {
  return (
    <div>
      <NavBar />
      <div className="error-content">
        <h1>Oops! Something went wrong.</h1>
        <br></br>
      </div>
      <div className='link'>
      <Link to="/" >
          Go back to the home page
        </Link>
        </div>
    </div>
  );
}

export default ErrorPage;

