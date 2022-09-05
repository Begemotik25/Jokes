const service = {
  async getRandomJoke() {
    try {
      const responce = await fetch("https://api.chucknorris.io/jokes/random");
      return responce.json();
    } catch (error) {
      console.error(error);
    }
  },
  async getRandomJokeByCategory(category) {
    console.log("categories", category);
    try {
      const responce = await fetch(
        `https://api.chucknorris.io/jokes/random?category=${category}`
      );
      return responce.json();
    } catch (error) {
      console.error(error);
    }
  },
  async getCategories() {
    try {
      const responce = await fetch(
        "https://api.chucknorris.io/jokes/categories"
      );
      return responce.json();
    } catch (error) {
      console.error(error);
    }
  },
};
export default service;
