const Note = require("../models/Note");

const addNot = async (userId, text) => {
  try {
    const newNote = new Note({
      userId: userId,
      text: text,
    });
    return await newNote.save();
  } catch (err) {
    throw Error(err);
  }
};

const getNot = async (noteId) => {
  try {
    return await Note.findById(noteId);
  } catch (err) {
    throw Error(err);
  }
};

const getallnot = async (userId) => {
  try {
    return await Note.find({ userId });
  } catch (err) {
    throw Error(err);
  }
};

const editnot = async (noteId, body) => {
  console.log(noteId);
  try {
    return await Note.findByIdAndUpdate(noteId, { $set: body }, { new: true });
  } catch (error) {
    throw Error(err);
  }
};

const deletenot = async (noteId) => {
  try {
    const note = await Note.findByIdAndDelete(noteId);
    if (note) {
      return note;
    }
  } catch (error) {
    throw Error(error);
  }
};

module.exports = { addNot, getNot, getallnot, editnot, deletenot };
