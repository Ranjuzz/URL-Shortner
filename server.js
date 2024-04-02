import express from "express";
import mongoose from "mongoose";
import env from "dotenv";
import shortUrl from "./models/shorturls.js";

env.config();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

const app = express();
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get("/", async (req, res) => {
  try {
    const shortUrls = await shortUrl.find();
    res.render("index", { shortUrls: shortUrls });
  } catch (error) {
    console.error("Error retrieving short URLs:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/shorturls", async (req, res) => {
  try {
    await shortUrl.create({ full: req.body.fullURL });
    res.redirect('/');
  } catch (error) {
    console.error("Error creating short URL:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get('/:shortUrl', async (req, res) => {
  try {
    const shorturl = await shortUrl.findOne({ short: req.params.shortUrl });
    if (shorturl == null) return res.sendStatus(404);
    shorturl.clicks++;
    await shorturl.save();
    res.redirect(shorturl.full);
  } catch (error) {
    console.error("Error redirecting:", error);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
