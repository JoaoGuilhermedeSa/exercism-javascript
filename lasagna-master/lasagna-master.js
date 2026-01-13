export function cookingStatus(remainingTime) {
  if (remainingTime === undefined) {
    return 'You forgot to set the timer.';
  }

  if (remainingTime === 0) {
    return 'Lasagna is done.';
  }

  return 'Not done, please wait.';
}

export function preparationTime(layers, averageTimePerLayer = 2) {
  return layers.length * averageTimePerLayer;
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;

  for (const layer of layers) {
    if (layer === 'noodles') {
      noodles += 50;
    } else if (layer === 'sauce') {
      sauce += 0.2;
    }
  }

  return { noodles, sauce };
}

export function addSecretIngredient(friendsList, myList) {
  const secretIngredient = friendsList[friendsList.length - 1];
  myList.push(secretIngredient);
}

export function scaleRecipe(recipe, portions) {
  const scaledRecipe = {};
  const scaleFactor = portions / 2;

  for (const ingredient in recipe) {
    scaledRecipe[ingredient] = recipe[ingredient] * scaleFactor;
  }

  return scaledRecipe;
}
