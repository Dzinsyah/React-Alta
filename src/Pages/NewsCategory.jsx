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

class NewsCategory extends Component {
  state = {
    listNews: [],
    isLoading: true,
    search: ""
  };

  requestNewsCategory = async () => {
    const paramCategory = await this.props.match.params.category;

    const self = this;
    await axios
      .get(urlHeadline + "&category=" + paramCategory)
      .then(function (response) {
        self.setState({ listNews: response.data.articles, isLoading: false });
        // handle success
      })
      .catch(function (error) {
        self.setState({ isLoading: false });
        // handle error
        console.log(error);
      });
  };


  handleRouterCategoryNews = async categoryName => {
    const category = categoryName;
    await this.props.history.replace("/news-category/" + category);
    this.requestNewsCategory();
  };

  handleInputChange = e => {
    console.warn("cek e pada handle input change", e.target);
    console.warn("event", e.target.value);
    let value = e.target.value;
    this.setState({ search: value });
    this.searchNews(value);
  };

  searchNews = async keyword => {
    console.log("searchNews", keyword);
    const self = this;
    if (keyword.length > 2) {
      try {
        const response = await axios.get(
          baseUrl + "everything?q=" + keyword + "&apiKey=" + apiKey
        );
        console.log(response);
        self.setState({ listNews: response.data.articles });
      } catch (error) {
        console.error(error);
      }
    }
  };

  // componentDidMount hanya dijalankan sekali setelah Refresh page
  componentDidMount = async () => {
    this.requestNewsCategory();
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
          keyword={this.state.search}
          placeholder="ketik sesuatu"
          handleRouter={e => this.handleRouterCategoryNews(e)}
          isCategoryNews={true}
        />
        {/* Pelajari search di bawah ini sebelum yg ada di navbar/header */}
        {/* Jika sudah, silahkan ke ../Component/navigation.jsx dan uncomment fitur search */}
        <p style={{ paddingTop: "120px" }}>Type to search news here: <input onChange={(e) => this.searchNews(e.target.value)} /></p>
        <div className="headlineNews">
          {isLoading ? (
            <div style={{ textAlign: "center" }}>Loading...</div>
          ) : (
              <div>
                {/* Looping berita */}
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

export default NewsCategory;
