import express from "express";
import {
  buySubscription,paymentVerification,getRazorPayKey,cancelSubscription
 
} from "../controllers/paymentController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// Buy Subscription
router.route("/subscribe").get(isAuthenticated, buySubscription);

router.route("/paymentverification").post(isAuthenticated, paymentVerification);

// Get Razorpay key
router.route("/razorpaykey").get(getRazorPayKey);


// Cancel Subscription
router.route("/subscribe/cancel").delete(isAuthenticated, cancelSubscription);




export default router;
