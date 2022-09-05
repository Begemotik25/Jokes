import { React, useState, useEffect } from "react";

import JokeService from "../../services/joke";

import "./styles.scss";
const JokesPage = () => {
  const [joke, setJoke] = useState({});
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const categories = await JokeService.getCategories();
    setCategories(categories);
  };
  const onClickGenerateJoke = async () => {
    let responce;
    if (selectedCategory) {
      responce = await JokeService.getRandomJokeByCategory(selectedCategory);
    } else {
      responce = await JokeService.getRandomJoke();
    }

    setJoke(responce);
  };
  const onChangeCategoryFilter = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="jokes-page">
      <div className="joke-card">
        <div className="image">
          <img
            alt="No picture"
            src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
          ></img>
        </div>
        <div className="button">
          <button onClick={onClickGenerateJoke}>Generate joke</button>
        </div>
        <div className="text">{joke.value}</div>
        <hr />
        <div className="filters">
          <div className="title">Filters</div>
          <div className="categories">
            <div className="name">Category</div>
            <div className="select">
              <select
                name="category"
                id="category"
                onChange={onChangeCategoryFilter}
              >
                <option value=""></option>
                {categories.map((value) => {
                  console.log(value);
                  return (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JokesPage;
