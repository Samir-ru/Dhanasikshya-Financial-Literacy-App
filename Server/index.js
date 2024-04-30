const express = require("express")
const collection = require("./mongo")
const conDB = require("./conDB")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true }))
app.use(cors());
const mongoose = require("mongoose")
try {
  mongoose.connect('mongodb://localhost:27017/Dhan');
} catch (error) {
  console.error("Error connecting to the database:", error);
}



port = 5000;

app.post('/Login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await collection.findOne({ email: email });
    if (user) {
      if (user.password == password) {
        res.json({ message: "Login successful", user: user });
      } else {
        res.json({ message: "Incorrect password" });
      }
    } else {
    
      res.json({ message: "User does not exist" });
    }
  } catch (e) {
    console.error("Error occurred during login:", e);
    res.status(500).json({ error: "Internal server error" });
  }
});



app.post('/Signup', async (req, res) => {
  const data = req.body;

  try {
      const check = await collection.findOne({ email: data.email });
      if (check) {
          res.json("exist");
      } else {
          const user = new collection(data);
          await user.save();
          console.log("User Saved:", user);
          res.json({ message: "User registered successfully", user: user });
      }
  } catch (e) {
      console.error("Error occurred during signup:", e);
      res.status(500).json({ error: "Internal server error" });
  }
});


app.get('/UserProfile', async (req, res) => {
    const {Gemail}= req.query;
    try {
        const user = await collection.findOne({ email: Gemail });
      if (user) {
        res.json({ user });
      } else {
        res.status(401).json({ error: 'Unauthorized' });
      }
    } catch (error) {
      console.error("Error occurred while fetching user profile:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });


  app.post('/Contact', async (req, res) => {
    const data = req.body;
    try {
        const message = new conDB(data);
        await message.save();
        console.log(data)
        res.json("Message Received");
    } catch (e) {
        console.error("Error occurred during saving message:", e);
        res.status(500).json({ error: "Internal server error" });
    }
});

  
app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});

