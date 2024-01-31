function displayRecipe(response) {
  event.preventDefault(); // Remove this line if displayRecipe is not used as an event handler

  new Typewriter("#recipe", {
    strings: [response.data.answer], // Assuming response.data.answer contains the generated recipe
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#user-instructions");
  let apiKey = "feat836b3fcca8a0oba283a48d9a8f94";
  let context =
    "You are an AI Herbalist who loves to create herbal recipes. Create herbal remedy recipes from the herb the user enter. If the user enters multiple herbs, find a recipe that includes all listed herbs. ";
  let prompt = `Generate an herbal remedy recipe about ${promptInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let herbElement = document.querySelector("#recipe");
  herbElement.classList.remove("hidden");
  herbElement.innerHTML = `Generating. . .  &nbsp;<span class="spin"> ⌛</span `;

  axios.get(apiUrl).then(displayRecipe);
}

let herbFormElement = document.querySelector("#recipe-generator-form");
herbFormElement.addEventListener("submit", generateRecipe);
