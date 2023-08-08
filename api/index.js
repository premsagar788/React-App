const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = 'mongodb+srv://premsaagar:j3ynQc8gs5ZqP49q@cluster0.y92ayeg.mongodb.net/?retryWrites=true&w=majority';

app.use(cors());
app.use(express.json());

// connect new 

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

app.post('/register',   (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = User.create({ username, password });
        res.json(userDoc);
    } catch (e) {
        res.status(404).json(e);
    }
    
});

app.listen(4000);


// j3ynQc8gs5ZqP49q
// mongodb+srv://premsaagar:j3ynQc8gs5ZqP49q@cluster0.y92ayeg.mongodb.net/?retryWrites=true&w=majority