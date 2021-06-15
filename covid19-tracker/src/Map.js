import React from "react";
import "./Map.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

function Map() {
  return (
    <div className="map">
      <MapContainer>
        <TileLayer
          url="https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenstreetMap</a> contributers'
        />
      </MapContainer>
    </div>
  );
}

export default Map;
