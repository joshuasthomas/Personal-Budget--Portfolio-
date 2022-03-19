const express = require('express');
const envelopesRouter = express.Router();
const db = require("./db.js")

envelopesRouter.get("/", (req, res, next) => {
    res.send(db.getAllEnvelopes());
})

envelopesRouter.post("/", (req, res, next) => {
    if(req.is('json')) {
        db.addEnvelope(req.body);
        res.status(201).send();
    } else {
        res.status(400).send("Envelop data is not in JSON format!");
    }
});

module.exports = envelopesRouter;