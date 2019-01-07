import React, { Component } from "react";
import "./App.css";
import movies from "./static/movies";

class movieOnline extends Component {
  render() {
    return (
      <div className="app">
        <div className="movie-header">
          <img className="movie-image" alt="movie" src={movies.image} />
          <p className="movie-name">{movies.name}</p>
        </div>

        <div className="buy-container">
          <button className="buy-button">Buy for {movies.price}</button>
        </div>

        <div className="release-info-container">
          <div className="release-info">{movies.release}</div>
          <div className="release-info">{movies.genre}</div>
        </div>

        <div className="restriction-container">
          <div className="restriction">FullHD</div>
          <div className="restriction">18+</div>
        </div>

        <div className="basic-info-container">
          <div className="basic-info">
            <div>Length</div>
            <div>Genre</div>
            <div>Director</div>
          </div>
          <div className="basic-info">
            <div>{movies.length.hour} hour {movies.length.minute} minutes</div>
            <div>{movies.genre}</div>
            <div>{movies.director}</div>
          </div>
        </div>

        <div className="rating-container">
          <div className="rating">{movies.rating}</div>
          <div className="rating-name">IMDb</div>
        </div>

        <div className="description-container">
          <div className="description-header">Description</div>
          <div className="description-text">{movies.description}</div>
        </div>
      </div>
    );
  }
}

export default movieOnline;
