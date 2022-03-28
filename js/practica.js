const books = [
  {
    id: "1",
    title: `Apple. Эволюция компьютера`,
    author: `Владимир Невзоров`,
    img: `https://bukva.ua/img/products/449/449532_200.jpg`,
    plot: `Богато иллюстрированный хронологический справочник по истории компьютеров, в котором увлекательно 
    и в структурированном виде изложена информация о создании и развитии техники Apple на фоне истории 
    персональных компьютеров в целом.
    В книге даны описания десятков наиболее значимых моделей устройств как Apple, так и других производителей, 
    сопровождающиеся большим количеством оригинальных студийных фотографий.
    Книга предназначена для широкого круга читателей, интересующихся историей электроники. 
    Она также может послужить источником вдохновения для дизайнеров, маркетологов и предпринимателей.`,
  },
  {
    id: "2",
    title: `Как объяснить ребенку информатику`,
    author: `Кэрол Вордерман`,
    img: `https://bukva.ua/img/products/480/480030_200.jpg`,
    plot: `Иллюстрированная энциклопедия в формате инфографики о технических, социальных и культурных аспектах 
    в информатике. Пошагово объясняет, как детям максимально эффективно использовать компьютеры и интернет-сервисы, 
    оставаясь в безопасности. 
    Книга рассказывает обо всем: от хранения данных до жизни в интернет-пространстве, 
    от программирования до компьютерных атак. О том, как компьютеры функционируют, о современном программном 
    обеспечении, устройстве Интернета и цифровом этикете. Все концепты - от хакера до биткоина - 
    объясняются наглядно с помощью иллюстраций и схем.`,
  },
  {
    id: "3",
    title: `Путь скрам-мастера. #ScrumMasterWay`,
    author: `Зузана Шохова`,
    img: `https://bukva.ua/img/products/480/480090_200.jpg`,
    plot: `Эта книга поможет вам стать выдающимся скрам-мастером и добиться отличных результатов с вашей командой. 
    Она иллюстрированная и легкая для восприятия - вы сможете прочитать ее за выходные, а пользоваться полученными 
    знаниями будете в течение всей карьеры.
    Основываясь на 15-летнем опыте, Зузана Шохова рассказывает, какие роли и обязанности есть у скрам-мастера, 
    как ему решать повседневные задачи, какие компетенции нужны, чтобы стать выдающимся скрам-мастером, 
    какими инструментами ему нужно пользоваться.`,
  },
];

const divRootRef = document.querySelector("#root");
// создаем два div
const firstDivRef = document.createElement("div");
const secondDivRef = document.createElement("div");
// добавляем классы на созданные div
firstDivRef.classList.add("first-div");
secondDivRef.classList.add("second-div");
document.querySelector("#root").append(firstDivRef, secondDivRef);
const titleRef = document.createElement("h1");
const bookListRef = document.createElement("ul");
const addBtnRef = document.createElement("button");
titleRef.textContent = "Library";
addBtnRef.textContent = "Add";
firstDivRef.append(titleRef, bookListRef, addBtnRef);
const linkBookList = document.querySelector("ul");

function renderList() {
  const markup = books
    .map(({ title }) => {
      return `<li>
            <p>${title}</p>
            <button type="button">Edit</button>
            <button type="button">Del</button>
            </li > `;
    })
    .join("");
  bookListRef.insertAdjacentHTML("afterbegin", markup);
}
// renderList();

function bookPreviewMarkup({ title, author, img, plot }) {
  return `<div>
            <h2>${title}</h2>
            <p>${author}</p>
            <img src='${img}' alt='Титульная страница книги' width="250px">
            <p>${plot}</p>
            </div > `;
}

function formMarkup({ title, author, img, plot }) {
  return `<form action="">
    <label>
    Title
    <input type="text" name="title" value=${title}/>
    </label>
    <label>
    Author
        <input type="text" name="author" value=${author} />
    </label>
    <label>
    Image URL
        <input type="text" name="img" value=${img}/>
    </label>
    <label>
    Plot
        <input type="text" name="plot" value=${plot}/>
    </label>
    <button type="button">Save</button>
    </form>`;
}

// console.log(renderList());
// console.log(bookPreviewMarkup(books[0]))
// console.log(formMarkup(books[0]));

