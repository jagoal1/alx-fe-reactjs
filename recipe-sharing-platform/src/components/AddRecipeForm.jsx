import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};

    if (!title.trim()) {
      formErrors.title = "Recipe title is required.";
    }

    if (!ingredients.trim()) {
      formErrors.ingredients = "Ingredients are required.";
    } else {
      const ingredientList = ingredients.split("\n").filter((i) => i.trim());
      if (ingredientList.length < 2) {
        formErrors.ingredients = "Please list at least two ingredients.";
      }
    }

    if (!steps.trim()) {
      formErrors.steps = "Preparation steps are required.";
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newRecipe = {
        title,
        ingredients: ingredients.split("\n").map((i) => i.trim()),
        instructions: steps.split("\n").map((s) => s.trim()),
      };
      console.log("New Recipe Submitted:", newRecipe);
      // In a real app, you’d send this to a backend or update state
      alert("Recipe submitted successfully!");
      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Add a New Recipe</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-6"
      >
        {/* Recipe Title */}
        <div>
          <label className="block font-semibold mb-2">Recipe Title</label>
          <input
            type="text"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter recipe title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-semibold mb-2">Ingredients</label>
          <textarea
            rows="4"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter ingredients (one per line)"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block font-semibold mb-2">Preparation Steps</label>
          <textarea
            rows="4"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter preparation steps (one per line)"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
