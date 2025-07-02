import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import { getCryptoByName } from "../api/cryptoApi";
import type { Crypto } from "../types/crypto";
import Header from "../components/Header";
import CryptoCard from "../components/CryptoCard";
import Loader from "../components/Loader";
import FeaturedCryptos from "../components/FeaturedCryptos";

const Home: React.FC = () => {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setLoading(true);
    const result = await getCryptoByName(query);
    setCryptos(result);
    setLoading(false);
  };

  return (
    <div className="container">
      <Header/>
      <SearchBar onSearch={handleSearch} />

      {loading && <Loader />}

      <div className="crypto-list">
        {cryptos.length === 0 && !loading && (
          <p>No se encontraron resultados. Intenta buscar una criptomoneda válida.</p>
        )}

        {cryptos.map((crypto) => (
          <CryptoCard key={crypto.id} crypto={crypto} />
        ))}
      </div>

      <FeaturedCryptos />
    </div>
  );
};

export default Home;
