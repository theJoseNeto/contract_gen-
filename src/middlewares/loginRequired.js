const { getAuth, onAuthStateChanged } = require("firebase/auth");
const firebaseConfig = require("../config/firebase/index");


module.exports = {
    loginRequired: async (req, res, next) => {

        const user = getAuth().currentUser; 
        if(user !== null){ 
            return next(); 
        }else {
            return res.redirect("/entrar")
        }

    }
}