import React from 'react';
import styled from 'styled-components';
import { FaClock as ClockIcon } from 'react-icons/fa';
import { FaUser as UserIcon } from 'react-icons/fa';
import { FaFireAlt as FireIcon } from 'react-icons/fa';

const RecipeCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  height: 180px;
  overflow: hidden;
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RecipeInfo = styled.div`
  padding: 15px;
`;

const RecipeTitle = styled.h3`
  color: #333;
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.2em;
  font-weight: bold;
`;

const Details = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  color: #777;
  font-size: 0.9em;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  svg {
    width: 16px;
    height: 16px;
    fill: #aaa;
  }
`;

export function RecipeItem({ recipe }) {
  return (
    <RecipeCard>
      <ImageContainer>
        <RecipeImage src={recipe.image} alt={recipe.name} />
      </ImageContainer>
      <RecipeInfo>
        <RecipeTitle>{recipe.name}</RecipeTitle>
        <Details>
          <DetailItem>
            <ClockIcon />
            {recipe.time}
          </DetailItem>
          <DetailItem>
            <UserIcon />
            {recipe.servings}
          </DetailItem>
          <DetailItem>
            <FireIcon />
            {recipe.calories}
          </DetailItem>
        </Details>
      </RecipeInfo>
    </RecipeCard>
  );
}
