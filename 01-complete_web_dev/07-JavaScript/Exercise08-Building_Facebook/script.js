var database = [
  {
    username: "Seb",
    password: "jazz123",
  },
];

var newsFeed = [
  {
    username: "Seb",
    timeline: "I love coding!",
  },
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsFeed);
  } else {
    alert("Wrong username and password!");
  }
}

signIn(userNamePrompt, passwordPrompt);
