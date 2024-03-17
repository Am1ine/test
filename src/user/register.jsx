import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './globale.css'; // Ensure this import is correct and the CSS file contains the necessary styles

function Signup() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to register');
            }
            navigate('/login');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="register-container"> {/* Wrap the form in a div with the class "register-container" */}
            <h1>Inscrivez-vous</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nom" name="firstname" value={formData.firstname} onChange={handleChange} />
                <input type="text" placeholder="Prénom" name="lastname" value={formData.lastname} onChange={handleChange} />
                <input type="email" placeholder="Adresse e-mail" name="email" value={formData.email} onChange={handleChange} />
                <input type="password" placeholder="Mot de passe" name="password" value={formData.password} onChange={handleChange} />
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    );
}

export default Signup;
