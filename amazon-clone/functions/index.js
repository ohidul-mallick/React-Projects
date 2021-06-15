const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
// const { request } = require("express");

const stripe = require("stripe")(
  "sk_test_51ItCElSA2qHclYRFMcxb4EY65ldRZsIejmg8eXKiirNJltk7HJSqMtnknZifykK5UCRF1lGaPtQqhWOiVfufRE3p00qPDGPtI9"
);

// API

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());
// API routes
app.get("/", (request, response) => response.status(200).send("hello Backend"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request recieve ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen Command

exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-3848c/us-central1/api
