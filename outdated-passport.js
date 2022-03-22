const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt")
const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "eportfolio",
    port: "3306"
  })

function initialize(passport, getUserByEmail){
    const authenticateUser = (email,password,done)=>{
        const user = getUserByEmail(email)
        if( user==null){
            return done(null,false,{message:'No user with that email'})
        }
        try{
            connection.query("SELECT Password FROM user where email = '"+email+"'", function (err, result, fields) {
                if(err) 
                {
                  throw err;
                }
                else if(result=="")
                {
                    return done(null, false, {message: "Password incorrect"})
                }
                else if(bcrypt.compare(password, result[0].password))
                {
                    return done(null,user)
                }
            })
        }
        catch(e)
        {
            return done(e)
        }
    }
    passport.use(new LocalStrategy({ usernameField: 'email'}), authenticateUser)
    passport.serializeUser((user, done) => {})
    passport.deserializeUser((id, done) => {})
}
module.exports = initialize