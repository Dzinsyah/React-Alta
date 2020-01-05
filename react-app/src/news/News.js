import React, { Component } from "react";
import axios from "axios";
// Custom components
import ListNews from "./ListNews";

// News API
const apiKey = "44687f6f58184f6385947cb55a41ac62";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?country=id&apiKey=" + apiKey;

class News extends Component {
  state = {
    listNews: [],
    isLoading: true
  };
  componentDidMount = () => {
    const self = this;
    axios
      .get(urlHeadline)
      .then(function (response) {
        self.setState({ listNews: response.data.articles, isLoading: false });
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        self.setState({ isLoading: false });
        // handle error
        console.log(error);
      });
  };
  render() {
    // const news = this.state.listNews;
    const { listNews, isLoading } = this.state;
    // console.log("news", news);
    const topHeadlines = listNews.filter(item => {
      if (item.content !== null && item.image !== null) {
        return item;
      }
      return false;
    });

    const headlineNews = topHeadlines.map((item, key) => {
      return (
        <ListNews
          key={key}
          title={item.title}
          img={item.urlToImage}
          content={item.description}
          url={item.url}
        />
      );
    });

    return (
      <div className="headlineNews">
        {isLoading ? <div style={{ textAlign: "center" }}>Loading...</div> : headlineNews}
      </div>
    );
  }
}

export default News;
