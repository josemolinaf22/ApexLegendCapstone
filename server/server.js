const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
const { legends } = require("../data.js");
const favLegends = [];

const port = process.env.PORT || 4006;

app.get("/favi", (req, res) => {
  res.sendFile(path.join(__dirname, "../favicon.ico"));
});
//index files
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});
app.get("/css", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.css"));
});
app.get("/js", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.js"));
});
//map files
app.get("/maps", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/maps.html"));
});

app.get("/mapsjs", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/maps.js"));
});

app.get("/mapscss", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/maps.css"));
});
// about files
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/about.html"));
});

app.get("/aboutjs", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/about.js"));
});

app.get("/aboutcss", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/about.css"));
});

//all files
app.get("/maincss", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/main.css"));
});

app.get("/api/legends", (req, res) => {
  try {
    res.status(200).send(legends);
  } catch (error) {
    console.log("Error getting legends", error);
    res.sendStatus(400);
  }
});

app.get("/api/favLegends", (req, res) => {
  try {
    res.status(200).send({ favLegends });
  } catch (error) {
    console.log("Error sending 5 legends", error);
    res.status(400);
  }
});

app.post("/api/favLegends", (req, res) => {
  try {
    if (favLegends.length >= 5) {
      res.status(400).send("Too many legends!");
    } else {
      favLegends.push(req.body);
      res.status(200).send(favLegends);
    }
  } catch (error) {
    res.status(400);
  }
});
app.delete("/api/favLegends/:id", (req, res) => {
  const { id } = req.params;
  try {
    favLegends.forEach((legend, index) => {
      if (+legend.id === +id) {
        favLegends.splice(index, 1);
        res.status(200).send(favLegends);
      }
    });
  } catch (error) {
    res.status(400);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
