import { SmallPokemon } from '../../interfaces/pokemon-list';
import { FC } from 'react';
import { Grid, Card, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

type Props = {
  pokemon: SmallPokemon;
};

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/name/${pokemon.name}`);
  };
  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card hoverable clickable onClick={handleClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={pokemon.img} />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <Text transform='capitalize'>{pokemon.name}</Text>
            <Text>#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
