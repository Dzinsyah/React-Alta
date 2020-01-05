import React, { Component } from "react";
// App styles
import "./App.css";
// Custom components
import Navigation from "./Components/Navigation";
import Search from "./Components/Search";
import ListNews from "./Components/ListNews";

// dummy data
import az from "./images/az.jpg";
const n_title = "Judul beritanya apa aja";
const n_content = `Contoh single content. Ne iusto graeci aliquid qui. Eu
          nam dicit nonumy eirmod, no alii unum sit, similique reprehendunt at per. Vide labitur
          delectus per ei, id exerci posidonium sea, eripuit epicuri suscipit cum at. Pri no
          vulputate reformidans. Quo meis ceteros ex, no dictas persecuti definitionem est, his an
          primis aperiam docendi. Fugit exerci quo eu, cu mea tamquam tibique suscipiantur.`;
const n_title2 = "2 Judul beritanya apa aja";
const n_content2 = `2 Contoh single content. Ne iusto graeci aliquid qui. Eu
          nam dicit nonumy eirmod, no alii unum sit, similique reprehendunt at per. Vide labitur
          delectus per ei, id exerci posidonium sea, eripuit epicuri suscipit cum at. Pri no
          vulputate reformidans. Quo meis ceteros ex, no dictas persecuti definitionem est, his an
          primis aperiam docendi`;
// dummy data

class App extends Component {
  render() {
    console.log("Window", window.location);
    return (
      <div className="App">
        <Navigation />
        <Search title="Cari" placeholder="type keyword.." />
        <ListNews title={n_title} img={az} content={n_content} />
        <ListNews title={n_title2} img={az} content={n_content2} />
      </div>
    );
  }
}

export default App;
