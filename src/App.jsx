import { useEffect, useState } from "react";
import NewsLatter from "./Component/body/newsLatter/NewsLatter";
import Players from "./Component/body/players/Players";
import Footer from "./Component/footer/footer";
import Banner from "./Component/header/banner/Banner";
import Navbar from "./Component/header/navbar/Navbar";

function App() {
  // states
  const [players, setPlayers] = useState([]);
  const [coin, setCoin] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  // fetch players data
  useEffect(() => {
    fetch("Players.json")
      .then((response) => response.json())
      .then((data) => setPlayers(data))
      .catch((error) => {
        console.error("Error fetching players:", error);
      });
  }, []);

  // -----------functions-----------

  // Add 1 million coins
  const addCoin = () => {
    const newCoin = coin + 1_000_000;
    setCoin(newCoin);
  };

  // Subtract coins based on player price
  const subtractCoin = (price) => {
    const newCoin = coin - price;
    if (newCoin >= 0) {
      setCoin(newCoin);
    } else {
      alert("You don't have enough coins to subtract.");
    }
  };

  // Add selected player to the list
  const addSelectedPlayer = (player) => {
    // Check if player is already selected
    const alreadySelected = selectedPlayers.some((p) => p.id === player.id);
    if (alreadySelected) {
      return;
    }
    if (selectedPlayers.length < 6) {
      setSelectedPlayers([...selectedPlayers, player]);
      subtractCoin(player.price);
    } else {
      alert("You can only select up to 6 players.");
    }
  };

  // app render
  return (
    <>
      <div className="container max-w-7xl mx-auto">
        <div className="sticky top-0 z-50 bg-white md:px-5">
          <Navbar coin={coin} />
        </div>
        <div className="px-5">
          <Banner addCoin={addCoin} />
          <Players
            key={players.id}
            players={players}
            addSelectedPlayer={addSelectedPlayer}
            selectedPlayers={selectedPlayers}
          />
          <NewsLatter />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
