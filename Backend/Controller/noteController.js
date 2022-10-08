const Note = require("../models/Note");
const noteService = require("../Services/noteServices");

// add notes
const addNote = async (req, res) => {
  try {
    const userId = req.body.userId;
    const text = req.body.text;
console.log("useridss",userId);
    const note = await noteService.addNot(userId, text);
    res.status(200).json(note);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// get a note
const getNote = async (req, res) => {
  try {
    const noteId = req.params.id;
    console.log(noteId);
    const note = await noteService.getNot(noteId);
    console.log(note);
    res.status(200).json(note);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// get a user's all notes
const getAllNote = async (req, res) => {
  try {
    const userId = req.body.userId;

    const note = await noteService.getallnot(userId);
    res.status(200).json(note);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}; 

// edit note
const editNote = async (req, res) => {
  console.log(req.body);
  try {
    const noteid = req.params.noteId;
    const body = req.body;

    const note = await noteService.editnot(noteid, body);

    res.status(200).json(note);
  } catch (err) {
    res.status(500).json(err);
  }
};

// delete note
const deleteNote = async (req, res) => {
  try {
    const noteId = req.params.noteId;

    const note = await noteService.deletenot(noteId);
    res.status(200).json("Note deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { addNote, getNote, getAllNote, editNote, deleteNote };
