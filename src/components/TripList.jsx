import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "./TripList.css";

export default function TripList() {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data: trips, isPending, error } = useFetch(url, { type: "GET" });

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      {url === "http://localhost:3000/trips" && <h3>Showing All Trips</h3>}
      {url === "http://localhost:3000/trips?loc=America" && (
        <h3>Showing American Trips</h3>
      )}
      {url === "http://localhost:3000/trips?loc=Europe" && (
        <h3>Showing European Trips</h3>
      )}
      <div className="filters">
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All Trips
        </button>
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=America")}>
          American Trips
        </button>
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=Europe")}>
          European Trips
        </button>
      </div>
      {isPending && <h3>Loading Trips...</h3>}
      {error && <h3>{error}</h3>}
      <ul>
        {trips &&
          trips.map((trip) => (
            <li key={trip.id}>
              <h3>{trip.title}</h3>
              <p>{trip.price}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
