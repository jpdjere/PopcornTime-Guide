import _ from "lodash";
import React, { Component } from "react";
import LazyLoad from 'react-lazyload';
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { fetchMoviesPage } from "../actions";


class MoviesBlock extends Component {
  componentDidMount() {

  }


  render() {
    return (
      <div>
        <li className="list-group-item" style={{display:"grid",gridGap: "10px",gridTemplateColumns: "50% 50%",gridTemplateRows: "10% 50% 20% 20%"}} key={this.props.movie._id}>

              <div style={{gridColumn:"1 / 3",gridRow:"1 / 1"}}>
                {this.props.movie.title}
              </div>
              <img src={this.props.movie.images.banner} alt="banner" style={{gridColumn:"1 / 1",gridRow:"2 / 5"}}/>
              <div style={{gridColumn:"2 / 3",gridRow:"2 / 3"}}>
                <p>{this.props.movie.synopsis}</p>
                {/* <p>Rating: {movie.rating.percentage} %</p> */}
                <p>Year of release: {this.props.movie.year}</p>
              </div>



        </li>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // movies: state.movieGuide.movies
  };
}

export default connect(mapStateToProps, { fetchMoviesPage })(MoviesBlock);
