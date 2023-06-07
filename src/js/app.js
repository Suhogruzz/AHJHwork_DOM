const startBtn = document.getElementById("start");
const mainMenu = document.querySelector(".start-menu-container");

function mainGameLogic() {
  [...document.querySelectorAll(".field")].forEach((el) => {
    const div = document.createElement("div");
    div.classList.add("goblin", "hidden");
    el.insertAdjacentElement("afterbegin", div);
  });
  let randomList = new Set();
  while ([...randomList].length < 16)
    randomList.add(Math.floor(Math.random() * 16));
  let n = 0;
  setInterval(() => {
    const goblins = [...document.querySelectorAll(".goblin")];
    const activPosition = goblins.find(
      (el) => !el.classList.contains("hidden")
    );
    const pos = [...randomList][n];
    if (activPosition) {
      activPosition.classList.add("hidden");
      goblins.at(pos).classList.remove("hidden");
    } else {
      goblins.at(pos).classList.remove("hidden");
    }
    n >= 15 ? (n = 0) : n++;
  }, 1000);
}

startBtn.onclick = () => {
  mainMenu.classList.add("hidden");
  mainGameLogic();
};
