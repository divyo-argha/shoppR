import React from "react";

const Info = () => {
  return (
    <section className="flex justify-around items-center px-20">
      <img
        src={"/ui-images/walking.gif"}
        className="block px-12"
        alt="walking gif"
      />
      <p className="px-12">
        <span className="bg-purple-400 font-bold text-white rounded p-4 inline-block">
          Welcome to weBuy
        </span>
        <br />
        <b>Discover Endless Shopping Delight at<br></br>
        <u>We-Buy! </u></b>
        <br></br><br></br>
        <i>
          Step into a world of curated trends and timeless classics at We-Buy. 
          Your ultimate online shopping destination for top-quality products. 
          Explore fashion, electronics, home essentials, and more with ease. 
          Join a vibrant community, unlock exclusive offers, and experience shopping redefined. 
          Welcome to We-Buy - where satisfaction meets style!
        </i>
      </p>
    </section>
  );
};

export default Info;
