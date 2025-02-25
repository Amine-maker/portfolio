import React from "react";
import Stack from "./stack";

export const About: React.FC = () => {
  return (
    <section className="p-6">
      <div className="flex flex-col gap-6">
        <div className="font-semibold text-gray-500">
          <p className="mb-4">
            En ce moment, J'aime travailler avec TypeScript, React, Angular. Curieux et polyvalent,
            je suis soucieux de développer constamment mes compétences afin d'assurer mon évolution
            professionnelle et personnelle, Je suis confiant dans ma capacité à proposer des idées
            intéressantes et valorisées dans différents environnements techniques.
          </p>
          <p>
            En ce moment, J'aime travailler avec TypeScript, React, Angular. Curieux et polyvalent,
            je suis soucieux de développer constamment mes compétences afin d'assurer mon évolution
            professionnelle et personnelle, Je suis confiant dans ma capacité à proposer des idées
            intéressantes et valorisées dans différents environnements techniques. (trouver un texte
            interessant)
          </p>
        </div>
        <div className="mt-16">
          <h2 className="text-xl font-bold text-black">Ma stack</h2>
          <Stack>Test</Stack>
        </div>
      </div>
    </section>
  );
};
