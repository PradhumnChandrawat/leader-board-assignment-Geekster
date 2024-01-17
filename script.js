const playerListArray = [];

function addPlayer(event) {
  event.preventDefault();
  //   console.log("processing!!!!111");
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const desh = document.getElementById("country").value;
  const scores = document.getElementById("score").value;
  const playerList = document.querySelector(".player-list");

  const playerDataObj = {
    name: firstName + " " + lastName,
    country: desh,
    score: parseInt(scores),
  };
//   firstName.value = "";
//   lastName.value = "";
//   desh.value = "";
  playerListArray.push(playerDataObj);

  playerListArray.sort(function (a, b) {
    return parseInt(b.score) - parseInt(a.score);
  });

  playerList.innerHTML = "";

  for (let i = 0; i < playerListArray.length; i++) {
    let player = playerListArray[i];

    const list = document.createElement("li");
    const fullName = document.createElement("span");
    const countryName = document.createElement("span");
    const currentScore = document.createElement("span");
    const addBtn = document.createElement("button");
    const subBtn = document.createElement("button");
    list.classList.add("player-li");

    fullName.innerText = player.name;
    countryName.innerText = player.country;
    currentScore.innerText = player.score;
    addBtn.innerText = "+" + " ";
    subBtn.innerText = "-";
    addBtn.addEventListener("click", () => increaseScore(i));
    subBtn.addEventListener("click", () => decreaseScore(i));

    list.append(fullName, countryName, currentScore, addBtn, subBtn);
    playerList.append(list);
  }
}

function refreshList() {
  const playerList = document.querySelector(".player-list");

  playerListArray.sort(function (a, b) {
    return parseInt(b.score) - parseInt(a.score);
  });

  playerList.innerHTML = "";

  for (let i = 0; i < playerListArray.length; i++) {
    let player = playerListArray[i];

    const list = document.createElement("li");
    const fullName = document.createElement("span");
    const countryName = document.createElement("span");
    const currentScore = document.createElement("span");
    const addBtn = document.createElement("button");
    const subBtn = document.createElement("button");
    list.classList.add("player-li");

    fullName.innerText = player.name;
    countryName.innerText = player.country;
    currentScore.innerText = player.score;
    addBtn.innerText = "+" + " ";
    subBtn.innerText = "-";
    addBtn.addEventListener("click", () => increaseScore(i));
    subBtn.addEventListener("click", () => decreaseScore(i));

    list.append(fullName, countryName, currentScore, addBtn, subBtn);
    playerList.append(list);
  }
}
function increaseScore(i) {
  playerListArray[i].score += 5;
  refreshList();
}

function decreaseScore(i) {
  playerListArray[i].score -= 5;
  refreshList();
}
