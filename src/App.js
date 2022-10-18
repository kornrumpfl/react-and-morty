import "./App.css";
import Header from "./components/header";
import Card from "./components/card";
import Navbar from "./components/navbar";
import styled from "styled-components";
import { useEffect, useState } from "react";

function App() {
  const [dataFetched, setDataFetched] = useState([]);

  useEffect(() => {
    loadFetchedData();

    async function loadFetchedData() {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character`
        );
        const data = await response.json();
        setDataFetched(data.results);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <div>
      <Header />
      {dataFetched.map((character) => (
        <Card
          name={character.name}
          src={character.image}
          status={character.status}
          key={character.id}
        />
      ))}
      <Navbar />
    </div>
  );
}

export default App;
