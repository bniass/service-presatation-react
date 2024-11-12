import React from "react";
import userImage from "./images/user.jpeg"; // Assumez que l'image est dans le dossier `public/images`

export function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div className="flex items-center space-x-4">
        <img src={userImage} alt="Profil" className="w-10 h-10 rounded-full" />
        <span className="text-gray-800 font-medium">Nom Utilisateur</span>
      </div>
    </header>
  );
}