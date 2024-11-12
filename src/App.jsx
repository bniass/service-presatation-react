import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LoginForm } from './components/LoginForm';
import { FormCreateCompte } from './components/FormCreateCompte';
import { Layout } from './components/Layout';
import { Depot } from './components/Depot';
import { FormCreateService } from './components/FormCreateService';
import { ServiceList } from './components/ServiceList';
import { Dashboard } from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirection de la route / vers /login */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Route pour le login sans Layout */}
        <Route path="/login" element={<LoginForm />} />

        {/* Routes pour le Layout (avec Sidebar, Header, etc.) */}
        <Route path="/" element={<Layout />}>
          <Route path="/accueil" element={<Dashboard />} />
          <Route path="/createcompte" element={<FormCreateCompte />} />
          <Route path="/depot" element={<Depot />} />
          <Route path="/creerservice" element={<FormCreateService />} />
          <Route path="/servicelist" element={<ServiceList />} />
          {/* Autres routes */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
