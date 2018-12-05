const {ObjectID} = require(`mongodb`);

const {mongoose} = require(`./../server/db/mongoose`);
const {Todo} = require(`./../server/models/todo`);
const {User} = require(`./../server/models/user`);

// Todo.remove
Todo.remove({}).then((result) => {
  console.log(result);
});

// Todo.findOneAndRemove({_id: `5c076826551e7b76facc5741`}).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove(`5c076826551e7b76facc5741`).then((todo) => {
  console.log(todo);
})
