import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './globale.css'; // Ensure this import is correct and the CSS file contains the necessary styles

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated()) {
            navigate('/dashboard');
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/login_check', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to login');
            }

            const responseData = await response.json();

            const token = responseData.token;

            localStorage.setItem('token', token);

            navigate('/dashboard');
        } catch (error) {
            console.error('Error:', error);
            // Handle error here
        }
    };

    return (
        <div className="register-container"> {/* Wrap the form in a div with the class "register-container" */}
            <h1>Conecter-vous</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Adresse e-mail" name="email" value={formData.email} onChange={handleChange} />
                <input type="password" placeholder="Mot de passe" name="password" value={formData.password} onChange={handleChange} />
                <button type="submit">Continue</button>
            </form>
        </div>
    );
}

const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
};

export default Login;
