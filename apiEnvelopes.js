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

envelopesRouter.put("/", (req, res, next) => {
    const updEnvelope = db.updateEnvelope(req.body);
    if(updEnvelope) {
        res.send(updEnvelope);
    } else {
        res.status(400).send();
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

// FUTURE: Add new PUT method to update by envelope object key

envelopesRouter.delete("/:envelopeId", (req, res, next) => {
    const removedEnvelope = db.deleteEnvelopeById(req.params.envelopeId);
    if(removedEnvelope) {
        res.status(204).send();
    } else {
        res.status(404).send();
    }
})


//transfer balance between envelopes using '?amount=' query

envelopesRouter.put("/:fromId/:toId", (req, res, next) => {
    const fromId = req.params.fromId;
    const toId = req.params.toId;
    const amount = parseInt(req.query.amount);  //convert to integer

    if(amount) {
        if(amount > 0) {
            const toEnvelope = db.transferEnvelopeBudget(fromId, toId, amount);
            return toEnvelope ? res.send(toEnvelope) : res.status(400).send();
        } else {
            res.status(400).send("Set amount value to be more than zero.");
        }
    } else {
        res.status(400).send("Amount value is not valid.");
    }
});


module.exports = envelopesRouter;