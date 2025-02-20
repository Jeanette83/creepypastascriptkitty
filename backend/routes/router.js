
const express = require('express')
const router = express.Router()

const Post = require('../models/schemas');


function insertArticleData () {
  Post.insert([
    {
      image: "../images/runes.webp",
      title: "Be a Great Witch",
      description: "Cupcake ipsum dolor sit amet. Halvah powder lollipop tiramisu chocolate macaroon chocolate bar gummies fruitcake. Cheesecake danish jelly marzipan icing gummi bears. Sweet roll candy marshmallow liquorice pudding biscuit jelly lollipop sweet roll. Carrot cake soufflé cake tart sweet roll bonbon. "   
    },
    {
      image: "../images/hobbit_hole.webp",
      title: "Po-Tay-Toes",
      description : "Chocolate bar chocolate cake caramels pastry sesame snaps tart macaroon. Powder wafer sesame snaps soufflé chocolate cake danish macaroon. Oat cake tart gummi bears lollipop chocolate. Cotton candy ice cream brownie oat cake croissant cake. Liquorice pudding biscuit caramels topping chupa chups pastry. Bonbon cotton candy dessert icing chocolate cupcake halvah soufflé. "
    },
    { 
      image: "../images/candles.webp",
      title: "Witchy Candles",
      description: "Donut cheesecake powder candy shortbread. Pastry lollipop pie sesame snaps tart candy dessert marzipan. Cheesecake soufflé fruitcake powder gingerbread. Jelly pie tootsie roll wafer I love sugar plum sugar plum cheesecake soufflé. Jujubes gummi bears dessert pastry I love candy jelly pudding I love. Tootsie roll oat cake oat cake apple pie sesame snaps cookie gummies."
    },
    { 
      image: "../images/spooky_cauldrons.webp",
      title: "Spooky Witch Cauldrons",
      description: "Gummi bears oat cake liquorice cake fruitcake halvah bonbon pastry. Tootsie roll marzipan donut oat cake sweet roll chupa chups donut marzipan lollipop. Cake jelly biscuit jujubes pie tiramisu dessert jelly-o. Dragée marshmallow jelly caramels shortbread sugar plum icing bonbon jelly. Chocolate macaroon carrot cake candy canes oat cake candy dessert cookie sweet roll. Pie gummies chocolate cake biscuit bear claw fruitcake danish."
    },
    { 
      image: "../images/potions.webp",
      title: "Witchy Potions and Lotions",
      description: "Muffin bonbon jujubes wafer candy carrot cake pie muffin. Tootsie roll shortbread jelly-o jelly biscuit jelly beans gingerbread dragée cake. Icing bear claw tiramisu chocolate cake chocolate bar chocolate bar. Tiramisu brownie gingerbread ice cream oat cake. Chocolate cake cake chupa chups sugar plum sesame snaps dragée liquorice marzipan. Lemon drops cake liquorice halvah brownie."
    },
    { 
      image: "../images/witch_aesthetic.webp",
      title: "Beautiful Witchy Stuff",
      description: " Cotton candy ice cream apple pie macaroon tiramisu chocolate cake chocolate donut. Chocolate cotton candy sweet roll jelly beans cake lemon drops icing sesame snaps. Biscuit shortbread gummi bears halvah oat cake biscuit cookie. Pudding sugar plum macaroon lemon drops lemon drops. Shortbread fruitcake candy carrot cake jujubes chocolate cake."
    }
  ])
}


insertArticleData(); 
module.exports = router
