import React, { useState } from "react";
import { Mealitens } from "./mealItens";
import { Header, Input, Button } from "./style";
import { Container} from "./style";


export function Home(){
  const [search, setSearch] = useState('');
  const [myMeal, setMeal] = useState();
  
  const searchMeal = (event) =>{
    
    if(event.key === "Enter"){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res=>res.json().then(data =>{
          //console.log(data);
          setMeal(data.meals);
        }))
    }
  }
    return (
    <> 
       <Header>
           <h1>Find Recipes</h1>
        <Input
          type="text"
          placeholder="Search Recipes" 
          onChange={(e)=>setSearch(e.target.value)} 
          value={search}
          onKeyPress={searchMeal}
        />
        <Button>Find</Button>
        </Header>

        <Container>

        {
          (myMeal == null) ? <p>Not found</p> : myMeal.map((res)=>{
            return (
              <Mealitens data={res}/>
              )
            })
          }
          </Container>

      
    </>
  )
}

