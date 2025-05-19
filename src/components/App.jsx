import React from 'react';
import { GlobalStyle } from './styles/globalStyles';
import { RecipeList } from './RecipeList';


export function App() {
  return (
    <div>
      <GlobalStyle />
      <h1>Список рецептів</h1>
      <RecipeList />
    </div>
  );
}

