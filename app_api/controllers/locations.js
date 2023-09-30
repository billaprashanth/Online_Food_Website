var mongoose = require("mongoose");
var sendJsonResponse = function (res, status, content) {
  res.status(status);
  res.json(content);
};
// default location to retrive apis
module.exports.getEndpoint = (req, res) => {
  sendJsonResponse(res, 200, { status: "success" });
};
module.exports.postEndpoint = (req, res) => {
  sendJsonResponse(res, 200, { status: "success" });
};

// 1. PAGEHEADER

// To retrive PageHeader starts

const PageHeader = mongoose.model("PageHeader");
// get
module.exports.PageHeaderReadOne = async function (req, res) {
  try {
    const location = await PageHeader.findById(req.params.locationid).exec();
    sendJsonResponse(res, 200, location);
    console.log(location);
  } catch (err) {
    // Handle the error
    sendJsonResponse(res, 500, { error: "An error occurred" });
  }
};
// post
module.exports.postHeaderEndpoint = (req, res) => {
  sendJsonResponse(res, 200, { status: "success" });
};
// put
module.exports.updateEndpoint = (req, res) => {
  sendJsonResponse(res, 200, { status: "success" });
};
// delete
module.exports.deleteEndpoint = (req, res) => {
  sendJsonResponse(res, 200, { status: "success" });
};

// PageHeader Ends

// 2.PAYMENT

// payment to retrive data
const Payment = mongoose.model("Payment");

// get
module.exports.paymentReadOne = async function (req, res) {
  try {
    const payment = await Payment.findById(req.params.locationid).exec();
    sendJsonResponse(res, 200, payment);
    console.log(payment);
  } catch (err) {
    // Handle the error
    sendJsonResponse(res, 500, { error: "An error occurred" });
  }
};

// post
module.exports.paymentpostHeaderEndpoint = (req, res) => {
  sendJsonResponse(res, 200, { status: "success" });
};
// put
module.exports.paymentupdateEndpoint = (req, res) => {
  sendJsonResponse(res, 200, { status: "success" });
};
// delete
module.exports.paymentdeleteEndpoint = (req, res) => {
  sendJsonResponse(res, 200, { status: "success" });
};

// Payment page ends


// 3. MENU

//Menu  To retrive Menu starts
const Menu = mongoose.model("Menu");
// get
module.exports.menuReadOne = async function (req, res) {
  try {
    const Menu1 = await Menu.findById(req.params.locationid).exec();
    sendJsonResponse(res, 200, Menu1);
    console.log(Menu1);
  } catch (err) {
    // Handle the error
    sendJsonResponse(res, 500, { error: "An error occurred" });
  }
};
// put
module.exports.menuupdatePageHeader = async function (req, res) {
  try {
    const location = await Menu.findByIdAndUpdate(
      req.params.locationid,
      req.body, // Assuming the request body contains the updated data
      { new: true } // Return the updated document
    ).exec();

    sendJsonResponse(res, 200, location);
  } catch (err) {
    // Handle the error
    sendJsonResponse(res, 500, { error: "An error occurred" });
  }
};
// post
module.exports.menupostPageHeader = (req, res) => {
  sendJsonResponse(res, 200, { status: "success" });
};
// delete
module.exports.menudeletePageHeader = (req, res) => {
  sendJsonResponse(res, 200, { status: "success" });
};

// Menu page ends


// 4. SIGNIN 

// signin Starts
const Signin = mongoose.model("Signin");
module.exports.signinReadOne = async function (req, res) {
  try {
    const signin = await Signin.findById(req.params.locationid).exec();
    sendJsonResponse(res, 200, signin);
    console.log(signin);
  } catch (err) {
    // Handle the error
    sendJsonResponse(res, 500, { error: "An error occurred" });
  }
};
// post
module.exports.signinpostReadOne = (req, res) => {
  sendJsonResponse(res, 200, { status: "success" });
};
// put
module.exports.signinputReadOne = (req, res) => {
  sendJsonResponse(res, 200, { status: "success" });
};
// delete
module.exports.signindeleteReadOne = (req, res) => {
  sendJsonResponse(res, 200, { status: "success" });
};
// Signin Ends



// 5. PopularDish
// PopularDish starts 
const PopularDish = mongoose.model("PopularDish");
module.exports.PopularDishReadOne = async function (req, res) {
  try {
    const dish = await PopularDish.findById(req.params.locationid).exec();
    sendJsonResponse(res, 200, dish);
    console.log(dish);
  } catch (err) {
    // Handle the error
    sendJsonResponse(res, 500, { error: "An error occurred" });
  }
};
// post
module.exports.popularpostEndpoint = (req, res) => {
  sendJsonResponse(res, 200, { status: "success" });
};
// put
module.exports.popularupdateEndpoint = (req, res) => {
  sendJsonResponse(res, 200, { status: "success" });
};
// delete
module.exports.populardeleteEndpoint = (req, res) => {
  sendJsonResponse(res, 200, { status: "success" });
};
// PopularDish Ends

