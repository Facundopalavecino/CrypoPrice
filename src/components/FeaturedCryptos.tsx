import React, { useEffect, useState } from "react";
import axios from "axios";
import { Crypto } from "../types/crypto";
import CryptoCard from "./CryptoCard";
import "../styles/CryptoCard.css";

const FeaturedCryptos: React.FC = () => {
  const [featured, setFeatured] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchFeaturedCryptos = async () => {
    try {
      const response = await axios.get<Crypto[]>(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "usd",
            ids: "bitcoin,ethereum,dai",
          },
        }
      );
      setFeatured(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching featured cryptos", error);
    }
  };

  useEffect(() => {
    fetchFeaturedCryptos();
  }, []);

  if (loading) return null;

  return (
    <div className="container">
      <div className="crypto-list">
        {featured.map((crypto) => (
          <CryptoCard key={crypto.id} crypto={crypto} featured/>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCryptos;
