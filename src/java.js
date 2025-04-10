function generateRecipe(event){
event.preventDefault();
 // Clear previous recipe
new Typewriter("#recipe", {
  strings: "bread",
  autoStart: true,
  cursor: null,
  delay: 1,
});
}

let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generateRecipe); 