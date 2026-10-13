var database = [
  {
    username: "Seb",
    password: "jazz123",
  },
  {
    username: "John",
    password: "jsrocks",
  },
  {
    username: "Jane",
    password: "learningisfun",
  },
];

var newsFeed = [
  {
    username: "Seb",
    timeline: "I love coding!",
  },
  {
    username: "John",
    timeline: "JavaScript is awesome!",
  },
  {
    username: "Jane",
    timeline: "I enjoy learning new things!",
  },
];

function isUserValid(user, pass) {
  for (var i = 0; i < database.length; i++) {
    if (user === database[i].username && pass === database[i].password) {
      return true;
    }
  }
  return false;
}

function signIn(user, pass) {
  if (isUserValid(user, pass)) {
    console.log(newsFeed);
  } else {
    console.log("wrong username or password");
  }
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);
