let envelopes = [];

const addEnvelope = (newInstance) => {
    //consider adding validation method...
    envelopes.push(newInstance);
};

const getAllEnvelopes = () => {
    return envelopes;
}

module.exports = { addEnvelope, getAllEnvelopes };

/*
    Envelope JSON structure is as follows,
    {
        id: "1",
        category: "Groceries",
        cost: "150"
    }
*/