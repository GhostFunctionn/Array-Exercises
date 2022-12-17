//1. Breakfast
let breakfast = ["sausage", "bacon", "eggs"];

breakfast.push("toast");
console.log(breakfast.length);

//2. Last value
lastValue = (arr) => {
  return arr[arr.length - 1];
};

console.log(lastValue(breakfast));

//3. Music
let musicGenres = ["Rock", "Rap"];
musicGenres.push("Jazz");
musicGenres[Math.floor(musicGenres.length / 2 - 1)] = "Classical";
musicGenres.unshift("Blues");
musicGenres.unshift("Reggae");
console.log(musicGenres);

//4. Sort
sort = (arr) => {
  return arr.sort();
};

console.log(sort(breakfast));
