function obliczKoszt() {
  var cenaZaKm = 20;
  var liczbaKm = parseFloat(document.getElementById("kilometers").value);
  if (isNaN(liczbaKm)) {
    document.getElementById("result").innerText =
      "Proszę wprowadzić poprawną liczbę kilometrów.";
    return;
  }
  var koszt = cenaZaKm * liczbaKm;
  document.getElementById("result").innerText =
    "Koszt podróży: " + koszt.toFixed(2) + " zł";
}

document
  .getElementById("calculateButton")
  .addEventListener("click", obliczKoszt);
