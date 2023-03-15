function jankenpon() {
  var userChoices = prompt("Pilih gunting, batu, dan kertas :");

  var choices = ["gunting", "batu", "kertas"];
  var computerChoices = choices[Math.floor(Math.random() * choices.length)];

  var result;
  if (userChoices === computerChoices) {
    result = "Draw!";
  } else if (
    (userChoices == "gunting" && computerChoices == "batu") ||
    (userChoices == "batu" && computerChoices == "kertas") ||
    (userChoices == "kertas" && computerChoices == "gunting")
  ) {
    result = "Anda Kalah!";
  } else {
    result = "Anda Menang!";
  }

  alert(
    "Anda memilih " +
      userChoices +
      "dan Musuh memilih " +
      computerChoices +
      ". Hasilnya adalah " +
      result
  );
}
