import React, { useRef } from "react";
import logoOcapiat from "@images/logo-ocapiat.png";
import LocationHover from "./location-hover";

export default function Header() {
  const textRef = useRef(null);
  return (
    <section className="header flex flex-col gap-12">
      <div className="pl-8 pt-20">
        <h1>Amine Djennadi</h1>
        <h1 className="flex flex-wrap items-center gap-2">
          développeur web chez
          <span className="img-icon shadow-light flex rounded-xl border border-gray-300">
            <img className="inline-flex p-1" src={logoOcapiat} width={50} alt="Ocapiat logo" />
          </span>
          <span className="ocapiat-primary-color">Ocapiat</span>
        </h1>
        <h1 className="">
          basé à{" "}
          <span ref={textRef} className="hover-card relative italic text-primary-600">
            Paris
          </span>
          , France
        </h1>
      </div>
      <div className="reference">
        <LocationHover anchorElement={textRef} />
      </div>

      <div className="flex h-20 w-full items-center justify-between border border-red-500 px-6">
        <div className="flex gap-3">
          <div>
            <a href="">Linkedin</a>
          </div>
          <div>
            <a href="">Github</a>
          </div>
          <div>
            <a href="">cv</a>
          </div>
        </div>
        <div>Sporify</div>
      </div>
    </section>
  );
}
