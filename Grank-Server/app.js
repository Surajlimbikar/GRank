const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const http = require("http");
const mysql = require("mysql"); // Using mysql2 with promises
const bcryptjs = require("bcryptjs");
const cookieParser = require("cookie-parser");
require("./v1/models/db");
const nodemailer = require("nodemailer");

// payment-gate
var sha512 = require("js-sha512");

const salt = 10;
const port = process.env.PORT || 2020;
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

var config = {
  key: process.env.EASEBUZZ_KEY,
  salt: process.env.EASEBUZZ_SALT,
  env: process.env.EASEBUZZ_ENV,
  enable_iframe: process.env.EASEBUZZ_IFRAME,
};

const db = mysql.createConnection({
  host: "localhost",
  user: "myvidyaco_grank_db",
  password: "{{VVzvel7JyG",
  database: "myvidyaco_grank_db",
});

// Payment Start

// get
app.get("/get-payment-detail", (req, res) => {
  const query = "SELECT * FROM payments";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Error executing Payment query: ", err);
      res.status(500).send("Error fetching Payment data");
    } else {
      res.send(result);
    }
  });
});
// post
app.post("/response", function (req, res) {
  console.log("Received req.body:", req.body);
  console.log("Length of productinfo:", req.body.productinfo.length);
  function checkReverseHash(response) {
    console.log(response.productinfo);
    var hashstring =
      config.salt +
      "|" +
      response.status +
      "|" +
      response.udf10 +
      "|" +
      response.udf9 +
      "|" +
      response.udf8 +
      "|" +
      response.udf7 +
      "|" +
      response.udf6 +
      "|" +
      response.udf5 +
      "|" +
      response.udf4 +
      "|" +
      response.udf3 +
      "|" +
      response.udf2 +
      "|" +
      response.udf1 +
      "|" +
      response.email +
      "|" +
      response.firstname +
      "|" +
      response.productinfo +
      "|" +
      response.amount +
      "|" +
      response.txnid +
      "|" +
      response.key;
    hash_key = sha512.sha512(hashstring);
    if (hash_key == req.body.hash) return true;
    else return false;
  }
  if (checkReverseHash(req.body)) {
    // Insert data into MySQL database
    // res.send(req.body);
    res.send(
      "<h1 align-item-center>This transaction has been successfully processed.</h1> "
    );
    const {
      email,
      phone,
      deduction_percentage,
      net_amount_debit,
      cardCategory,
      unmappedstatus,
      addedon,
      cash_back_percentage,
      bank_ref_num,
      error_Message,
      cardnum,
      upi_va,
      payment_source,
      card_type,
      mode,
      error,
      bankcode,
      name_on_card,
      bank_name,
      issuing_bank,
      PG_TYPE,
      amount,
      furl,
      productinfo,
      auth_code,
      status,
      hash,
      firstname,
      surl,
      txnid,
    } = req.body;

    const value = [
      email,
      phone,
      deduction_percentage,
      net_amount_debit,
      cardCategory,
      unmappedstatus,
      addedon,
      cash_back_percentage,
      bank_ref_num,
      error_Message,
      cardnum,
      upi_va,
      payment_source,
      card_type,
      mode,
      error,
      bankcode,
      name_on_card,
      bank_name,
      issuing_bank,
      PG_TYPE,
      amount,
      furl,
      productinfo,
      auth_code,
      status,
      hash,
      firstname,
      surl,
      txnid,
    ];

    db.query(
      "INSERT INTO payments (`email`,`phone`, `deduction_percentage`,`net_amount_debit`,`cardCategory`,`unmappedstatus`,`addedon`, `cash_back_percentage`,`bank_ref_num`,`error_Message`,`cardnum`,`upi_va`,`payment_source`,`card_type`,`mode`,`error`,`bankcode`,`name_on_card`,`bank_name`,`issuing_bank`,`PG_TYPE`,`amount`,`furl`,`productinfo`,`auth_code`, `status`,`hash`,`firstname`,`surl`, `txnid`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      value,
      function (error, results, fields) {
        if (error) {
          console.error("Error inserting data:", error);
          res.status(500).send("Internal Server Error");
        } else {
          console.log("Data inserted successfully");
        }
      }
    );
    console.log("require-body", req.body); //h
  } else {
    res.status(400).send("False, check the hash value");
  }
});

