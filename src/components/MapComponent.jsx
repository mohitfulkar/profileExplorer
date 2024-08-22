import React, { useState, useEffect } from "react";
import Map, { Marker, NavigationControl } from "react-map-gl";
import { Room } from "@mui/icons-material";
import ProgressSpinner from "../components/ProgressSpinner";

const MapComponent = ({ latitude, longitude }) => {
  const [viewPort, setViewPort] = useState({
    longitude: -70.9,
    latitude: 42.35,
    zoom: 14,
  });
  const [loading, setLoading] = useState(true);

  const token = import.meta.env.VITE_MAP_ACCESS_API;
  console.log(token)

  useEffect(() => {
    setViewPort((prevViewPort) => ({
      ...prevViewPort,
      longitude: longitude,
      latitude: latitude,
    }));
  }, [latitude, longitude]);

  const handleMapLoad = () => {
    setLoading(false);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "600px",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        position: "relative", // Ensure the container is positioned relative
        marginTop: "20px",
      }}
    >
      {loading && (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "0",
            left: "0",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            borderRadius: "8px",
            zIndex: "10",
          }}
        >
          <ProgressSpinner />
        </div>
      )}
      <Map
        {...viewPort}
        mapboxAccessToken={token}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        onLoad={handleMapLoad}
        onMove={(evt) =>
          setViewPort({
            longitude: evt.viewState.longitude,
            latitude: evt.viewState.latitude,
            zoom: evt.viewState.zoom,
          })
        }
      >
        <NavigationControl position="top-right" />
        <Marker latitude={latitude} longitude={longitude}>
          <Room style={{ color: "red", fontSize: "30px" }} />
        </Marker>
      </Map>
    </div>
  );
};

export default MapComponent;
