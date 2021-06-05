const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })

    .then(() => {
        console.log('connection open!');
    })
    .catch((e) => {
        console.log('oh no error');
        console.log(e);
    })


const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);
// const Dangal = new Movie({ title: 'Dangal', year: 2016, score: 9.5, rating: 'P' });

// Movie.insertMany([
//     { title: 'Sultan', year: 2015, rating: 'R', score: 9.5 },
//     { title: 'Dhoom', year: 2008, rating: 'Q', score: 9.4 },
//     { title: 'Race', year: 2010, rating: 'P', score: 9.2 },
//     { title: 'Bahubali', year: 2016, rating: 'P', score: 9.9 }
// ])

//     .then((data) => {
//         console.log('it worked!');
//         console.log(data);
//     })