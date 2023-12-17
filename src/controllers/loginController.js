const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");

module.exports = {
    signupPage: async (req, res) => {
        res.render("./auth/login.ejs")
    },

    signup: async (req, res) => {

        const auth = getAuth();
        const { email, password } = req.body;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("usuário autenticado"). 
                res.render("logado")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });



    }
}