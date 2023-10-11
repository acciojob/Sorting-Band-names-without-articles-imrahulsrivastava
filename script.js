// Write your code here

let touristSpots = ["The Virupaksha Temple", "Victoria Memorial", "TajMahal"];

function removeArticles(name) {
  const articles = ["a", "an", "the"];
  for (const article of articles) {
    if (name.toLowerCase().startsWith(article + " ")) {
      return name.slice(article.length + 1).trim();
    }
  }
  return name;
}

touristSpots.sort((a, b) => (removeArticles(a) > removeArticles(b) ? 1 : -1));

touristSpots.forEach(function (touristSpots) {
  console.log(touristSpots);
});
