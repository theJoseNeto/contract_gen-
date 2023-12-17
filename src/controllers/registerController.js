require("firebase/auth");
require("firebase/firestore");

const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth")

module.exports = {

    signinpPage: async (req, res) => {
        res.render("./auth/register.ejs");
    },

    signin: async (req, res) => {
        
        const auth = getAuth();
        const { email, password } = req.body;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                res.redirect("/login"); 
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;


            });

    }

}