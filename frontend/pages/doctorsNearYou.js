import React, { useState, useEffect } from 'react';

const LocationAndHospitals = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [nearbyHospitals, setNearbyHospitals] = useState([]);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            setError(error.message);
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
      }
    };

    getLocation();
  }, []);

  useEffect(() => {
    const fetchNearbyHospitals = async () => {
      if (latitude && longitude) {
        console.log(latitude, longitude)
        try {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=100000&type=hospital&key=${process.env.GOOGLE_API_KEY}`
          );
          const data = await response.json();
          setNearbyHospitals(data.results);
          console.log("\n\n\n\n\n\n", data.results)
        } catch (error) {
          setError('Error fetching nearby hospitals');
        }
      }
    };

    fetchNearbyHospitals();
  }, [latitude, longitude]);

  return (
    <div>
      <h2>User's Location:</h2>
      {latitude && longitude ? (
        <p>
          Latitude: {latitude}, Longitude: {longitude}
        </p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Loading...</p>
      )}

      <h2>Nearby Hospitals:</h2>
      {nearbyHospitals.length > 0 ? (
        <ul>
          {nearbyHospitals.map((hospital) => (
            <li key={hospital.place_id}>{hospital.name}</li>
          ))}
        </ul>
      ) : (
        <p>No nearby hospitals found</p>
      )}
    </div>
  );
};

export default LocationAndHospitals;