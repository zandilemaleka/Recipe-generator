function displayRecipe(response) {
new Typewriter("#recipe", {
  strings: response.data.answer,
  autoStart: true,
  cursor: null,
  delay: 1,
});
}    



function generateRecipe(event){
event.preventDefault();

let InstructionInput = document.querySelector("#ingredients");
let apiKey = "05b1af1a7feb6t6o414b06b73f1569ed";
let prompt = `Generate a recipe for a dish using ${InstructionInput.value}`;
let context = "You are a great cook, and love to come up with new recipes, that are easy to make and delicious. Put the name of the dish in the first line and inside a <strong/> element, and then write the recipe. Use a list format for the ingredients with <br/> element, and then write the instructions. Make sure to include cooking time and serving size. Make it fun and engaging.";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let recipeElement = document.querySelector("#recipe");
recipeElement.classList.remove("hidden");
recipeElement.innerHTML = ` <div class= "blink">⏳Generating the recipe for ${InstructionInput.value}...</div>`;

axios.get(apiUrl).then(displayRecipe);
}
 // Clear previous recipe


let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generateRecipe); 