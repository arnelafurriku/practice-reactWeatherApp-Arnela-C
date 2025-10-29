import React, { useState } from "react";
import CityList from "./components/CityList";
import CityForecast from "./components/CityForecast";

export default function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>City Weather</h1>

      {/* Step 3: City list */}
      <CityList selectedCity={selectedCity} onSelect={setSelectedCity} />

      {/* Step 4 & 5: Forecast appears when a city is selected */}
      {selectedCity && (
        <CityForecast
          city={selectedCity}
          onBack={() => setSelectedCity(null)}
        />
      )}
    </div>
  );
}
