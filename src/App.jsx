import { useEffect, useState } from "react";
import NewsLatter from "./Component/body/newsLatter/NewsLatter";
import Players from "./Component/body/players/Players";
import Footer from "./Component/footer/Footer";
import Banner from "./Component/header/banner/Banner";
import Navbar from "./Component/header/navbar/Navbar";
import SelectedPlayers from "./Component/body/selectedPlayers/SelectedPlayers";

function App() {
  // states
  const [players, setPlayers] = useState([]);
  const [coin, setCoin] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [isActive, setIsActive] = useState({
    available: true,
    selected: false,
  });

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
    setCoin((coin) => coin + 1_000_000);
  };

  // Subtract coins based on player price
  const subtractCoin = (price) => {
    setCoin((coin) => (coin - price >= 0 ? coin - price : coin));
  };

  // Add selected player to the list
  const addSelectedPlayer = (player) => {
    // Check if player is already selected
    const alreadySelected = selectedPlayers.some((p) => p.id === player.id);
    if (alreadySelected) {
      return;
    }
    if (selectedPlayers.length >= 6) {
      alert("You can only select up to 6 players.");
      return;
    }
    if (coin < player.price) {
      alert("You don't have enough coins to buy this player.");
      return;
    }
    setSelectedPlayers((selectedPlayers) => [...selectedPlayers, player]);
    subtractCoin(player.price);
  };

  // Remove selected player from the list
  const removeSelectedPlayer = (playerId) => {
    setSelectedPlayers((selectedPlayers) =>
      selectedPlayers.filter((player) => player.id !== playerId)
    );
    const removedPlayer = selectedPlayers.find(
      (player) => player.id === playerId
    );
    if (removedPlayer) {
      setCoin((coin) => coin + parseInt(removedPlayer.price));
    }
  };

  // Toggle active state
  const toggleActiveState = (state) => {
    if (state === "available") {
      setIsActive({ available: true, selected: false });
    } else if (state === "selected") {
      setIsActive({ available: false, selected: true });
    }
  };

  // app render
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar coin={coin} />
      </div>
      <div className="container max-w-7xl mx-auto">
        <div className="px-5">
          <Banner addCoin={addCoin} />
          <Players
            key={players.id}
            players={players}
            isActive={isActive}
            selectedPlayers={selectedPlayers}
            toggleActiveState={toggleActiveState}
            addSelectedPlayer={addSelectedPlayer}
            removeSelectedPlayer={removeSelectedPlayer}
          />
          <NewsLatter />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
