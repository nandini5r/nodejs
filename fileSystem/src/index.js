import express from "express";
import multer from "multer";
import fs from "fs";
const app = express();
const port = 3000;

app.use(express.json());

//upload and read file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}_${Date.now()}`);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  console.log(req.file);
  console.log(req.file.path);

  res.send("File uploaded!");
  fs.readFile(req.file.path, "utf-8", function (err, data) {
    if (err) {
      console.log(err, "errrr");
    } else {
      console.log(data, "dataaa");
    }
  });
});

//merge two files

app.post("/merge", (req, res) => {
  const { fileA, fileB } = req.body;
  console.log(fileA, fileB, "FILES");

  fs.readFile(`uploads/${fileA}`, "utf-8", function (err, dataA) {
    console.log(dataA, "dataaAA");
    fs.readFile(`uploads/${fileB}`, "utf-8", function (err, dataB) {
      console.log(dataB);
      let mergeFile = `${fileA.substring(
        0,
        fileA.length - 4
      )}_${fileB.substring(0, fileB.length - 4)}${Date.now()}.txt`;
      console.log(mergeFile, "mergefilename");
      fs.writeFile(`backup/${mergeFile}`, `${dataA} ${dataB}`, function (err) {
        if (err) {
          console.log(err, "error");
        } else {
          console.log("merged successfully");
          res.send({ message: "merged file has been created" });
        }
      });
    });
  });
});

//read from backup folder
app.post("/read", (req, res) => {
  const { file } = req.body;
  fs.readFile(`backup/${file}`, "utf-8", function (err, data) {
    if (err) {
      console.log(err, "errrr");
    } else {
      res.status(200).send(data);
    }
  });
});

//delete form upload folder
app.delete("/delete", (req, res) => {
  const { file } = req.body;

  fs.unlink(`uploads/${file}`, (err) => {
    if (err) {
      console.error("Error deleting file:", err);
      res.status(500).send("Error deleting file");
      return;
    }

    res.send("File deleted successfully");
  });
});



app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
