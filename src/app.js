// import { getPokemonById } from "./js-foundation/06-promises";
const { buildLogger } = require("./plugins");
// const { getAge, getUUID } = require('./plugins');

// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
// const { buildMakePerson } = require('./js-foundation/05-factory')

// const getPokemonById = require('./js-foundation/06-promises');

const logger = buildLogger("app.js");

logger.log("Hola mundo");
logger.error("Esto es algo malo");

// getPokemonById(4)
//   .then((pokemon) => console.log({ pokemon }))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("Finalmente"));

// token de acceso
// Publicas
// getUserById(id, (error, user) => {
//   if (error) throw new Error(error);

//   console.log("user", user);
// });

// ! Referencia a la función factory y uso ---
// ! Esto se conoce como inyección de dependencia --- buildMakePerson({ getUUID, getAge })
// const makePerson = buildMakePerson({ getUUID, getAge });

// const obj = { name: 'John', birthdate: '1985-10-21' };

// const john = makePerson( obj );

// console.log({ john });