//initiate_payment API
app.post("/initiate_payment", function (req, res) {
  data = req.body;
  console.log("data", data); //f
  var initiate_payment = require("./v1/Easebuzz/initiate_payment");
  initiate_payment.initiate_payment(data, config, res);
});
// Payment end

app.use("/api/v1/users", require("./v1/routes/user.route"));
app.use("/api/v1/addtocart", require("./v1/routes/addtocart.route"));
app.use("/api/v1/addtocartsecu", require("./v1/routes/addtocartsecu.route"));
app.use(
  "/api/v1/googlewarkspace",
  require("./v1/routes/googlewarkspace.route")
);
app.use("/api/v1/microsoft", require("./v1/routes/microsoft.route"));
app.use("/api/v1/rediffmail", require("./v1/routes/rediffmail.route"));

// register API
app.post("/register", (req, res) => {
  const sql =
    "INSERT INTO users (`name`,`email`,`mobile`,`password`) VALUES (?)";
  bcryptjs.hash(req.body.password, salt, (err, hash) => {
    if (err) {
      console.error("Error hashing password:", err);
      return res.json({ Error: "Error for hashing password" });
    }
    console.log("Hashed Password:", hash);
    const values = [req.body.name, req.body.email, req.body.mobile, hash];
    db.query(sql, [values], (err, result) => {
      if (err) return res.json({ Error: "Inserting data error in server" });
      return res.json({ Status: "Success" });
    });
  });
});

// login API
app.post("/login", (req, res) => {
  const sql = "SELECT * FROM users WHERE email = ?";
  console.log("email:", req.body.email);
  console.log("password:", req.body.password);

  db.query(sql, [req.body.email], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ Error: "Login error in server" });
    }
    console.log("data:", data.length);
    if (data.length > 0) {
      bcryptjs.compare(req.body.password, data[0].password, (err, response) => {
        if (err) {
          console.error("err:", err);
          return res.status(500).json({ Error: "Password compare error" });
        }

        if (res) {
          const name = data[0].name;
          const token = jwt.sign({ name }, "jwt-secret-key", {
            expiresIn: "1h",
          });

          res.cookie("token", token);
          res.json({ Status: "Success" });
        } else {
          return res.status(401).json({ Error: "Password not matched" });
        }
      });
    } else {
      return res.status(404).json({ Error: "No email existed" });
    }
  });
});
// --------email enquire form--------------

