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

const findEnvelopeById = (id) => {
    for(i=0; i < envelopes.length; i++) {
        if(envelopes[i].id == id) {
            return envelopes[i];
        }
    }
    return null;
};

const getTotalBudget = () => {
    return totalbudget;
}

const deleteEnvelopeById = (id) => {
    for(i=0; i < envelopes.length; i++) { //may use array.filter instead
        if(envelopes[i].id == id) {
            const removedEle =  envelopes.splice(i, 1);
            calculateBudget();
            return removedEle;
        }
    }
    return null;
};

module.exports = { addEnvelope, getAllEnvelopes, findEnvelopeById, getTotalBudget, deleteEnvelopeById };

/*
    Envelope JSON structure is as follows,
    {
        id: "1",
        category: "Groceries",
        cost: 150
    }
*/