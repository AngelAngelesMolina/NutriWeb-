const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const { encuentraUsuarioPorId } = require("../services/usuario");

passport.use(
  new Strategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async function (payload, done) {
      const usuario = await encuentraUsuarioPorId(payload.id);

      if (!usuario) {
        return done({ message: "El usuario no existe en la base de datos." });
      }

      /**
       * Se crea el request.user tal como lo describe la documentación:
       * https://www.passportjs.org/concepts/authentication/middleware/
       */
      done(null, usuario);
    }
  )
);

module.exports = passport.authenticate("jwt", { session: false });
