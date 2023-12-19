const mongoose = require("mongoose");


const contractScheema = mongoose.Schema({
    docName: { type: String, required: true },
    docType: { type: String, required: true },
    docDate: { type: Date, required: true },
    Approved: { type: Boolean, required: true },
});

const contractModel = mongoose.model("Contracts", contractScheema); 

class Contracts { 
    constructor(body){
        this.body = body;
    }

    saveContracts = async () => {
        
    }
}

