import React, { Component } from "react";
import axios from "axios";
// Custom components
import ListNews from "../Component/ListNews";
import Navigation from "../Component/navigation";

// News API
const apiKey = "44687f6f58184f6385947cb55a41ac62";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?country=id&apiKey=" + apiKey;

class NewsCategory extends Component {
  state = {
    listNews: [],
    isLoading: true,
    search: ""
  };
  componentDidMount = async () => {
    console.warn("cek this di component did mount", this);

    this.requestNewsCategory();
  };

  requestNewsCategory = async () => {
    console.warn("cek props pada request category", this.props);

    const paramCategory = await this.props.match.params.category;
    // console.warn("cek param", paramCategory);

    const self = this;
    await axios
      .get(urlHeadline + "&category=" + paramCategory)
      .then(function(response) {
        self.setState({ listNews: response.data.articles, isLoading: false });
        // handle success
      })
      .catch(function(error) {
        self.setState({ isLoading: false });
        // handle error
        console.log(error);
      });
  };

  handleRouterCategoryNews = async categoryName => {
    // console.warn("cek category name", categoryName);
    // console.warn("cek props navigation", this.props);
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

    // const headlineNews = topHeadlines.map((item, key) => {
    //   return (
    //     <ListNews
    //       key={key}
    //       title={item.title}
    //       img={item.urlToImage}
    //       content={item.description}
    //       url={item.url}
    //     />
    //   );
    // });
    return (
      <React.Fragment>
        <Navigation
          doSearch={event => this.handleInputChange(event)}
          keyword={this.state.search}
          placeholder="ketik sesuatu"
          handleRouter={e => this.handleRouterCategoryNews(e)}
          // {...this.props}
          isCategoryNews={true}
        />
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

export default NewsCategory;
