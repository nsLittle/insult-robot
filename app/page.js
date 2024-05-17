import React from "react";
import Robot from "./components/robot";
import {Insults} from "./components/insults";

export default function Home() {


  
  return (
    <main>
      <h1>Insult Robot</h1>
      <Robot />
      <Insults />
    </main>
  );
}
