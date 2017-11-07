import _ from "lodash";
import React, { Component } from "react";
import LazyLoad from 'react-lazyload';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNumberOfPages, fetchAllMovies } from "../actions";
import MoviesBlock from "./movies_block";


/* <img src={post.images.banner} alt="Banner" style={{height:"50px",width:"auto"}}/> */
class MoviesIndexFull extends Component {
  componentDidMount() {
    this.props.fetchAllMovies();
  }

  renderMovies() {
    return _.map(this.props.movies, movie => {
      return (

            <LazyLoad height={2000} offset={20} once className="list-group-item" key={movie._id}>
              <MoviesBlock movie={movie} />
            </LazyLoad>

      );
    });
  }

  render() {
    return (
      <div>

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
    movies: state.movieGuide.allMovies
  };
}

export default connect(mapStateToProps, { fetchAllMovies })(MoviesIndexFull);
