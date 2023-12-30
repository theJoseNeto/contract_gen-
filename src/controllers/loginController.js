const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const { join } = require("path");
module.exports = {

    signinpPage: async (req, res) => {
        res.render("./auth/login.ejs", { message: "", filePAth: join(__dirname, "./public/civilbuild.png") });
    },

    signin: async (req, res) => {

        const auth = getAuth();
        const { email, password } = req.body;

        if (email && password) {

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {

                    return res.redirect("/contracts")
                })
                .catch(async (error) => {
                    await req.flash("Error", "Credenciais inválidas");
                    const message = req.flash("Error")
                    return res.render("auth/login.ejs", { message });
                })


        } else {
            req.flash("Error")
        }
    }
}