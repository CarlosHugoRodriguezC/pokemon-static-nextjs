import { Grid } from '@nextui-org/react';
import { GetStaticProps } from 'next';

import { FC } from 'react';
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonCard } from '../components/pokemon';
import { PokemonListResponse } from '../interfaces';
import { SmallPokemon } from '../interfaces/pokemon-list';

type Props = {
  pokemons: SmallPokemon[];
};
const Home: FC<Props> = ({ pokemons }) => {
  // console.log({ pokemons });
  return (
    <Layout>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>(
    '/pokemon/?limit=151'
  );
  // console.log(data);
  const pokemons = data.results.map((pokemon, i) => ({
    ...pokemon,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
    id: i + 1,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
