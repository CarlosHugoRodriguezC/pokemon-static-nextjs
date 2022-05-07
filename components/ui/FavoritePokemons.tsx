import { Card, Grid } from '@nextui-org/react';

import React from 'react';
import { FavoriteCardPokemon } from './FavoriteCardPokemon';

type Props = {
  favorites: number[];
};

export const FavoritePokemons: React.FC<Props> = ({ favorites }) => {
  return (
    <Grid.Container gap={2} direction='row'>
      {favorites.map((id) => (
        <Grid xs={12} sm={4} md={2} key={id}>
          <FavoriteCardPokemon id={id} />
        </Grid>
      ))}
    </Grid.Container>
  );
};
