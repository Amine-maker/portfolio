import React, { useEffect, useState } from "react";
import "@styles/location-hover.scss";
import { MapPin } from "lucide-react";

type LocationHoverProps = {
  anchorElement: React.RefObject<HTMLElement>;
};

const LocationHover: React.FC<LocationHoverProps> = ({ anchorElement }) => {
  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    const updatePosition = () => {
      if (anchorElement.current) {
        const anchorRect = anchorElement.current.getBoundingClientRect();
        setPosition({
          top: anchorRect.y - 100,
          left: anchorRect.x - 35,
        });
      }
    };
    updatePosition();
    window.addEventListener("resize", updatePosition);

    return () => window.removeEventListener("resize", updatePosition);
  }, [anchorElement]);

  return (
    <div
      className="location-card"
      style={{ top: position.top, left: position.left, position: "fixed" }}
    >
      <div className="cloud"></div>
      <div className="cloud"></div>
      <div className="cloud"></div>
      <div className="cloud"></div>
      <div className="inner-card relative">
        <div className="bg-location-card"></div>
        <div className="location absolute"></div>

        <div className="flex h-full flex-col gap-0">
          <div className="relative z-10 p-3">
            <div className="blur-item absolute"></div>
            <h2 className="title-card font-bold">Ocapiat</h2>
          </div>
          <div className="details-blur relative"></div>
          <div className="details">
            <p className="flex items-center text-card">
              <MapPin color="#355a3d" width={14} />
              Victor Hugo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationHover;

