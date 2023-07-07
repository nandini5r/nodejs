import Joi from "joi";

const userSchema = Joi.object({
  name: Joi.string().min(5).max(30).required(),
  age: Joi.number().required().min(0).max(100),
}).options({ abortEarly: false });

let users = [
  { id: 1, name: "nandini", age: 10 },
  { id: 2, name: "Ananya", age: 15 },
  { id: 3, name: "Ayush", age: 20 },
  { id: 4, name: "Rishabh", age: 20 },
  { id: 5, name: "Shivam", age: 20 },
];

// Controller methods
//get
const getAllUsers = (req, res) => {
  res.json(users);
};
//get by Id
const getUsersById = (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.userId));

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

//post
const createUser = (req, res) => {
  const { name, age } = req.body;
  console.log("hyy");
  console.log(req.body);
  console.log(userSchema.validate(req.body), "val");
  const validate = userSchema.validate(req.body);
  if (validate.error) {
    return res.send({ message: validate.error.message });
  }

  if (name) {
    const newUser = { id: users.length + 1, name, age };
    users.push(newUser);
    res.status(201).json(newUser);
  } else {
    res.status(400).json({ message: "Name is required" });
  }
};

//put
const updateUser = (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.userId));
  if (user) {
    const { name, age } = req.body;

    const validate = userSchema.validate(req.body);
    if (validate.error) {
      return res.send({ message: validate.error.message });
    }
    if (name) {
      user.name = name;
      user.age = age;
      res.json(user);
    } else {
      res.status(400).json({ message: "Name is required" });
    }
  } else {
    res.status(404).json({ message: "User not found" });
  }
};
//delete
const deleteUser = (req, res) => {
  console.log("user");
  const userId = parseInt(req.params.userId);
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.sendStatus(204);
    console.log("success");
  } else {
    res.status(404).json({ message: "User not found" });
  }
};
export default {
  getAllUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
};
