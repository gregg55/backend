"use strict";

module.exports = {
up: async (queryInterface, Sequelize) => {
let authors = await queryInterface.bulkInsert("Authors", [
{ name: "John Grisham "},
{ name: "James Patterson" },
]);

let books = await queryInterface.bulkInsert("Books", [
// John Grisham Pre-loaded Seeding Data 
{ title: "The Firm" , authorId: 1},
{ title: "The Reckonining", authorId: 1 },
{ title: "The Guardian", authorId: 1 },
{ title: "The Pelican Brief", authorId: 1 },
{ title: "Sycamore Row", authorId: 1 },
{ title: "The Partner", authorId: 1 },
{ title: "The Whistler", authorId: 1 },
{ title: "The Racketeer", authorId: 1 },
{ title: "The Rainmaker", authorId: 1 },


// // James Patterson Pre-loaded Seeding Data 

{ title: "Home", authorId: 2 },
{ title: "BookShots", authorId: 2 },
{ title: "Criss Cross", authorId: 2 },
{ title: "Walk in My Boots", authorId: 2 },
{ title: "Jack & Jill", authorId: 2 },
{ title: "2nd Chance", authorId: 2 },
{ title: "Zoo", authorId: 2 },
{ title: "Roses are Red", authorId: 2 },
{ title: "Cat & Mouse", authorId: 2 },

]);

let users = await queryInterface.bulkInsert("Users", [

  //Users -  Pre-loaded Seeding Data 
{ name: "Gregg" },
{ name: "Dave" },
{ name: "Steve" },
{ name: "Jim" },
{ name: "Robert" },
{ name: "Thiago" },
{ name: "Joseph" },
{ name: "Ronald" },
{ name: "Gary" },
{ name: "Michael" },
]);

let userAuthors = await queryInterface.bulkInsert("UserAuthors", [
{ userId: 1, authorId: 1 },
{ userId: 2, authorId: 2 },
]);
},

down: async (queryInterface, Sequelize) => {},
};