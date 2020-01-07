import React, { Component } from "react";
import axios from "axios";
// Custom components
import ListNews from "../Component/ListNews";
import Navigation from "../Component/navigation";

// News API
const apiKey = "44687f6f58184f6385947cb55a41ac62";
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
      .then(function(response) {
        self.setState({ listNews: response.data.articles, isLoading: false });
        // handle success
        console.warn(response.data);
        console.warn("cek this pada axios did mount", this);
        console.warn("cek self pada axios did mount", self);
      })
      .catch(function(error) {
        self.setState({ isLoading: false });
        // handle error
        console.log(error);
      });
  };

  handleInputChange = async event => {
    console.warn("cek e pada handle input change", event.target);
    console.warn("event", event.target.value);
    let value = event.target.value;
    await this.setState({ search: value });
    console.warn("cek stateinput search", this.state.search);

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
    console.warn("cek props pada news", this.props);

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
          {...this.props}
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

export default News;
