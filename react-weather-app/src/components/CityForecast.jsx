import React, { useEffect, useRef, useState } from "react";

const weatherData = {
  NewYork: { summary: "Sunny, 25°C", details: "Clear skies throughout the day with mild temperatures." },
  London:  { summary: "Cloudy, 18°C", details: "Overcast with occasional light rain in the afternoon." },
  Tokyo:   { summary: "Rainy, 22°C", details: "Continuous rain expected throughout the day." },
};

export default function CityForecast({ city, onBack }) {
  const [loading, setLoading] = useState(true);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState("");

  const detailsRef = useRef(null);

  const keyFromCity = (name) => name.replace(/\s+/g, "");

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError("");
    setForecast(null);

    const timer = setTimeout(() => {
      if (cancelled) return;
      const key = keyFromCity(city);
      const data = weatherData[key];

      if (!data) {
        setError(`No forecast found for "${city}". Please choose one of: New York, London, Tokyo.`);
      } else {
        setForecast(data);
      }
      setLoading(false);
    }, 400);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [city]);

  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <h2 style={{ margin: 0 }}>Forecast: {city}</h2>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={onBack} style={btnStyle}>Back</button>
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        {loading && <p>Loading forecast…</p>}

        {!loading && error && (
          <div style={{
            padding: "10px 12px",
            border: "1px solid #f0c7c7",
            background: "#fff6f6",
            borderRadius: 6
          }}>
            <p style={{ color: "#b00020", margin: 0 }}>{error}</p>
          </div>
        )}

        {!loading && !error && forecast && (
          <>
            <p><strong>Summary:</strong> {forecast.summary}</p>

            <div ref={detailsRef} style={{ marginTop: 16, paddingTop: 8, borderTop: "1px dashed #ccc" }}>
              <h3 style={{ marginTop: 0 }}>Details</h3>
              <p>{forecast.details}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const btnStyle = {
  padding: "8px 10px",
  borderRadius: 8,
  border: "1px solid #ddd",
  background: "#fff",
  cursor: "pointer",
};
