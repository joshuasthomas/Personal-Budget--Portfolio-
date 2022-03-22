const express = require('express');
const budgetRouter = express.Router();
const db = require("./db.js");

budgetRouter.get("/", (req, res, next) => {
    const totalbudget = db.getTotalBudget();
    if(totalbudget > 0) {
        res.send(`Total envelope budget is ${totalbudget}`);
    } else {
        res.status(404).send();
    }
});

module.exports = budgetRouter;