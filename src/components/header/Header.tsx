import React from "react";
import logoOcapiat from "@images/logo-ocapiat.png";
import LocationHover from "./Location-hover";

export default function Header() {
  return (
    <section className="header">
      <div className="pl-8 pt-20">
        <h1>Amine Djennadi</h1>
        <h1 className="flex flex-wrap items-center gap-2">
          développeur web chez
          <span className="img-icon flex rounded-xl border border-gray-300 shadow-light">
            <img className="inline-flex p-1" src={logoOcapiat} width={50} alt="Ocapiat logo" />
          </span>
          <span className="ocapiat-primary-color">Ocapiat</span>
        </h1>
        <h1>
          basé à <span className="hover-card italic text-primary-vibrant">Paris</span>, France
        </h1>
      </div>
      <div className="reference relative">
        <LocationHover></LocationHover>
      </div>
    </section>
  );
}
