import apiClient from './apiClient';

export const creerCompte = async (data) => {
  console.log(data);

  try {
    const response = await apiClient.post('/api/compte', data);
    return response.data; // Retourne les données de la réponse de l'API
  } catch (error) {
    console.error('Error creating compte:', error.response || error.message);
    throw error; // Lancer l'erreur pour la capturer dans le composant
  }
};
