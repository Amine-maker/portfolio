import { useRef } from "react";
import logoOcapiat from "@images/logo-ocapiat.png";
import LocationHover from "./location-hover";
import { LINK_MAPS_OPAPIAT } from "@/lib/contante";
import { ProLinks } from "@/data/links";

export default function Header() {
  const textRef = useRef(null);

  const handleRedirectToMaps = () => {
    return window.open(LINK_MAPS_OPAPIAT);
  };

  return (
    <section className="header flex flex-col gap-12">
      <div className="pl-6 pt-20">
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
          <span
            onClick={() => handleRedirectToMaps()}
            ref={textRef}
            className="hover-card relative cursor-pointer italic text-primary-600"
          >
            Paris
          </span>
          <span>, France</span>
        </h1>
      </div>
      <div className="reference">
        <LocationHover anchorElement={textRef} />
      </div>

      <div className="flex h-20 w-full items-center justify-between px-6 font-semibold">
        <div className="flex gap-8">
          {ProLinks.map((link) => {
            return (
              <div key={link.href}>
                <a className="text-black" href={link.href}>
                  {link.label}
                </a>
              </div>
            );
          })}
        </div>
        <div className="text-sm text-black">Sporify</div>
      </div>
    </section>
  );
}
