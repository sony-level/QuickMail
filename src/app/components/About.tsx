import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-container p-5 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">À propos de Quick Mail</h1>
      <p className="text-base text-gray-700">
        Quick Mail est un service de messagerie temporaire qui vous permet de créer une adresse email aléatoire et de recevoir des messages.
        C&apos;est parfait pour s&apos;inscrire sur des sites web qui nécessitent une vérification par email mais vous ne voulez pas utiliser votre adresse email personnelle.
      </p>
      <p className="text-base text-gray-700 mt-4">
        Notez que ces adresses email sont temporaires et que la boîte de réception sera périodiquement effacée. Veuillez ne pas utiliser ce service pour des communications sensibles ou importantes.
      </p>
    </div>
  );
};

export default About;
