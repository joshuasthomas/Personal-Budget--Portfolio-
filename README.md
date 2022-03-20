# Personal Budget (Portfolio) - under construction

A Node.js and Express application to manage your personal budget via the use of Envelope Budgeting method.

---
## Introduction

This is a personal implementation of the Personal Budget portfolio project set by Codeacademy. It provides API that allow users to manage budget envelopes and track the balance of each envelope.

## Table of contents
* [Technologies](#technologies)
* [Setup](#setup)
* [APIs](#apis)
* [Contact](#contact)

## Technologies
* Javascript
* Node.js
* Express.js
* VS Code

## Setup

First, clone the repository to your local machine. Then open the root project directory in your terminal and run `npm install` to install the dependencies of this project. Lastly, simply start your server with the `node server.js` command. You'll see `Server listening on port 3001` in the terminal. You can kill either process with the `Ctrl + C` command.

## APIs

- `/envelopes`
    - GET `/envelopes` to get array of envelopes
    - POST `/envelopes` to create a new instance of envelopes
    - GET `/envelopes/:envelopeId` to a single envelope instance based on the envelope `id`.
    - DELETE `/envelopes/:envelopeId` to delete a single envelope by id.

## Schema

Data representation of an envelope instance is based on JSON as shown below

```json
{
    id: "1",
    category: "Groceries",
    cost: 150
}
```
## Contact

