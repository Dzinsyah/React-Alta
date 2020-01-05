import React, { Component } from "react";
import axios from "axios";
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
          delectus per ei, id exerci posidonium sea, eripuit epicuri suscipit cum at. .`;
// dummy data

// News API
const apiKey = "44687f6f58184f6385947cb55a41ac62";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?" + "country=us&" + "apiKey=" + apiKey;

class AppAjax extends Component {
  state = {
    listNews: [],
    username: "",
    isLogin: false
  };
  componentDidMount = () => {
    const self = this;
    axios
      .get(urlHeadline)
      .then(function (response) {
        self.setState({ listNews: response.data.articles });
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  render() {
    // const news = this.state.listNews;
    const { listNews, username, isLogin } = this.state;
    // console.log("news", news);
    const topHeadlines = listNews.filter(item => {
      if (item.content !== null && item.image !== null) {
        return item;
      }
    });
    return (
      <div className="App">
        <Navigation />
        <Search title="Cari" placeholder="type keyword.." />
        {topHeadlines.map((item, key) => {
          return (
            <ListNews key={key} title={item.title} img={item.urlToImage} content={item.content} />
          );
        })}
      </div>
    );
  }
}

export default AppAjax;
