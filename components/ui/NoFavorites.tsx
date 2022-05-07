import { Container, Image, Text } from '@nextui-org/react';
import React from 'react';

const NoFavorites = () => {
  return (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 5rem)',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text h1>No hay favoritos</Text>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/152.svg'
        width='250px'
        height='auto'
        css={{
          opacity: 0.5,
        }}
      />
    </Container>
  );
};

export default NoFavorites;
