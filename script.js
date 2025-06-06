function displayGuide(response) {
  let resultElement = document.querySelector("#result");
  let spinner = document.querySelector("#spinner");

  spinner.style.display = "none";
  resultElement.innerHTML = `<strong>Your AI Travel Guide:</strong><br/><br/>${response.data.answer}`;
}

function generateGuide(event) {
  event.preventDefault();

  let userInput = document.querySelector("#travel-input").value.trim();

  if (!userInput) {
    alert("Please describe your trip.");
    return;
  }

  document.querySelector("#spinner").style.display = "block";
  document.querySelector("#result").innerHTML = "";

  let apiKey = "d0e50fa0aabd593o0b84ed0t8acf23ad";
  let context =
    "You are a friendly and knowledgeable travel assistant. Create a short and sweet travel guide (3–5 sentences max). Focus on key highlights, tips, or fun suggestions. Keep it light, engaging, and practical.";
  let prompt = `Give a short travel guide for this trip: ${userInput}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  axios.get(apiUrl).then(displayGuide);
}

document
  .querySelector("#travel-form")
  .addEventListener("submit", generateGuide);
