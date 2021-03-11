import path from 'path';
import express from 'express';
import multer from 'multer';
const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    // null bc no err
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    // get extension from actual file (using node path module)
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`,
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  // test is a boolean - matches filetypes ? true : false
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Images only!'); // pass error on cb
  }
}

// this is what is passed as middleware to route
const upload = multer({
  storage, // allows to upload any type of file
  fileFilter(req, file, cb) {
    //
    checkFileType(file, cb);
  },
});

// pass upload as middleware
router.post('/', upload.single('image'), (req, res) => {
  res.send(`/${req.file.path}`);
});

export default router;
