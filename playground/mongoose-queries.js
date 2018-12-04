const {mongoose} = require(`./../server/db/mongoose`);
const {Todo} = require(`./../server/models/todo`);
const {User} = require(`./../server/models/user`);

var id = `5c05f10740a5165c22a7878c`;

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('ID not found');
  }
  console.log(`Todo By Id`, todo);
}).catch((e) => console.log(e));

var otherId = '5c049a1adfd9e2cc088ae27aa';

User.findById(otherId).then((user) => {
  if (!user) {
    return console.log(`ID not found`);
  }
  console.log(`User By ID`, JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
