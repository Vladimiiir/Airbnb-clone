import { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import "mapbox-gl/dist/mapbox-gl.css";

const MapBox = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  //   Transform coordinates into required array of objects in the correct shape
  const coordinates = searchResults.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));

  // The latitude and longitude of the center of locations coordinates
  const center = getCenter(coordinates);
  console.log(setSelectedLocation(result));
  return (
    <Map
      mapStyle="mapbox://styles/vladimiiir/clgaj40m6000b01n4ria1m79q"
      mapboxAccessToken={process.env.mapbox_key}
      width="100%"
      height="100%"
      initialViewState={{
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
      }}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          {/* The markers for the airbnb properties */}
          <Marker latitude={result.lat} longitude={result.long}>
            <a
              onClick={() => {
                setSelectedLocation(result);
              }}
            >
              <p
                role="img"
                className="cursor-pointer text-2xl animate-bounce"
                aria-label="push-pin"
              >
                📌
              </p>
            </a>
          </Marker>

          {/* The popup when we click on a Marker */}
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </Map>
  );
};

export default MapBox;
