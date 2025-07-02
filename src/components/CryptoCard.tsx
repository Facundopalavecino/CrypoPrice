import React from "react";
import type { Crypto } from "../types/crypto";
import "../styles/CryptoCard.css";

interface Props {
  crypto: Crypto;
  featured?: boolean;
}

const CryptoCard: React.FC<Props> = ({ crypto, featured }) => {
  const priceChangeClass =
    crypto.price_change_percentage_24h >= 0 ? "positive" : "negative";

  return (
    <div className="crypto-card">
      {featured && <span className="featured-badge">Featured ⭐</span>}
      <img
        src={crypto.image}
        alt={crypto.name}
        className="crypto-image"
      />
      <h2>{crypto.name}</h2>
      <p>💵 Precio: ${crypto.current_price.toLocaleString()}</p>
      <p>📊 Market Cap: ${crypto.market_cap.toLocaleString()}</p>
      <p className={priceChangeClass}>
        📈 Variación 24hs: {crypto.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>
  );
};

export default CryptoCard;
