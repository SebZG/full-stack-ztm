const { readFile } = require("fs");

// 1 - What floor does Santa end up on
// ( --> should go UP 1 floor
// ) --> should go DOWN 1 floor

function question1() {
  readFile("./santa.txt", "utf-8", (err, data) => {
    console.time("Santa-Time");
    const directions = data.toString("utf-8");
    const directionsArr = directions.split("");

    const answer = directionsArr.reduce((prev, curr, idx, directionsArr) => {
      if (curr === "(") {
        return (prev += 1);
      } else if (curr === ")") {
        return (prev -= 1);
      }
    }, 0);

    console.log(answer);
    console.timeEnd("Santa-Time");
  });
}

// question1();

// 2 - When does santa first enter the basement
function question2() {
  readFile("./santa.txt", "utf-8", (err, data) => {
    console.time("Santa-Time");
    const directions = data.toString("utf-8");
    const directionsArr = directions.split("");

    let accumulator = 0;
    let counter = 0;
    const answer = directionsArr.some((val, idx) => {
      if (val === "(") {
        accumulator += 1;
      } else if (val === ")") {
        accumulator -= 1;
      }
      counter++;
      return accumulator < 0;
    });

    console.log(`Basement entered at: ${counter}`);
    console.timeEnd("Santa-Time");
  });
}

question2();
