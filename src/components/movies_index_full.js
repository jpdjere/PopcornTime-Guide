import _ from "lodash";
import React, { Component } from "react";
import LazyLoad from 'react-lazyload';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNumberOfPages, fetchAllMovies } from "../actions";
import MoviesPage from "./movies_page";


/* <img src={post.images.banner} alt="Banner" style={{height:"50px",width:"auto"}}/> */
class MoviesIndexFull extends Component {
  componentDidMount() {
    this.props.fetchAllMovies();
    setTimeout(function () {
      this.props.fetchAllMovies(this.props.pages);
    }, 2000);
  }

  renderMovies() {
    return _.map(this.props.pages, page => {
      return (

            <LazyLoad height={2000} offset={-100} once className="list-group-item" key={page}>
              <MoviesPage sentPage={page} />
            </LazyLoad>

      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <button className="btn btn-primary" onClick={() => {
            // Recordar que fetchAllMovies necesita the las pages porque asi funciona la API
            this.props.fetchAllMovies(this.props.pages);
          }}>
            Get all movies on state
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
    movies: state.movieGuide.allMovies
  };
}

export default connect(mapStateToProps, { fetchAllMovies })(MoviesIndexFull);
