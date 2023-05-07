import { useState } from "react";

import { invoke } from "@tauri-apps/api/tauri";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "./App.css";
import { Map } from "./components/map/map";

function App() {
  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  return (
    <div>
      <Map />
    </div>
  );
}

export default App;
