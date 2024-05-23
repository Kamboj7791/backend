import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/data")
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>full stack app</h1>
      <p>{`DATA:${data.length}`}</p>
      {data.map((item) => {
        <div key={item.id}>
          <p>{item.name}</p>
        </div>;
      })}
    </>
  );
}

export default App;
