const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    console.log(userController.getUsers());
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });


test('findByEmail userController', () => {
  let user = new User(1234,"Santiago", "santiago@generation.org");
  userController.add(user);

  expect(userController.findByEmail('santiago@generation.org')).toEqual(user)
})

test('findByID userController', () => {
  let user = new User(12345,"Santiago", "santiago@generation.org");
  userController.add(user);

  expect(userController.findById(12345)).toEqual(user)
})

