import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: "",
    reviews: [],
  };

  handleInput = ({ target }) => {
    this.setState({
      searchTerm: target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //if (this.state.searchTerm === "") return;
    fetch(URL + "&query=" + this.state.searchTerm)
      .then((resp) => resp.json())
      .then((reviews) => {
        this.setState({
          reviews: reviews.results,
        });
      });
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search">Search</label>
          <input
            type="text"
            id="search"
            name="search"
            onChange={this.handleInput}
            value={this.state.query}
          />
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
