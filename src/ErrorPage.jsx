import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import NavBar from './NavBar'; // Replace with the actual path to your NavBar component

function ErrorPage() {
    return (
        <div>
            <NavBar />
            <div style={{ textAlign: 'center', padding: '20px' }}>
                <h1>Oops! Something went wrong.</h1>
                <Link to="/">Go back to the home page</Link>
            </div>
        </div>
    );
}

export default ErrorPage;
