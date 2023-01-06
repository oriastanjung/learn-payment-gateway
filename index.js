const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;
const midtransClient = require("midtrans-client");

let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: "SB-Mid-server-cXKPVymqElZUX6mOXntttP88",
});

let parameter = {
  transaction_details: {
    order_id: "YOUR-ORDERID-123456",
    gross_amount: 10000,
  },
  credit_card: {
    secure: true,
  },
  customer_details: {
    first_name: "budi",
    last_name: "pratama",
    email: "budi.pra@example.com",
    phone: "08111222333",
  },
};

app.use(cors());

app.get("/create-token", (req, res) => {
  snap.createTransaction(parameter).then((transaction) => {
    // transaction token
    let transactionToken = transaction.token;
    res.json({ data: transaction });
    console.log("transactionToken:", transaction);
  });
  //   res.send("hello world");
});

app.get("/", (req, res) => {
  res.send("hello world!!!");
});

app.listen(PORT, () =>
  console.log(`ExpressApp listening on localhost port ${PORT}!`)
);

// Export the Express API
module.exports = app;
