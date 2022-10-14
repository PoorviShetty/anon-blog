const express = require("express");

const blogRoutes = express.Router();

const dbo = require("./db/conn");
 
blogRoutes.route("/posts").get(function (req, res) {
 let db_connect = dbo.getDb("blog");
 db_connect
   .collection("posts")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
blogRoutes.route("/post/:date").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { "date": req.params.date };
 db_connect
   .collection("posts")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
blogRoutes.route("/post/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   title: req.body.title,
   date: req.body.date,
   img: req.body.img,
   text: req.body.text
 };
 db_connect.collection("posts").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 

blogRoutes.route("/post/:date").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myquery = { date: req.params.date };
 let newvalues = {
   $set: {
    title: req.body.title,
    date: req.body.date,
    img: req.body.img,
    text: req.body.text
   },
 };
 db_connect
   .collection("posts")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});
 

blogRoutes.route("/post/:date").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { date: req.params.date };
 db_connect.collection("posts").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
module.exports = blogRoutes;