import _ from "lodash";
import React, { Component } from "react";
import LazyLoad from 'react-lazyload';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNumberOfPages, fetchAllMovies, toggleFilter } from "../actions";
import MoviesBlock from "./movies_block";

class MoviesIndexFull extends Component {

  componentDidMount() {
    this.props.fetchAllMovies();
  }

  renderMovies() {
    let allMovies, filteredMovies;
    if(this.props.movies){
      allMovies = this.props.movies;
      filteredMovies = allMovies.slice(0,300);
      return _.map(filteredMovies, (movie,idx) => {
        return (
          <div>

          <p>{idx}</p>
          <LazyLoad height={2000} offset={-20} once  debounce={50} className="list-group-item" key={Math.random()}>
            <MoviesBlock movie={movie} />
          </LazyLoad>
        </div>

        );
      });
    }
  }

  toggleSortOrder() {
    this.props.toggleFilter(this.props.sortOrder);
  }


  render() {
    return (
      <div>
        <div className="text-xs-right">
          <button className="btn btn-primary" onClick={() => {this.toggleSortOrder()}}>
            Reorder
          </button>
        </div>
        <h3>Movies</h3>
        <ul className="list-group">
          {this.renderMovies()}
        </ul>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    movies: state.movieGuide.allMovies,
    sortOrder: state.movieGuide.sortOrder
  };
}

export default connect(mapStateToProps, { fetchAllMovies, toggleFilter })(MoviesIndexFull);
