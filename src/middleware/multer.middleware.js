import multer from "multer";


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp")
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname)                        // yha original name ki jagah mai sabke alag alag name bhi rakh sakta kyuki sourav naam ke 5 log sourav.pdf dalega conflict ho sakta hai
  }
})

export const upload = multer({
     storage,
     })