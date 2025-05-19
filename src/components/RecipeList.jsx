
import React from 'react';
import {RecipeItem} from './RecipeItem';
import styled from 'styled-components';

const RecipeListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  background-color: #f8f0e3; 
`;

const recipes = [
  {
    id: 1,
    name: 'Smoked salmon burger',
    time: '20 min',
    servings: '2 servings',
    calories: '210 calories',
    image: 'https://fitmencook.com/wp-content/uploads/2022/10/smoked-salmon-burger-3.jpg', 
  },
  {
    id: 2,
    name: 'Tomatoes With Creamy Feta',
    time: '15 min',
    servings: '1 serving',
    calories: '180 calories',
    image: 'https://assets.bonappetit.com/photos/62b4926736e0c90647da6b71/1:1/w_2560%2Cc_limit/0623-diana-yen-tomato-recipe-lede.jpg', 
  },
  {
    id: 3,
    name: 'Spicy potato salad',
    time: '30 min',
    servings: '2 servings',
    calories: '320 calories',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJl5jMuoIjY54C0LrVb7pV8DwQaivcTv--g&s', 
  },
  {
    id: 4,
    name: 'Chicken Biryani',
    time: '60 min',
    servings: '4 servings',
    calories: '400 calories',
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/chicken-biryani-recipe.jpg', 
  },
];

export function RecipeList() {
  return (
    <RecipeListContainer>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </RecipeListContainer>
  );
}