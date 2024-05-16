import React from "react";

export default function Robot() {
  const imageUrl = 'https://robohash.org/shit-talk-cat.png?set=any?bgset=bg2';
  // const change = set1 through set4
  return (
    <img src={imageUrl} alt='robot' />
  );
};