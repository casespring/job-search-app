import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';


function ErrorPage() {
  return (
    <div className="error-page-container">
      <NavBar />
      <div className="error-content">
        <h1>Oops! Something went wrong.</h1>
        <Link to="/" className="back-link">
          Go back to the home page
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;

