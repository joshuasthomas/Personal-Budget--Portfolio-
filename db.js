let envelopes = [];
let totalbudget = 0;

const addEnvelope = (newInstance) => {
    //consider adding validation method...
    envelopes.push(newInstance);
    calculateBudget();
};

const calculateBudget = () => {
    envelopes.forEach(env => {
        totalbudget += env.cost;
    })
};

const getAllEnvelopes = () => {
    return envelopes;
};

const getEnvelopeById = (id) => {
    for(i=0; i < envelopes.length; i++) {
        let envelope = envelopes[i];
        if(envelope.id == id) {
            return envelope;
        }
    }
    return null;
};

const getTotalBudget = () => {
    return totalbudget;
}

module.exports = { addEnvelope, getAllEnvelopes, getEnvelopeById, getTotalBudget };

/*
    Envelope JSON structure is as follows,
    {
        id: "1",
        category: "Groceries",
        cost: 150
    }
*/