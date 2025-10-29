import React from "react";

const CITIES = ["New York", "London", "Tokyo", "Tirana"];

export default function CityList({ selectedCity, onSelect }) {
  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", margin: "12px 0 24px" }}>
      {CITIES.map((city) => (
        <button
          key={city}
          onClick={() => onSelect(city)}
          style={{
            padding: "8px 12px",
            borderRadius: 8,
            border: "1px solid #ddd",
            background: selectedCity === city ? "#eef6ff" : "#fff",
            cursor: "pointer",
          }}
        >
          {city}
        </button>
      ))}
    </div>
  );
}
