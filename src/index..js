function displayRecipe(response) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: response.data.answer,
    delay: 50,
    cursor: "",
    loop: false,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#user-instructions");
  let apiKey = "feat836b3fcca8a0oba283a48d9a8f94";
  let context =
    "You are an AI Herbalist who loves to create herbal recipes. Create herbal remedy recipes from the herb the user enter. If the user enters multiple herbs, find a recipe that includes all listed herbs. Use an unordered list <ul> to list all of the ingredients. Use an ordered list <ol> to list all of the steps.";
  let prompt = `Generate an herbal remedy recipe about ${promptInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let herbElement = document.querySelector("#recipe");
  herbElement.classList.remove("hidden");
  herbElement.innerHTML = `Generating. . .  &nbsp;<span class="spin"> ⌛</span `;

  axios.get(apiUrl).then(displayRecipe);
}

let herbFormElement = document.querySelector("#recipe-generator-form");
herbFormElement.addEventListener("submit", generateRecipe);
