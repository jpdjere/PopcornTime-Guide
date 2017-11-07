import _ from "lodash";
import React, { Component } from "react";
import LazyLoad from 'react-lazyload';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNumberOfPages, fetchAllMovies, toggleFilter } from "../actions";
import MoviesBlock from "./movies_block";


/* <img src={post.images.banner} alt="Banner" style={{height:"50px",width:"auto"}}/> */
class MoviesIndexFull extends Component {

  componentDidMount() {
    this.props.fetchAllMovies();
  }

  renderMovies() {
    return _.map(this.props.movies, movie => {
      return (

            <LazyLoad height={2000} offset={20} once  debounce={100} className="list-group-item">
              <MoviesBlock movie={movie} />
            </LazyLoad>

      );
    });
  }

  toggleSortOrder() {
    this.props.toggleFilter(this.state.sortOrder);
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
