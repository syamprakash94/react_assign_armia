const router = require("express").Router();

const {
  addNote,
  getNote,
  getAllNote,
  editNote,
  deleteNote,
} = require("../Controller/noteController");
const { tokenCheck } = require("../middlewares/TokenCheck");
const {Validate} = require('../middlewares/Validation')

// add notes
router.route("/addnote").post(addNote);
// get a specific note
router.route("/getnote/:id").get(getNote);
// get a user's all notes
router.route("/getallnote").post(tokenCheck, getAllNote);
// edit note
router.route("/editnote/:noteId").put( editNote);
// delete project
router.route("/deletenote/:noteId").delete(Validate, deleteNote);

module.exports = router;
