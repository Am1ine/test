import React from 'react';
import { Link } from 'react-router-dom';
import './AdminHomepage.css'; // Import the CSS file

class AdminHomepage extends React.Component {
    render() {
        return (
            <div className="admin-homepage">
                <h1>Welcome, Admin!</h1>
                <div className="buttons-container">
                    <Link to="/administrator/manage-users">
                        <button>Manage Users</button>
                    </Link>
                    <Link to="/administrator/manage-documents">
                        <button>Manage Documents</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default AdminHomepage;
