import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { loginUser } from '../services/userService';

import { ModalInfo } from './ModalInfo';


export function LoginForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState('');


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData(values => {

            return ({ ...values, [name]: value })
        })
        //console.log(formData)
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        //console.log(formData)
        try {
            const response = await loginUser({ username: formData.username, password: formData.password });
            // Traitez la réponse de votre API ici
            navigate("/createcompte");
            //console.log('Login successful:', response);
        } catch (error) {
            //console.log('Login successful:', error);
            openModal();
            setErrorMessage('An error occurred while logging in');
        }
    };

    return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <form
                    onSubmit={handleLogin}
                    className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
                >
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Connexion</h2>

                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">UserName</label>
                        <input
                            type="username"
                            id="username"
                            name="username"
                            value={formData.username || ""}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Entrez votre username"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700">Mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password || ""}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Entrez votre mot de passe"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
                    >
                        Se connecter
                    </button>

                    <p className="mt-4 text-sm text-center text-gray-600">
                        Pas encore de compte ? <a href="#" className="text-blue-500 hover:underline">Inscrivez-vous</a>
                    </p>
                </form>
                <ModalInfo isOpen={isModalOpen} onClose={closeModal} title="AUTHENTIFICATION">
                    <p>Login ou password incorrecte!!!</p>
                    <button
                        onClick={closeModal}
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Fermer
                    </button>
                </ModalInfo>
            </div>
    );
}
