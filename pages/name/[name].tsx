import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Grid, Card, Text, Button, Container } from '@nextui-org/react';
import Image from 'next/image';

import confetti from 'canvas-confetti';

import { Layout } from '../../components/layouts';
import { pokeApi } from '../../api';
import { PokemonFull, PokemonListResponse } from '../../interfaces/';
import { getPokemonInfo, localFavorites } from '../../utils';

type Props = {
  pokemon: PokemonFull;
};

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  const [isFavorite, setIsFavorite] = React.useState(
    localFavorites.isInFavorites(pokemon.id)
  );
  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsFavorite(!isFavorite);

    if (isFavorite) return;

    confetti({
      zIndex: 99,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  return (
    <Layout title={pokemon.name}>
      <Grid.Container
        css={{
          marginTop: '1rem',
        }}
        gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '2rem' }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  '/no-image.png'
                }
                alt={pokemon.name}
                width='100%'
                height='200px'
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card hoverable css={{ padding: '2rem' }}>
            <Card.Header
              css={{
                display: 'flex',
                justifyContent: 'space-between',
              }}>
              <Text h1>{pokemon.name}</Text>
              <Button
                color={'gradient'}
                ghost={!isFavorite}
                onClick={onToggleFavorite}>
                Guardar en favoritos
              </Button>
            </Card.Header>
            <Card.Body>
              <Text>
                <strong>ID:</strong> {pokemon.id}
              </Text>
              <Text>
                <strong>Type:</strong> {pokemon.types.map((t) => t.type.name)}
              </Text>
              <Text>
                <strong>Height:</strong> {pokemon.height}
              </Text>
              <Text>
                <strong>Weight:</strong> {pokemon.weight}
              </Text>
              <Text>
                <strong>Abilities:</strong>{' '}
                {pokemon.abilities.map((a) => a.ability.name).join(', ')}
              </Text>
              <Container>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { name } = context.params as { name: string };

  const pokemon = await getPokemonInfo(name);

  if (!pokemon) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { pokemon },
    revalidate: 86400,
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const { results } = await (
    await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  ).data;

  const paths = results.map((pokemon) => ({ params: { name: pokemon.name } }));

  console.log(results);
  return {
    paths,
    // fallback: false,
    fallback: 'blocking',
  };
};
export default PokemonByNamePage;
