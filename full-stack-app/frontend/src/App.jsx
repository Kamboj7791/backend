import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [names, setNames] = useState([]);
  useEffect(() => {
    axios.get("/api/names")
      .then((response) => {
        // console.log(response);
        setNames(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>full stack app</h1>
      <p>{`DATA:${names.length}`}</p>
      {names.map((item) => {
        <div key={item.id}>
          <p>{item.name}</p>
        </div>;
      })}
    </>
  );
}

export default App;
