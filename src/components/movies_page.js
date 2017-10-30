import _ from "lodash";
import React, { Component } from "react";
import LazyLoad from 'react-lazyload';
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { fetchMoviesPage } from "../actions";


class MoviesPage extends Component {
  componentDidMount() {
    this.props.fetchMoviesPage(this.props.sentPage);
  }

  renderPosts() {
    return _.map(this.props.movies, movie => {
      return (
        <li className="list-group-item" key={movie._id} style={{display:"grid",gridGap: "10px",gridTemplateColumns: "50% 50%",gridTemplateRows: "10% 50% 20% 20%"}}>

              <div style={{gridColumn:"1 / 3",gridRow:"1 / 1"}}>
                {movie.title}
              </div>
              {/* <img src={movie.images.banner} alt="banner" style={{gridColumn:"1 / 1",gridRow:"2 / 5"}}/> */}
              <div style={{gridColumn:"2 / 3",gridRow:"2 / 3"}}>
                <p>{movie.synopsis}</p>
                {/* <p>Rating: {movie.rating.percentage} %</p> */}
                <p>Year of release: {movie.year}</p>
              </div>



        </li>
      );
    });
  }

  render() {
    return (
      <div>
        {this.props.sentPage}
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movieGuide.movies
  };
}

export default connect(mapStateToProps, { fetchMoviesPage })(MoviesPage);
