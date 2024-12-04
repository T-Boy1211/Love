function calculateLove() {
  const name1 = document.getElementById("name1").value.trim().toLowerCase();
  const name2 = document.getElementById("name2").value.trim().toLowerCase();

  if (name1 === "" || name2 === "") {
    document.getElementById("result").textContent = "Please enter both names!";
    return;
  }

  const matches = findMatchingLetters(name1, name2);
  const totalLetters = name1.length + name2.length;
  const score = Math.floor((matches / totalLetters) * 100);

  let message = "";
  if (score > 85) {
    message = "You two are a perfect match! ❤️";
  } else if (score > 65) {
    message = "There's definitely a spark! 💕";
  } else {
    message = "Well, opposites attract! 😊";
  }

  document.getElementById("result").textContent = `${name1} and ${name2}: ${score}% compatibility. ${message}`;
}

function findMatchingLetters(name1, name2) {
  let matches = 0;
  const letters1 = name1.split("");
  const letters2 = name2.split("");

  letters1.forEach(letter => {
    if (letters2.includes(letter)) {
      matches++;
      letters2.splice(letters2.indexOf(letter), 1);
    }
  });

  return matches;
}
