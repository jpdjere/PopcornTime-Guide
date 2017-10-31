/*

let allMovies = [];
const getAllMovies = () => {
  return new Promise(
    (resolve, reject) => {
      axios.get('https://tv-v2.api-fetch.website/movies').then((response) => {
        console.log(response.data);
        let numberOfPages = response.data.length;
        let pageNumberArray = [...Array(numberOfPages).keys()];
        //Borro el 0 en el primer lugar
        pageNumberArray.shift();
        console.log("pageNumberArray: ",pageNumberArray);

        let requests = pageNumberArray.map((item) => {
          return new Promise((_resolve) => {
            asyncFunction(item, _resolve);
          });
        })

        Promise.all(requests).then(() => {
          console.log('done');console.log(allMovies);
          resolve(allMovies);
        })

      }).catch((e) => {
        console.log(e);
      })

    }
  )
}

function asyncFunction (item, cb) {
  setTimeout(() => {

    axios.get(`https://tv-v2.api-fetch.website/movies/${item}`).then((response) => {

      if(!response){
        console.log(`Error on item ${item}.`);
      }
      // console.log("res:",response.data)
      let pageMovies = response.data;
      allMovies = [...allMovies,...pageMovies];
      cb();

    }).catch((e) => {
      console.log(e);
    })

  }, 25);
}


*/
