import React from "react";
import Trending from "./Trending";
import Markets from "./Markets";

const CryptoHome = () => {
  return (
    <div className="max-w-5xl mx-auto px-2">
      <Trending />
      <Markets />
    </div>
  );
};

export default CryptoHome;
