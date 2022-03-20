const express = require('express');
const envelopesRouter = express.Router();
const db = require("./db.js")

envelopesRouter.get("/", (req, res, next) => {
    res.send(db.getAllEnvelopes());
})

envelopesRouter.post("/", (req, res, next) => {
    if(req.is('json')) {
        db.addEnvelope(req.body);
        console.log(`Total budget is ${db.getTotalBudget()}`)
        res.status(201).send();
    } else {
        res.status(400).send("Envelope data is not in JSON format!");
    }
});

envelopesRouter.param('envelopeId', (req, res, next, id) => {
    //tbd
    next()
});

envelopesRouter.get("/:envelopeId", (req, res, next) => {
    const getEnvelope = db.findEnvelopeById(req.params.envelopeId);
    if(getEnvelope) {
        res.send(getEnvelope);
    } else {
        res.status(404).send();
    }
});

envelopesRouter.delete("/:envelopeId", (req, res, next) => {
    const removedEnvelope = db.deleteEnvelopeById(req.params.envelopeId);
    if(removedEnvelope) {
        res.status(204).send();
    } else {
        res.status(404).send();
    }
})



module.exports = envelopesRouter;