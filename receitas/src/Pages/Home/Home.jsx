import React, { useState, useEffect } from "react";
import { Mealitens } from "./mealItens";
import { Header, Input, Button } from "./style";
import { Container } from "./style";

export function Home() {
  const [search, setSearch] = useState('');
  const [myMeal, setMeal] = useState();
  const [showSuggestions, setSuggestions] = useState(true);



  const searchMeal = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) =>
          res.json().then((data) => {
            setMeal(data.meals);
            setSuggestions(false)
          })
        );
    }
  }

  const searchRandomMeals = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
      .then((res) =>
        res.json().then((data) => {
          setMeal(data.meals);
        })
      );
  };

  useEffect(() => {
    searchRandomMeals();
  }, []);

  return (
    <>
      <Header>
        <h1>Find Recipes</h1>
        <Input
          type="text"
          placeholder="Search Recipes"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          onKeyPress={searchMeal}
        />
        <Button onClick={searchMeal}>Find</Button>
        {showSuggestions && <h2>Sugestões</h2>}
      </Header>

      <Container>
      
        {myMeal == null ? <p>Not found</p> : myMeal.map((res) => {
          return <Mealitens data={res} />;
        })}
      </Container>
    </>
  )
}
