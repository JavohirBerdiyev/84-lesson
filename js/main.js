// let elMoviesList = document.querySelector('.movies-list');
// let elMoviesItemTemplate = document.querySelector('#movies-item-template').content;
// let elMovieFr = document.createDocumentFragment();

// for (let movie of kinolar.slice(0, 100)) {
//   let elMovie = elMoviesItemTemplate.cloneNode(true);

//   elMovie.querySelector('.movies__title').textContent = movie.title;
//   elMovie.querySelector('.movie__year').textContent = movie.year;
//   elMovie.querySelector('.movie__ganre').textContent = movie.genres.join(', ');

//   elMovieFr.appendChild(elMovie);
// }

// elMoviesList.appendChild(elMovieFr);

// document.querySelector('.form-group').addEventListener('keyup', function (e) {
//   let max = e.target.attributes.maxlength.value;
//   let inputLength = e.target.value.length;
//   let x = (inputLength * 100) / max;
//   if (max == 100) {
//     document.querySelector('.indicator-1 span').style.width = `${x}%`;
//   } else if (max == 50) {
//     document.querySelector('.indicator-2 span').style.width = `${x}%`;
//   } else {
//     document.querySelector('.indicator-3 span').style.width = `${x}%`;
//   }
// });

const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  }
}

// const another = {};

// for (let key in circle) {
//   another[key] = circle[key];
// }
// another.radius = 2;
// console.log(circle.radius);

// const another = Object.assign({ name: 'Husan' }, circle);
// another.radius = 2;
// console.log(another);

// const another = { name: 'Husan', ...circle };

// console.log(another);

// let a = [15, 20];
// let b = [...a];
// b[0] = 20;
// console.log(a, b);