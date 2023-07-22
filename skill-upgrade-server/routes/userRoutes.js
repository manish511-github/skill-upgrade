import express from "express";
import { login, register ,logout, getMyProfile,changePassword,updateProfile,updateUserRole,updateprofilepicture,forgetPassword,resetPassword,addToPlaylist,removeFromPlaylist,getAllUsers,deleteUser,deleteMyProfile} from "../controllers/userController.js";
import { isAuthenticated,authorizeAdmin } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";

const router=express.Router();
// To register a new user
router.route("/register").post(singleUpload, register);


// Login
router.route("/login").post(login );
// logout
router.route("/logout").get(logout);
// Get my profile
router.route("/me").get(isAuthenticated, getMyProfile);

// Delete my profile
router.route("/me").delete(isAuthenticated, deleteMyProfile);


router.route("/changepassword").put(isAuthenticated, changePassword);


router.route("/updateprofile").put(isAuthenticated, updateProfile);

// UpdateProfilePicture
router
  .route("/updateprofilepicture")
  .put(isAuthenticated, singleUpload, updateprofilepicture);


//ForgetPassword
router.route("/forgetpassword").post(forgetPassword);

router.route("/resetpassword/:token").put(resetPassword);

// AddtoPlaylist
router.route("/addtoplaylist").post(isAuthenticated, addToPlaylist);

// RemoveFromPlaylist
router.route("/removefromplaylist").delete(isAuthenticated, removeFromPlaylist);

router.route("/admin/users").get(isAuthenticated, authorizeAdmin, getAllUsers);

router
  .route("/admin/user/:id")
  .put(isAuthenticated, authorizeAdmin, updateUserRole)
  .delete(isAuthenticated, authorizeAdmin, deleteUser);


export default router;
