require("firebase/auth");
require("firebase/firestore");

const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth")

module.exports = {

    signupPage: async (req, res) => {
        res.render("./auth/register.ejs");
    },

    signup: async (req, res) => {

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

// TODO: Desativar este controller por enquanto mas antes: Seguir lista de afazeres do loginController aplicando o que é cabível aqui