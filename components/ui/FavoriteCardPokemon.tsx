import React from 'react';
import { Card } from '@nextui-org/react';
import { useRouter } from 'next/router';

type Props = {
  id: number;
};

export const FavoriteCardPokemon: React.FC<Props> = ({ id }) => {
  const router = useRouter();
  const handleClick = (id: number) => {
    router.push(`/pokemon/${id}`);
  };
  return (
    <Card
      hoverable
      css={{ padding: '2rem' }}
      clickable
      onClick={() => handleClick(id)}>
      <Card.Body>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt={`Pokemon ${id}`}
          width='100%'
          height='200px'
        />
      </Card.Body>
    </Card>
  );
};
