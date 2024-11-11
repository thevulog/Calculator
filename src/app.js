// document.getElementById('p1Button').onclick = function() {
//     alert('Player 1 button clicked');
//   };
//   document.getElementById('p2Button').onclick = function() {
//     alert('Player 2 button clicked');
//   };

function setupScoreButtons() {
  const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#player1DisplaySc"),
  };

  const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#player2DisplaySc"),
  };

  const resetButton = document.querySelector("#reset");
  const winningScoreSelect = document.querySelector("#playto");
  let winningScore = 5;
  let isGameOver = false;
  //refactor code here
  function updateScore(player,opponent) {


  }

  p1Button.addEventListener("click", function () {
    if (!isGameOver) {
      p1Score += 1;
      if (p1Score === winningScore) {
        isGameOver = true;
        p1Display.classList.add("text-success");
        p2Display.classList.add("text-danger");
      }
      p1Display.textContent = p1Score;
    }
  });

  p2Button.addEventListener("click", function () {
    if (!isGameOver) {
      p2Score += 1;
      if (p2Score === winningScore) {
        p2Display.classList.add("text-success");
        p1Display.classList.add("text-danger");
        isGameOver = true;
      }
      p2Display.textContent = p2Score;
    }
  });

  winningScoreSelect.addEventListener("change", function () {
    // console.log(this.value);

    winningScore = parseInt(this.value); //convert to integer
    // console.log(winningScore);
    reset();
  });

  resetButton.addEventListener("click", reset);

  function reset() {
    isGameOver = false;
    p1Score = 0;
    p1Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("text-danger", "text-success");
    p2Display.classList.remove("text-danger", "text-success");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setupScoreButtons();
});
