import React from 'react';
import LazyLoad from 'react-lazyload';

const LazyLoadComponent = () => {
  return (
    <div className="list">
      <LazyLoad height={300}>
        <img src="http://image.tmdb.org/t/p/w500/2wIlaNwUPx5C8d3C7ZuB5lQ66T.jpg" />
        {/* /*
                                  Lazy loading images is supported out of box,
                                  no extra config needed, set `height` for better
                                  experience
                                 */ }
      </LazyLoad>
      <LazyLoad height={300}>
                                {/* /* Once this component is loaded, LazyLoad will
                                 not care about it anymore, set this to `true`
                                 if you're concerned about improving performance */ }
        <img src="http://image.tmdb.org/t/p/w500/2wIlaNwUPx5C8d3C7ZuB5lQ66T.jpg" />
      </LazyLoad>
      <LazyLoad height={300}>
                              {/* /* This component will be loaded when it's top
                                 edge is 100px from viewport. It's useful to
                                 make user ignorant about lazy load effect. */ }
        <img src="http://image.tmdb.org/t/p/w500/2wIlaNwUPx5C8d3C7ZuB5lQ66T.jpg" />
      </LazyLoad>
      <LazyLoad height={300}>
        <img src="http://image.tmdb.org/t/p/w500/2wIlaNwUPx5C8d3C7ZuB5lQ66T.jpg" />
      </LazyLoad>
      <LazyLoad height={300}>
        <img src="http://image.tmdb.org/t/p/w500/2wIlaNwUPx5C8d3C7ZuB5lQ66T.jpg" />
      </LazyLoad>
      <LazyLoad height={300}>
        <img src="http://image.tmdb.org/t/p/w500/2wIlaNwUPx5C8d3C7ZuB5lQ66T.jpg" />
      </LazyLoad>
      <LazyLoad height={300}>
        <img src="http://image.tmdb.org/t/p/w500/2wIlaNwUPx5C8d3C7ZuB5lQ66T.jpg" />
      </LazyLoad>
      <LazyLoad height={300}>
        <img src="http://image.tmdb.org/t/p/w500/2wIlaNwUPx5C8d3C7ZuB5lQ66T.jpg" />
      </LazyLoad>
      <LazyLoad height={300}>
        <img src="http://image.tmdb.org/t/p/w500/2wIlaNwUPx5C8d3C7ZuB5lQ66T.jpg" />
      </LazyLoad>
      <LazyLoad height={300}>
        <img src="http://image.tmdb.org/t/p/w500/2wIlaNwUPx5C8d3C7ZuB5lQ66T.jpg" />
      </LazyLoad>
      <LazyLoad height={300}>
        <img src="http://image.tmdb.org/t/p/w500/2wIlaNwUPx5C8d3C7ZuB5lQ66T.jpg" />
      </LazyLoad>
      <LazyLoad height={300}>
        <img src="http://image.tmdb.org/t/p/w500/2wIlaNwUPx5C8d3C7ZuB5lQ66T.jpg" />
      </LazyLoad>
      <LazyLoad height={300}>
        <img src="http://image.tmdb.org/t/p/w500/2wIlaNwUPx5C8d3C7ZuB5lQ66T.jpg" />
      </LazyLoad>
      <LazyLoad height={300}>
        <img src="http://image.tmdb.org/t/p/w500/2wIlaNwUPx5C8d3C7ZuB5lQ66T.jpg" />
      </LazyLoad>
      <LazyLoad height={300}>
        <img src="http://image.tmdb.org/t/p/w500/2wIlaNwUPx5C8d3C7ZuB5lQ66T.jpg" />
      </LazyLoad>
      <LazyLoad height={300}>
        <img src="http://image.tmdb.org/t/p/w500/2wIlaNwUPx5C8d3C7ZuB5lQ66T.jpg" />
      </LazyLoad>
      <LazyLoad height={300}>
        <img src="http://image.tmdb.org/t/p/w500/2wIlaNwUPx5C8d3C7ZuB5lQ66T.jpg" />
      </LazyLoad>
      <LazyLoad height={300}>
        <img src="http://image.tmdb.org/t/p/w500/2wIlaNwUPx5C8d3C7ZuB5lQ66T.jpg" />
      </LazyLoad>
      <LazyLoad height={300}>
        <img src="http://image.tmdb.org/t/p/w500/2wIlaNwUPx5C8d3C7ZuB5lQ66T.jpg" />
      </LazyLoad>
    </div>
  );
};

export default LazyLoadComponent;
