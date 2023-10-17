//? 2. In the starter repository, an index.js file should
//? already be present with an array of "users" including
//? name, age, and occupation.
const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 43, occupation: "teacher" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Adam", age: 47, occupation: "teacher" },
  { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
  //? 4. nside your main() function, grab the "root"
  //? element, add an h1 element, give it text of "FREELANCERS",
  //? and append the HTML document.
  const divRoot = document.getElementById("root");
  const h1 = document.createElement("h1");
  h1.innerText = "FREELANCERS";
  divRoot.appendChild(h1);

  //? 5. Continue working inside your main() function to create
  //? an unordered list element.
  const unList = document.createElement("ul");
  unList.innerText = "Available FreeLancers";
  divRoot.appendChild(unList);

  //? 6. Loop through the users array creating li elements.
  for (i = 0; i <= users.length; i++) {
    const usersLi = document.createElement("li");
    usersLi.innerText = `${users[i].name}, ${users[i].age}, ${users[i].occupation}`;

    //? 7. Append those elements to your HTML document.
    unList.appendChild(usersLi);
  }
  //* Styling li based on age range:
  //* 0-18: red
  //* 18-25: green
  //* 26-40: yellow
  //* 41-55: orange
  //* 56+: red

  function colorCode() {
    for (i = 0; i < users.length; i++) {
      if (
        (18 <= users[i].age && user[i].age <= 25) ||
        users[i].occupation === "programmer"
      ) {
        document.getElementsByTagName("li").classlist.add("greenText");
      } else if (
        (26 <= users[i].age && users[i].age <= 40) ||
        users[i].occupation === "driver"
      ) {
        document.getElementsByTagName("li").classlist.add("yellowText");
      } else if (
        (41 <= users[i].age && user[i].age <= 56) ||
        users[i].occupation === "teacher"
      ) {
        document.getElementsByTagName("li").classlist.add("orangeText");
      } else {
        document.getElementsByTagName("li").classlist.add("redText");
      }
    }
  }
  colorCode();
}

//call the main function
main();
colorCode();
