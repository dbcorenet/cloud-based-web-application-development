var express = require('express');
var router = express.Router();
const notes = require('../models/notes-memory');
const notesMongo = require('../models/notes-mongo');

/* GET home page. */
router.get('/', async (req, res, next) => {
  let keylist = await notesMongo.keylist();
  // let keyPromises = keylist.map(key => {
  //   return notes.read(key)
  // });
  // let notelist = await Promise.all(keyPromises);
  res.render('index', { title: 'Notes', notelist: keylist });
});


// Add Note.
router.get('/notes/add', (req, res, next) => {
  res.render('noteedit', {
    title: "Add a Note",
    docreate: true,
    notekey: "", note: undefined
  });
});

// Add Note.
// Save Note (update)
router.post('/notes/save', async (req, res, next) => {
  var note;
  console.log(req.body);
  if (req.body.docreate === "create") {
    note = await notesMongo.create(req.body.notekey,
      req.body.title, req.body.body);
  } else {
    note = await notes.update(req.body.notekey,
      req.body.title, req.body.body);
  }
  res.redirect('/notes/view?key='+ req.body.notekey);
});

// Read Note (read)
router.get('/notes/view', async (req, res, next) => {
  var note = await notesMongo.read(req.query.key);
  res.render('noteview', {
    title: note ? note.title : "",
    notekey: req.query.key, note: note
  });
});

// Ask to Delete note (destroy)
router.get('/notes/destroy', async (req, res, next) => {
  var note = await notesMongo.read(req.query.key);
  res.render('notedestroy', {
    title: note ? note.title : "",
    notekey: req.query.key, note: note
  });
});

// Really destroy note (destroy)
router.post('/notes/destroy/confirm', async (req, res, next) => {
  await notesMongo.destroy(req.body.notekey);
  res.redirect('/');
});


module.exports = router;