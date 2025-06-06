function displayGuide(response) {
  let spinner = document.querySelector("#spinner");

  new Typewriter("#result", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
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
    "You are a friendly and knowledgeable travel assistant. Create a short and sweet travel guide (3–5 sentences max). Focus on key highlights, tips, or fun suggestions. Keep it light, engaging, and practical. Follow prompt instructions";
  let prompt = `Give me a short weekend travel guide in bullet points and show the bullet points in html for this trip: "${userInput}". 
Keep it short and fun with 4 to 5 points. 
Use emojis and include clickable links to real existing websites or places where the user can be able to check the information they require. Please also add fun headings with your response. 
Please follow this instruction at all times when giving a response to omit putting your response in inverted commas`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayGuide);
}

let travelElement = document.querySelector("#travel-form");
travelElement.addEventListener("submit", generateGuide);
