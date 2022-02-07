//jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewurlParser: true});
// { useNewurlParser: true} helps avoid the deprecation warning when starting node.
//The benefit of mongoose is that is saves alot of time and
//space in the code by just using mongoose as well ass
//the coolest thing is that when we insert the MongoDB url
//into the connect code of mongoose when we Inserted
//after {27017}/fruitsDB the code will either just create to Connect
//to the fruitsDB without the need of either using the
//terminal or even multiple lines of code.
//And if you can remember from my last repository and this one
//all of the code lines below are are longer needed.

// // Connection URL
// const url = 'mongodb://localhost:27017';
//
//
// const dbName  = 'fruitsDB';
//
// const client = new MongoClient(url, {useNewUrlParser: true} );
//
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected Successfully to the Server");//Connection status checker
//
// const db = client.db(dbName);
//
// insertDocuments(db, function() {
//
//   client.close();
// });
// //PLEASE REFER TO MONGODB DOCS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// });

const fruitSchema = new mongoose.Schema({
//We make a schema in mongoose to structure
//our DataBase design of what and how the Data
//is being and will be concluded.This is as you can
//see a Javascript object.
name:{

    type: String,
  //  required: [true,'Please check Name entry!']
//When there is a validation fail the specific invalid data wont be added.
},

rating: {
//Here we are using data validation technique;The code is self explanatory.
//This is as you can see a Javascript object.
type: Number,
min: 1,
max: 10

},
review: String

});

const Fruit = mongoose.model("Fruit", fruitSchema);
//{mongoose.model} will help us create a collection/table for fruitSchema.
//Mongo makes {fruit} to
//{fruits} which is pluralized.Also lower case.

const fruit = new Fruit({ //Then after making the model collection
  //we can now create a document for any fruit we like.


name: "Apple",
rating: 10,
review: "Nice."

});

 // fruit.save(); //Evertime we run this command it'll save the same document over and over again and since we will be making
//different Docs we will comment it out.

const personSchema  = new mongoose.Schema({

name: String,
age:  Number,
favoriteFruit: fruitSchema //Relationship between two collections.

});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({// By this we are creating relations within
  //the same DB i.e fruitsDB but between different collections {people} and {fruits}.

name:"Pineapple",
score: 9,
review: "Great."

});

pineapple.save();

const person = new Person({

name: "Amy",
age: 25,
favoriteFruit: pineapple

});

 person.save();

const kiwi = new Fruit({


name: "Kiwi",
rating: 10,
review: "Nice."

});

const banana = new Fruit({


name: "Banana",
rating: 8,
review: "Nice."

});

const orange = new Fruit({


name: "Orange",
rating: 7,
review: "Nice."

});
//
// // Fruit.insertMany([kiwi,orange,banana], function(err){
// //   //By this command we can insert multiple appropriate Docs into the
// //   //Fruit schema.
// //
// // if (err){
// //
// // console.log(err);
// //
// // }else {
// //
// // console.log("Successfully saved all the fruits to fruitsDB");
// //
// // }
// //
// // });
// //This part of the code block was commented out for testing different modules
// //of the MongooseDB so we don't end up inserting the docs again and again.
//



Fruit.find(function(err,fruits){
if(err){
  console.log(err);
} else{

// console.log(fruits);

//mongoose.connection.close();//This commands helps us not to close the mongodb
//terminal everytime we run it rather for us it closes automatically when its
//done with the operation.

fruits.forEach(function(fruit){//Be careful when mentioning the collections
  //name because as mentioned easrlier mongo create pluralized names for collections
  //so instead of {fruit} we write {fruits}.

console.log(fruit.name);


});

}

});

// Fruit.updateOne({_id:"62002f57e6c9f55148cbb0d0"}, {name:"Peach"}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully Updated!");
//   }
// });

// Fruit.deleteOne({name:"Peach"}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully Deleted!");
//   }
// });



//We donnot need the entire blocks of code under anymore because we now have
//mongoose so there is no need of lengthy insertions of data.

// const insertDocuments = function(db, callback)
// {
//
// const collection = db.collection('fruits');
// collection.insertMany([
//
// {
//   name: "Apple",
//   score: 8,
//   review: "Great Fruit"
// },
// {
//
//   name: "Orange",
//   score: 6,
//   review: "Kinda Sour"
//
// },
//
// {
//
//   name: "Banana",
//   score: 9,
//   review: "Great Stuff"
//
// }
//
//
// ], function(err, result){
//   assert.equal(err, null);
//    //assert.equal(3,result.n);
//    assert.equal(3,result.length);
//   console.log("Inserted 3 documents into the collection");
//   callback(result);
// });
//
// };
