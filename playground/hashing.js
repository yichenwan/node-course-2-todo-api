const {SHA256} = require(`crypto-js`);
const jwt = require(`jsonwebtoken`);
const bcrypt = require(`bcryptjs`);

var password = `123abc!`;

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashPassword = '$2a$10$i15G6pv3Y1NEaRDWUUkfpO127Pbuo5zP5rfddESl9Rm7Q.ziU41Du';

bcrypt.compare(password, hashPassword, (err, res) => {
  console.log(res);
});

// var message = `I am user number 3`;
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, `123abc`);
// console.log(token);
//
// var decode = jwt.verify(token, `123abc`);
// console.log(`decode`, decode);
