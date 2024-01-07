import React, { useState } from 'react';
import './Banner.css';

export const Banner = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    const promoCode = 'PROMO20';
    navigator.clipboard.writeText(promoCode);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 10000);
  };

  return (
    <div className="promo-banner" onClick={handleCopyClick}>
      <p>
        Get 20% off your order with code:{' '}
        <span className="promo-code" >
          PROMO20
        </span>
      </p>
      {isCopied && <div className="notification">Promo code copied!</div>}
    </div>
  );
};

