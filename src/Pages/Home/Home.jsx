import React, { useState, useEffect } from "react";
import { Mealitens } from "./mealItens";
import { Header, Input, Button  } from "./style";
import { Container } from "./style";
import {Swiper, SwiperSlide} from "swiper/react"


export function Home() {
  const [search, setSearch] = useState('');
  const [myMeal, setMeal] = useState([]);
  const [randomMeals, setRandomMeals] = useState([]);
  const [slidePreview, setSlidePreview] = useState(3);

  const searchMeal = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) =>
          res.json().then((data) => {
            setMeal(data.meals);
          })
        );
    }
  }

  const fetchRandomMeals = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
      .then((res) =>
        res.json().then((data) => {
          setRandomMeals(data.meals);
        })
      );
  };

      useEffect(() => {
        fetchRandomMeals();
      }, []);

      useEffect(() => {
        function handleResizer(){
          if(window.innerWidth < 592){
            setSlidePreview(1)
          }else if(window.innerWidth < 810){
            setSlidePreview(2)
          }else{
            setSlidePreview(3)
          }
        }
        handleResizer();

        window.addEventListener('resize', handleResizer)

        return () => {
          window.removeEventListener('resize', handleResizer)
        };
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
      </Header>

      <Container>
        {myMeal == null  ? <p>Not found</p> : myMeal.map((res) => {
          return <Mealitens data={res} />;
        })}
      </Container>

      {myMeal === null || myMeal.length === 0 ? (
      <Swiper
        spaceBetween={1}
        slidesPerView={slidePreview}
        navigation
      >
        {myMeal == null  ? '' :  randomMeals.map((meal, index) => (
          <SwiperSlide key={index}>
            <Mealitens data={meal} />
          </SwiperSlide>
        ))}
      </Swiper>
    ) : null}
  </>
  )
}
