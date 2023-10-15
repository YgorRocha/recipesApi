import React from 'react'
import { Container, Cards } from "./mealItensStyles";


export const Mealitens = (getMeal) => {

    console.log(getMeal.data);
    return (
        <Container>


            <Cards>
                <img src={getMeal.data.strMealThumb} alt="meal"/>
                    <div className ="info">
                        <h2>{getMeal.data.strMeal}</h2>
                        <p>{getMeal.data.strArea} food</p>
                    </div>
                     <div className ="recipe">
                            <h2>Recipe</h2>
                            <p>{getMeal.data.strInstructions}</p>
                            <img src={getMeal.data.strMealThumb}/>
                            <a href={getMeal.data.strSource}>Watch video</a>
                    </div>
            </Cards>
                

              
           

        </Container>
    )
}
              
            

            

