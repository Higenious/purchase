var products = require('../models/products');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var productss = [

    new products({
      imagePath : 'https://udemy-images.udemy.com/course/750x422/520264_b1b8_4.jpg',
      title     : 'Angular js',
      description : 'web technology',
      price     : 10  }),

    new products({
        imagePath : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCHqdPjfs5ZuF6DnmYycbDLlZ4j0z8kG44sNBHbvYXyiIBgpcy',
        title     : 'Geeta',
        description : 'scripture',
        price     : 100  }),

    new products({
        imagePath : 'http://www.techjini.com/wp-content/uploads/2017/01/nodejs-logo.png',
        title     : 'node js',
        description : 'technology',
        price     :  50000  }),


    new products({
        imagePath : 'http://www.techjini.com/wp-content/uploads/2017/01/nodejs-logo.png',
        title     : 'iphone 7',
        description : 'iphone 7 nokia samsung nothing is good only messages though post',
        price     :  50000  }),



    new products({
        imagePath : 'https://www.desiretrees.in/wp-content/uploads/2017/01/Bahubali-2-Posters.jpg',
        title     : 'bahubali1 is good movi must watch',
        description: 'techn',
        price     :  5000  }),


    new products({
        imagePath : 'https://www.desiretrees.in/wp-content/uploads/2017/01/Bahubali-2-Posters.jpg',
        title     : 'babhbali2',
        description: 'bahubali2  is guid movi must watch. actor are amazing',
        price     :  5000  })

];

var done = 0;

for(var i=0; i<productss.length; i++){
    productss[i].save(function (err, result) {
        done++;
        if(done === productss.length){
            exit();
        }

    });
}

function exit() {
    mongoose.disconnect();

}