app.post("/send-email", (req, res) => {
  const {
    to,
    subject,
    message,
    name,
    cc,
    bcc,
    city,
    business,
    company,
    phone,
    email,
    url,
  } = req.body;

  const transporter = nodemailer.createTransport({
    host: "extent.herosite.pro",
    port: 587,
    secure: false,
    auth: {
      user: "myvidyaa.co@myvidya.co.in",
      pass: "(h1HX)18$$*,",
    },
  });

  const mailOptions = {
    from: to,
    to,
    cc,
    bcc,
    subject,
    // text: `Name: ${name}\n\n${message}`,
    // text: `Name: ${name}\n\n${message}`,
    html: `
    <style type="text/css">
    body {
    width: 100%;
    background-color: #EFEFEF;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    }
    html {
    width: 100%;
    }
    table {
    font-size: 14px;
    border: 0;
    }
    @media only screen and (max-width: 640px) {
    .header-bg {
    width: 440px !important;
    height: 10px !important;
    }
    .main-header {
    line-height: 28px !important;
    }
    .main-subheader {
    line-height: 28px !important;
    }
    .container {
    width: 440px !important;
    }
    .container-middle {
    width: 420px !important;
    }
    .mainContent {
    width: 400px !important;
    }
    .main-image {
    width: 400px !important;
    height: auto !important;
    }
    .banner {
    width: 400px !important;
    height: auto !important;
    }
    .section-item {
    width: 400px !important;
    }
    .section-img {
    width: 400px !important;
    height: auto !important;
    }
    .prefooter-header {
    padding: 0 10px !important;
    line-height: 24px !important;
    }
    .prefooter-subheader {
    padding: 0 10px !important;
    line-height: 24px !important;
    }
    .top-bottom-bg {
    width: 420px !important;
    height: auto !important;
    }
    }
    
    @media only screen and (max-width: 479px) {
    
    .header-bg {
    width: 280px !important;
    height: 10px !important;
    }
    .top-header-left {
    width: 260px !important;
    text-align: center !important;
    }
    .top-header-right {
    width: 260px !important;
    }
    .main-header {
    line-height: 28px !important;
    text-align: center !important;
    }
    .main-subheader {
    line-height: 28px !important;
    text-align: center !important;
    }
    
    .logo {
    width: 260px !important;
    }
    .nav {
    width: 260px !important;
    }
    .container {
    width: 280px !important;
    }
    .container-middle {
    width: 260px !important;
    }
    .mainContent {
    width: 240px !important;
    }
    .main-image {
    width: 240px !important;
    height: auto !important;
    }
    .banner {
    width: 240px !important;
    height: auto !important;
    }
    
    .section-item {
    width: 240px !important;
    }
    .section-img {
    width: 240px !important;
    height: auto !important;
    }
    
    .prefooter-header {
    padding: 0 10px !important;
    line-height: 28px !important;
    }
    .prefooter-subheader {
    padding: 0 10px !important;
    line-height: 28px !important;
    }
    
    .top-bottom-bg {
    width: 260px !important;
    height: auto !important;
    }
    }
    
    </style>
    <table border="0" width="100%" cellspacing="0" cellpadding="0">
    <tbody>
    <tr>
    <td height="20">&nbsp;</td>
    </tr>
    <tr>
    <td>
    <table class="container-middle" border="0" width="560" cellspacing="0" cellpadding="0" align="center">
    <tbody>
    <tr>
    <td>
    <table class="top-header-left" border="0" cellspacing="0" cellpadding="0" align="left">
    <tbody>
    <tr>
    <td align="center">
    <table class="date" border="0" cellspacing="0" cellpadding="0">
    <tbody>
    <tr>
    <td><img style="display: block;" src="http://www.mrcreativedemo.com/verified_enquiry/img/grank-logo.png" alt="icon 1"></td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table class="top-header-right" border="0" cellspacing="0" cellpadding="0" align="right">
    <tbody>
    <tr>
    <td align="center">
    <table class="tel" border="0" cellspacing="0" cellpadding="0" align="center">
    <tbody>
    <tr>
    <td>&nbsp;</td>
    <td>&nbsp;&nbsp;</td>
    <td style="color: #fefefe; font-size: 11px; font-weight: normal; font-family: Helvetica, Arial, sans-serif;"><img style="display: block;" src="http://www.mrcreativedemo.com/verified_enquiry/img/google-partner-logo.jpg" alt="icon 1"></td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    <tr>
    <td height="10">&nbsp;</td>
    </tr>
    <tr>
    <td align="center" valign="top" width="100%">
    <table class="container" border="0" width="600" cellspacing="0" cellpadding="0" align="center" bgcolor="ffffff">
    <tbody>
    <tr>
    <td><img class="header-bg" style="display: block;" src="http://www.mrcreativedemo.com/verified_enquiry/img/top-header-bg.png" alt=""></td>
    </tr>
    <tr bgcolor="2780cb">
    <td height="5">&nbsp;</td>
    </tr>
    <tr bgcolor="2780cb">
    <td align="center">
    <table class="container-middle" border="0" width="560" cellspacing="0" cellpadding="0" align="center">
    <tbody>
    <tr>
    <td>
    <table class="top-header-left" border="0" cellspacing="0" cellpadding="0" align="left">
    <tbody>
    <tr>
    <td align="center">
    <table class="date" border="0" cellspacing="0" cellpadding="0">
    <tbody>
    <tr>
    <td><img style="display: block;" src="http://www.mrcreativedemo.com/verified_enquiry/img/icon-cal.png" alt="icon 1" width="13"></td>
    <td>&nbsp;&nbsp;</td>
    <td style="color: #fefefe; font-size: 11px; font-weight: normal; font-family: Helvetica, Arial, sans-serif;">Date : ${new Date()}\n </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table class="top-header-right" border="0" cellspacing="0" cellpadding="0" align="right">
    <tbody>
    <tr>
    <td align="center">
    <table class="tel" border="0" cellspacing="0" cellpadding="0" align="center">
    <tbody>
    <tr>
    <td>&nbsp;</td>
    <td>&nbsp;&nbsp;</td>
    <td style="color: #fefefe; font-size: 11px; font-weight: normal; font-family: Helvetica, Arial, sans-serif;"> </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    <tr bgcolor="2780cb">
    <td height="10">&nbsp;</td>
    </tr>
    </tbody>
    </table>
    <table class="container" border="0" width="600" cellspacing="0" cellpadding="0" align="center" bgcolor="ffffff">
    <tbody>
    <tr bgcolor="ffffff">
    <td height="40">&nbsp;</td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    <tr bgcolor="ffffff">
    <td style="text-align: center;" height="40">Enquiry For G-Rank</td>
    </tr>
    <tr>
    <td>
    <table class="container-middle" border="0" width="560" cellspacing="0" cellpadding="0" align="center">
    <tbody>
    <tr>
    <td align="center"><img class="top-bottom-bg" style="display: block;" src="http://www.mrcreativedemo.com/verified_enquiry//img/top-rounded-bg.png" alt="" width="560" height="auto"></td>
    </tr>
    <tr bgcolor="ffffff">
    <td height="7">&nbsp;</td>
    </tr>
    <tr bgcolor="ffffff">
    <td height="20">&nbsp;</td>
    </tr>
    <tr bgcolor="ffffff">
    <td>
    <table class="mainContent" border="0" width="528" cellspacing="0" cellpadding="0" align="center">
    <tbody>
    <tr>
    <td class="main-subheader" style="color: #555; font-size: 13px; font-weight: normal; font-family: Helvetica, Arial, sans-serif;"><em>Name : ${name}\n</em></td>
    </tr>
    <tr>
    <td height="20">&nbsp;</td>
    </tr>
    <tr>
    <td class="main-subheader" style="color: #555; font-size: 13px; font-weight: normal; font-family: Helvetica, Arial, sans-serif;"><em>Email: ${email}\n</em></td>
    </tr>
    <tr>
    <td height="20">&nbsp;</td>
    </tr>
    <tr>
    <td class="main-subheader" style="color: #555; font-size: 13px; font-weight: normal; font-family: Helvetica, Arial, sans-serif;"><em>Phone: ${phone}\n</em></td>
    </tr>
    <tr>
    <td height="20">&nbsp;</td>
    </tr>
    <tr>
    <td class="main-subheader" style="color: #555; font-size: 13px; font-weight: normal; font-family: Helvetica, Arial, sans-serif;"><em>Company : ${company}\n</em></td>
    </tr>
    <tr>
    <td height="20">&nbsp;</td>
    </tr>
    <tr>
    <td class="main-subheader" style="color: #555; font-size: 13px; font-weight: normal; font-family: Helvetica, Arial, sans-serif;"><em>Type Of Businees :${business}\n</em></td>
    </tr>
    <tr>
    <td height="20">&nbsp;</td>
    </tr>
    <tr>
    <td class="main-subheader" style="color: #555; font-size: 13px; font-weight: normal; font-family: Helvetica, Arial, sans-serif;"><em>City :${city}\n</em></td>
    </tr>
    <tr>
    <td height="20">&nbsp;</td>
    </tr>
    <tr>
    <td class="main-subheader" style="color: #555; font-size: 13px; font-weight: normal; font-family: Helvetica, Arial, sans-serif;"><em>Message :${message}\n</em></td>
    </tr>
    <tr>
    <td height="20">&nbsp;</td>
    </tr>
    <tr>
    <td class="main-subheader" style="color: #555; font-size: 13px; font-weight: normal; font-family: Helvetica, Arial, sans-serif;"><em>url :${url}\n</em></td>
    </tr>
    <tr>
    <td height="20">&nbsp;</td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    <tr bgcolor="ffffff">
    <td height="25">&nbsp;</td>
    </tr>
    <tr>
    <td align="center"><img class="top-bottom-bg" style="display: block;" src="http://www.mrcreativedemo.com/verified_enquiry/img/bottom-rounded-bg.png" alt="" width="560" height="auto"></td>
    </tr>
    <tr bgcolor="2780cb">
    <td height="14">&nbsp;</td>
    </tr>
    <tr bgcolor="2780cb">
    <td style="color: #eee; font-size: 10px; font-weight: normal; font-family: Helvetica, Arial, sans-serif;" align="center">Copyright G-Rank . All Rights Reserved</td>
    </tr>
    <tr>
    <td><img class="header-bg" style="display: block;" src="http://www.mrcreativedemo.com/verified_enquiry/img/bottom-footer-bg.png" alt=""></td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error.toString() });
    }
    res
      .status(200)
      .json({ message: "Email sent successfully", response: info.response });
  });
});
// // -----email-----

// --------email enquire form--------------

// // -----email Currer Form -----
app.post("/send-email2", (req, res) => {
  const {
    to,
    subject,
    message,
    name,
    cc,
    bcc,
    city,
    business,
    designation,
    branch,
    experience,
    company,
    phone,
    email,
    currentDate,
    url,
  } = req.body;

  /*const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: "suraj@grank.co.in",
      pass: "gulc zuos ibac zjgx",
    },
  });*/

  const transporter = nodemailer.createTransport({
    host: "extent.herosite.pro",
    port: 587,
    secure: false,
    auth: {
      user: "myvidyaa.co@myvidya.co.in",
      pass: "(h1HX)18$$*,",
    },
  });

  const mailOptions = {
    from: to,
    to,
    cc,
    bcc,
    subject,
    // text: `Name: ${name}\n\n${message}`,
    // text: `Name: ${name}\n\n${message}`,
    html: `
    <style type="text/css">
    body {
    width: 100%;
    background-color: #EFEFEF;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    }
    html {
    width: 100%;
    }
    table {
    font-size: 14px;
    border: 0;
    }
    @media only screen and (max-width: 640px) {
    .header-bg {
    width: 440px !important;
    height: 10px !important;
    }
    .main-header {
    line-height: 28px !important;
    }
    .main-subheader {
    line-height: 28px !important;
    }
    .container {
    width: 440px !important;
    }
    .container-middle {
    width: 420px !important;
    }
    .mainContent {
    width: 400px !important;
    }
    .main-image {
    width: 400px !important;
    height: auto !important;
    }
    .banner {
    width: 400px !important;
    height: auto !important;
    }
    .section-item {
    width: 400px !important;
    }
    .section-img {
    width: 400px !important;
    height: auto !important;
    }
    .prefooter-header {
    padding: 0 10px !important;
    line-height: 24px !important;
    }
    .prefooter-subheader {
    padding: 0 10px !important;
    line-height: 24px !important;
    }
    .top-bottom-bg {
    width: 420px !important;
    height: auto !important;
    }
    }
    
    @media only screen and (max-width: 479px) {
    
    .header-bg {
    width: 280px !important;
    height: 10px !important;
    }
    .top-header-left {
    width: 260px !important;
    text-align: center !important;
    }
    .top-header-right {
    width: 260px !important;
    }
    .main-header {
    line-height: 28px !important;
    text-align: center !important;
    }
    .main-subheader {
    line-height: 28px !important;
    text-align: center !important;
    }
    
    .logo {
    width: 260px !important;
    }
    .nav {
    width: 260px !important;
    }
    .container {
    width: 280px !important;
    }
    .container-middle {
    width: 260px !important;
    }
    .mainContent {
    width: 240px !important;
    }
    .main-image {
    width: 240px !important;
    height: auto !important;
    }
    .banner {
    width: 240px !important;
    height: auto !important;
    }
    
    .section-item {
    width: 240px !important;
    }
    .section-img {
    width: 240px !important;
    height: auto !important;
    }
    
    .prefooter-header {
    padding: 0 10px !important;
    line-height: 28px !important;
    }
    .prefooter-subheader {
    padding: 0 10px !important;
    line-height: 28px !important;
    }
    
    .top-bottom-bg {
    width: 260px !important;
    height: auto !important;
    }
    }
    
    </style>
    <table border="0" width="100%" cellspacing="0" cellpadding="0">
    <tbody>
    <tr>
    <td height="20">&nbsp;</td>
    </tr>
    <tr>
    <td>
    <table class="container-middle" border="0" width="560" cellspacing="0" cellpadding="0" align="center">
    <tbody>
    <tr>
    <td>
    <table class="top-header-left" border="0" cellspacing="0" cellpadding="0" align="left">
    <tbody>
    <tr>
    <td align="center">
    <table class="date" border="0" cellspacing="0" cellpadding="0">
    <tbody>
    <tr>
    <td><img style="display: block;" src="http://www.mrcreativedemo.com/verified_enquiry/img/grank-logo.png" alt="icon 1"></td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table class="top-header-right" border="0" cellspacing="0" cellpadding="0" align="right">
    <tbody>
    <tr>
    <td align="center">
    <table class="tel" border="0" cellspacing="0" cellpadding="0" align="center">
    <tbody>
    <tr>
    <td>&nbsp;</td>
    <td>&nbsp;&nbsp;</td>
    <td style="color: #fefefe; font-size: 11px; font-weight: normal; font-family: Helvetica, Arial, sans-serif;"><img style="display: block;" src="http://www.mrcreativedemo.com/verified_enquiry/img/google-partner-logo.jpg" alt="icon 1"></td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    <tr>
    <td height="10">&nbsp;</td>
    </tr>
    <tr>
    <td align="center" valign="top" width="100%">
    <table class="container" border="0" width="600" cellspacing="0" cellpadding="0" align="center" bgcolor="ffffff">
    <tbody>
    <tr>
    <td><img class="header-bg" style="display: block;" src="http://www.mrcreativedemo.com/verified_enquiry/img/top-header-bg.png" alt=""></td>
    </tr>
    <tr bgcolor="2780cb">
    <td height="5">&nbsp;</td>
    </tr>
    <tr bgcolor="2780cb">
    <td align="center">
    <table class="container-middle" border="0" width="560" cellspacing="0" cellpadding="0" align="center">
    <tbody>
    <tr>
    <td>
    <table class="top-header-left" border="0" cellspacing="0" cellpadding="0" align="left">
    <tbody>
    <tr>
    <td align="center">
    <table class="date" border="0" cellspacing="0" cellpadding="0">
    <tbody>
    <tr>
    <td><img style="display: block;" src="http://www.mrcreativedemo.com/verified_enquiry/img/icon-cal.png" alt="icon 1" width="13"></td>
    <td>&nbsp;&nbsp;</td>
    <td style="color: #fefefe; font-size: 11px; font-weight: normal; font-family: Helvetica, Arial, sans-serif;">Date : ${new Date()}\n </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table class="top-header-right" border="0" cellspacing="0" cellpadding="0" align="right">
    <tbody>
    <tr>
    <td align="center">
    <table class="tel" border="0" cellspacing="0" cellpadding="0" align="center">
    <tbody>
    <tr>
    <td>&nbsp;</td>
    <td>&nbsp;&nbsp;</td>
    <td style="color: #fefefe; font-size: 11px; font-weight: normal; font-family: Helvetica, Arial, sans-serif;"> </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    <tr bgcolor="2780cb">
    <td height="10">&nbsp;</td>
    </tr>
    </tbody>
    </table>
    <table class="container" border="0" width="600" cellspacing="0" cellpadding="0" align="center" bgcolor="ffffff">
    <tbody>
    <tr bgcolor="ffffff">
    <td height="40">&nbsp;</td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    <tr bgcolor="ffffff">
    <td style="text-align: center;" height="40">Enquiry For Career Form</td>
    </tr>
    <tr>
    <td>
    <table class="container-middle" border="0" width="560" cellspacing="0" cellpadding="0" align="center">
    <tbody>
    <tr>
    <td align="center"><img class="top-bottom-bg" style="display: block;" src="http://www.mrcreativedemo.com/verified_enquiry//img/top-rounded-bg.png" alt="" width="560" height="auto"></td>
    </tr>
    <tr bgcolor="ffffff">
    <td height="7">&nbsp;</td>
    </tr>
    <tr bgcolor="ffffff">
    <td height="20">&nbsp;</td>
    </tr>
    <tr bgcolor="ffffff">
    <td>
    <table class="mainContent" border="0" width="528" cellspacing="0" cellpadding="0" align="center">
    <tbody>
    <tr>
    <td class="main-subheader" style="color: #555; font-size: 13px; font-weight: normal; font-family: Helvetica, Arial, sans-serif;"><em>Name : ${name}\n</em></td>
    </tr>
    <tr>
    <td height="20">&nbsp;</td>
    </tr>
    <tr>
    <td class="main-subheader" style="color: #555; font-size: 13px; font-weight: normal; font-family: Helvetica, Arial, sans-serif;"><em>Email: ${email}\n</em></td>
    </tr>
    <tr>
    <td height="20">&nbsp;</td>
    </tr>
    <tr>
    <td class="main-subheader" style="color: #555; font-size: 13px; font-weight: normal; font-family: Helvetica, Arial, sans-serif;"><em>Phone: ${phone}\n</em></td>
    </tr>
    <tr>
    <td height="20">&nbsp;</td>
    </tr>
    <tr>
    <td class="main-subheader" style="color: #555; font-size: 13px; font-weight: normal; font-family: Helvetica, Arial, sans-serif;"><em>Designation : ${designation}\n</em></td>
    </tr>
    <tr>
    <td height="20">&nbsp;</td>
    </tr>
    <tr>
    <td class="main-subheader" style="color: #555; font-size: 13px; font-weight: normal; font-family: Helvetica, Arial, sans-serif;"><em>Experience :${experience}\n</em></td>
    </tr>
    <tr>
    <td height="20">&nbsp;</td>
    </tr>
    <tr>
    <td class="main-subheader" style="color: #555; font-size: 13px; font-weight: normal; font-family: Helvetica, Arial, sans-serif;"><em>Branch :${branch}\n</em></td>
    </tr>
    <tr>
    <td height="20">&nbsp;</td>
    </tr>
    <tr>
    <td class="main-subheader" style="color: #555; font-size: 13px; font-weight: normal; font-family: Helvetica, Arial, sans-serif;"><em>Message :${message}\n</em></td>
    </tr>
    <tr>
    <td height="20">&nbsp;</td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    <tr bgcolor="ffffff">
    <td height="25">&nbsp;</td>
    </tr>
    <tr>
    <td align="center"><img class="top-bottom-bg" style="display: block;" src="http://www.mrcreativedemo.com/verified_enquiry/img/bottom-rounded-bg.png" alt="" width="560" height="auto"></td>
    </tr>
    <tr bgcolor="2780cb">
    <td height="14">&nbsp;</td>
    </tr>
    <tr bgcolor="2780cb">
    <td style="color: #eee; font-size: 10px; font-weight: normal; font-family: Helvetica, Arial, sans-serif;" align="center">Copyright G-Rank . All Rights Reserved</td>
    </tr>
    <tr>
    <td><img class="header-bg" style="display: block;" src="http://www.mrcreativedemo.com/verified_enquiry/img/bottom-footer-bg.png" alt=""></td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error.toString() });
    }
    res
      .status(200)
      .json({ message: "Email sent successfully", response: info.response });
  });
});
// // -----email-----

// reCaptcha start

// Validate reCAPTCHA token
async function verifyRecaptcha(token) {
  const secretKey = "6Ld8jF8pAAAAACIFNLgALCCIHe9fYI0MvKKVTg3H";
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
  try {
    const response = await axios.post(url);
    return response.data.success;
  } catch (error) {
    console.error("reCAPTCHA verification failed:", error);
    return false;
  }
}

// Usage
app.post("/verify-recaptcha", async (req, res) => {
  const token = req.body.token;
  const isValid = await verifyRecaptcha(token);
  if (isValid) {
    // reCAPTCHA validated successfully
    res.status(200).send("reCAPTCHA validation successful");
  } else {
    // reCAPTCHA validation failed
    res.status(400).send("reCAPTCHA validation failed");
  }
});
// reCaptcha end

const server = http.createServer(app);

// payment gateway

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