// вариант 1
// function isValidWalk(walk) {
//   //insert brilliant code here
//   const north = 1;
//   const south = -1;
//   const east = 1;
//   const west = -1;
//   let verticalWalkNorthsSouth = 0;
//   let horizontalWalkEastWest = 0;
//   for (let i = 0; i <= walk.length - 1; i += 1) {
//     if (walk[i].includes("n")) {
//       walk[i] = north;
//       verticalWalkNorthsSouth += walk[i];
//     } else if (walk[i].includes("s")) {
//       walk[i] = south;
//       verticalWalkNorthsSouth += walk[i];
//     } else if (walk[i].includes("e")) {
//       walk[i] = east;
//       horizontalWalkEastWest += walk[i];
//     } else if (walk[i].includes("w")) {
//       walk[i] = west;
//       horizontalWalkEastWest += walk[i];
//     }
//   }
//   if (
//     horizontalWalkEastWest + verticalWalkNorthsSouth === 0 &&
//     walk.length === 10
//   ) {
//     return console.log("should return true");
//   } else {
//     return console.log("should return false");
//   }
// }

// вариант 2
function isValidWalk(walk) {
  //insert brilliant code here
  let north = [];
  let south = [];
  let east = [];
  let west = [];
  north = walk.filter((elem) => elem === "n");
  south = walk.filter((elem) => elem === "s");
  east = walk.filter((elem) => elem === "e");
  west = walk.filter((elem) => elem === "w");

  if (
    north.length + south.length + east.length + west.length === 10 &&
    north.length - south.length === 0 &&
    east.length - west.length === 0
  ) {
    return true;
  } else {
    return false;
  }
}

// isValidWalk(["n"]);
// isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]);
// isValidWalk(["w"]);
// isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]);
// isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]);

function anagrams(word, words) {
  let array = [];
  array = [...words].filter(
    (elem) =>
      elem
        .toUpperCase()
        .split("")
        .sort((a, b) => a.localeCompare(b))
        .join("") ===
      word
        .toUpperCase()
        .split("")
        .sort((a, b) => a.localeCompare(b))
        .join("")
  );

  console.log(array);
  return array;
}
// anagrams("laser", ["lazing", "lazy", "lacer"]);
// anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]);
// anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]);

function generateHashtag(str) {
  if (str.trim().length === 0) {
    return false;
  }
  const copyStr = str
    .trim()
    .split(" ")
    .map((elem) => {
      let array = [];
      elem.trim();
      array = [...elem.split("")];
      if (array.length > 0) {
        let first = array[0].toUpperCase();
        array.splice(0, 1, first);
      }

      return array.join("");
    })
    .join("");
  if (copyStr.length > 139) {
    return false;
  }
  console.log(`#${copyStr}`);
  return `#${copyStr}`;
}

// generateHashtag("");
// generateHashtag(" ".repeat(200));
// generateHashtag("Do We have A Hashtag");
// generateHashtag("Codewars" + "code");
// generateHashtag("code");
// generateHashtag("code" + " ".repeat(140) + "wars");
// generateHashtag("do we have a hashtag");

function humanReadable(seconds) {
  let countSeconds = 0;
  let countMinutes = 0;
  let countHours = 0;
  countMinutes = Math.floor(seconds / 60);
  countSeconds = seconds - countMinutes * 60;
  countHours = Math.floor(countMinutes / 60);
  countMinutes -= countHours * 60;

  return `${String(countHours).padStart(2, 0)}:${String(countMinutes).padStart(
    2,
    0
  )}:${String(countSeconds).padStart(2, 0)}`;
}

// humanReadable(0);
// humanReadable(529);
// humanReadable(59);
// humanReadable(3599);
// humanReadable(3600);
// humanReadable(359999);

function validSolution(board) {
  for (let i = 0; i < board.length; i += 1) {
    let resultVertical = 0;
    let resultHorisont = 0;
    for (let b = 0; b < board.length; b += 1) {
      if (board[b][i] === 0 || board[i][b] === 0) {
        console.log(false);
        return false;
      } else {
        resultVertical += board[b][i];
        resultHorisont += board[i][b];
      }
    }
    if (resultVertical !== 45 || resultHorisont !== 45) {
      console.log(resultVertical);
      console.log(resultHorisont);
      console.log(false);
      return false;
    }
  }
  for (let x = 0; x <= 8; x += 3) {
    for (let z = 0; z <= 8; z += 3) {
      let resultHorisontSub = 0;
      for (let h = x; h <= x + 2; h += 1) {
        for (let v = z; v <= z + 2; v += 1) {
          console.log(`${h}+${v}`);
          resultHorisontSub += board[h][v];
        }
      }
      console.log(resultHorisontSub);
      console.log(`-----------------------------`);
      if (resultHorisontSub !== 45) {
        console.log(resultHorisontSub);
        console.log(false);
        return false;
      }
    }
  }
  console.log(true);
  return true;
}

// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9],
// ]);

// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 0, 3, 4, 8],
//   [1, 0, 0, 3, 4, 2, 5, 6, 0],
//   [8, 5, 9, 7, 6, 1, 0, 2, 0],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 0, 1, 5, 3, 7, 2, 1, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 0, 0, 4, 8, 1, 1, 7, 9],
// ]);

// validSolution([
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [2, 3, 1, 5, 6, 4, 8, 9, 7],
//   [3, 1, 2, 6, 4, 5, 9, 7, 8],
//   [4, 5, 6, 7, 8, 9, 1, 2, 3],
//   [5, 6, 4, 8, 9, 7, 2, 3, 1],
//   [6, 4, 5, 9, 7, 8, 3, 1, 2],
//   [7, 8, 9, 1, 2, 3, 4, 5, 6],
//   [8, 9, 7, 2, 3, 1, 5, 6, 4],
//   [9, 7, 8, 3, 1, 2, 6, 4, 5],
// ]);

// validSolution([
//   [1, 3, 2, 5, 7, 9, 4, 6, 8],
//   [4, 9, 8, 2, 6, 1, 3, 7, 5],
//   [7, 5, 6, 3, 8, 4, 2, 1, 9],
//   [6, 4, 3, 1, 5, 8, 7, 9, 2],
//   [5, 2, 1, 7, 9, 3, 8, 4, 6],
//   [9, 8, 7, 4, 2, 6, 5, 3, 1],
//   [2, 1, 4, 9, 3, 5, 6, 8, 7],
//   [3, 6, 5, 8, 1, 7, 9, 2, 4],
//   [8, 7, 9, 6, 4, 2, 1, 3, 5],
// ]);

function incrementString(strng) {
  // return incrementedString
  let arr = strng.split("");
  let numberArr = [];

  numberArr = arr
    .map((elem) => Number(elem))
    .filter((elem) => !Number.isNaN(elem));
  if (numberArr.length > 0) {
    const length = numberArr.length;
    const newNumber = String(Number(numberArr.join("")) + 1).padStart(
      length,
      0
    );
    arr.splice(arr.length - length, length);
    console.log(`${arr.join("")}` + `${newNumber}`);
    return `${arr.join("")}` + `${newNumber}`;
  } else {
    console.log(`${arr.join("")}` + `1`);
    return `${arr.join("")}` + `1`;
  }
}
// incrementString("foobar001");
// incrementString("");
// incrementString("foo009");
// incrementString("foobar000");

// Практика 28.03.2022_______________________
const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];
const arrayAge = users
  .filter((user) => user.age > 30)
  .some((user) => user.isActive);
// console.log("~ ~ arrayAge", arrayAge);
const arrayFriends = users.flatMap((user) => user.friends);
// console.log("~ ~ arrayFriends", arrayFriends);
const balanceArray = users.find((user) => user.balance === 3793);
// console.log("~ ~ balanceArray", balanceArray);
const allBalance = users.reduce((acc, user) => {
  return acc + user.balance;
}, 0);
// console.log("~ ~ allBalance", allBalance);
const sortFriends = [...users].sort(
  (a, b) => b.friends.length - a.friends.length
);
// console.log("~ ~ sortFriends", sortFriends);

function finalObject(users) {
  const object = {};
  const keys = Object.keys(users[0]);
  for (const key of keys) {
    object[key] = [];
  }
  for (const key in object) {
    for (const user of users) {
      object[key].push(user[key]);
    }
  }
  const newObject = {};
  for (const key in object) {
    newObject[key] = object[key]
      .flat()
      .filter((elem, index, array) => array.indexOf(elem) === index);
  }
  console.log(newObject);
}
finalObject(users);

// snail = function (array) {
//   // enjoy
// };

// snail([[]]);
// snail([[1]]);
// snail([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]);
// snail([
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25],
// ]);

function zero(f) {
  let x = 0;
  return 0;
}
function one(f) {
  let x = 1;
  return 1;
}
function two(f) {
  let x = 2;
  return 2;
}
function three(f) {
  let x = 3;
  return 3;
}
function four(f) {
  let x = 4;
  return 4;
}
function five() {
  let x = 5;
  if (f === undefined) {
    return x;
  } else {
    return (x = f(y));
  }
}
function six(f) {
  let x = 6;
  return 6;
}
function seven() {
  let x = 7;
  if (f === undefined) {
    return x;
  } else {
    return (x = f(y));
  }
}
function eight(f) {
  let x = 8;
  return 8;
}
function nine(f) {
  let x = 9;
  x = f(y);
  return 9;
}

function plus(y) {
  return `+${y}`;
}
function minus(y) {
  return `-${y}`;
}
function times() {
  return x * y;
}
function dividedBy(y) {
  return `/${y}`;
}
// console.log(seven(times(five())));
// seven(times(five()));
