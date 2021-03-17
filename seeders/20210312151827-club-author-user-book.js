"use strict";

module.exports = {
up: async (queryInterface, Sequelize) => {
let authors = await queryInterface.bulkInsert("Authors", [

// Pre-loading Seeding Data for Authors 
{ name: "John Grisham"},
{ name: "James Patterson" },
{ name: "Joe Smith"},
{ name: "Bob Williams" },
{ name: "Steve Smith"},
{ name: "Scott Daniels" },
{ name: "Billy Bob"},
{ name: "Jimmy Samuels" },
{ name: "Billy Bob"},

]);

let books = await queryInterface.bulkInsert("Books", [

// Pre-loading Seeding Data for Book Titles
{ title: "The Firm" , authorId: 1},
{ title: "The Reckonining", authorId: 2 },
{ title: "The Guardian", authorId: 3 },
{ title: "The Pelican Brief", authorId: 4 },
{ title: "Sycamore Row", authorId: 5 },
{ title: "The Partner", authorId: 6 },
{ title: "The Whistler", authorId: 7 },
{ title: "The Racketeer", authorId: 8 },
{ title: "The Rainmaker", authorId: 9 },

{ title: "Home", authorId: 1 },
{ title: "BookShots", authorId: 2 },
{ title: "Criss Cross", authorId: 3 },
{ title: "Walk in My Boots", authorId: 4 },
{ title: "Jack & Jill", authorId: 5 },
{ title: "2nd Chance", authorId: 6 },
{ title: "Zoo", authorId: 7 },
{ title: "Roses are Red", authorId: 8 },
{ title: "Cat & Mouse", authorId: 9 },

]);

let users = await queryInterface.bulkInsert("Users", [

  //Users -  Pre-loaded Seeding Data - Loading 9 Users
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
{ userId: 3, authorId: 3 },
{ userId: 4, authorId: 4 },
{ userId: 5, authorId: 5 },
{ userId: 6, authorId: 6 },
{ userId: 7, authorId: 7 },
{ userId: 8, authorId: 8 },
{ userId: 9, authorId: 9 },

])
},

down: async (queryInterface, Sequelize) => {},
};