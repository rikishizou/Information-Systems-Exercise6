function calculateCalories() {
  const weight = parseFloat(document.getElementById("weight").value);
  const activity = parseFloat(document.getElementById("activity").value);

  if (isNaN(weight)) {
    document.getElementById("result").textContent = "Please enter your weight correctly.";
    return;
  }

  const calories = Math.round(weight * activity);

  document.getElementById("result").textContent =
    `Your daily calorie requirement is approximately ${calories} kcal`;
}
