import React from "react";
import logoOcapiat from "@images/logo-ocapiat.png";

export default function Header() {
  return (
    <section>
      <div className="pl-8 pt-20">
        <h1>Amine Djennadi</h1>
        <h1 className="flex items-center gap-2">
          développeur web chez
          <span className="rounded-xl border border-gray-300">
            <img className="inline-flex" src={logoOcapiat} width={40} alt="Ocapiat logo" />
          </span>
          <span className="ocapiat-primary-color">Ocapiat</span>
        </h1>
        <h1>
          basé à <span className="text-primary-vibrant italic">Paris</span>, France
        </h1>
      </div>
    </section>
  );
}
