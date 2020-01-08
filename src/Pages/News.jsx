import React, { Component } from "react";
import axios from "axios";
// Custom components
import ListNews from "../Component/ListNews";
import Navigation from "../Component/navigation";

// ==========================
// Halaman Ini untuk menampilkan Top Headline
// sebagai nilai default untuk listNews
// ==========================


// ==========================
// News API (use one which work)
// const apiKey = "44687f6f58184f6385947cb55a41ac62";
const apiKey = "2855be0bd75a436cb0f78dd5e74313cf";
// ==========================
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?country=id&apiKey=" + apiKey;

class News extends Component {
  state = {
    listNews: [],
    isLoading: true,
    search: ""
  };
  componentDidMount = () => {
    const self = this;
    axios
      .get(urlHeadline)
      .then(function (response) {
        self.setState({ listNews: response.data.articles, isLoading: false });
      })
      .catch(function (error) {
        self.setState({ isLoading: false });
      });
  };

  handleInputChange = async event => {
    let value = event.target.value;
    await this.setState({ search: value });
    this.searchNews(value);
  };

  searchNews = async keyword => {
    const self = this;
    if (keyword.length > 2) {
      try {
        const response = await axios.get(
          baseUrl + "everything?q=" + keyword + "&apiKey=" + apiKey
        );
        self.setState({ listNews: response.data.articles });
      } catch (error) {
        console.error(error);
      }
    }
  };

  render() {
    const { listNews, isLoading } = this.state;
    const topHeadlines = listNews.filter(item => {
      if (item.content !== null && item.image !== null) {
        return item;
      }
      return false;
    });

    return (
      <React.Fragment>
        <Navigation
          doSearch={event => this.handleInputChange(event)}
          placeholder="ketik sesuatu"
          {...this.props}
        />
        {/* Pelajari search di bawah ini sebelum yg ada di navbar/header */}
        {/* Jika sudah, silahkan ke ../Component/navigation.jsx dan uncomment fitur search */}
        <p style={{ paddingTop: "120px" }}>Type to search news here: <input onChange={(e) => this.searchNews(e.target.value)} /></p>
        <div className="headlineNews">
          {isLoading ? (
            <div style={{ textAlign: "center" }}>Loading...</div>
          ) : (
              // headlineNews
              <div>
                {topHeadlines.map((item, key) => (
                  <ListNews
                    key={key}
                    title={item.title}
                    img={item.urlToImage}
                    content={item.description}
                    url={item.url}
                  />
                ))}
              </div>
            )}
        </div>
      </React.Fragment>
    );
  }
}

export default News;
