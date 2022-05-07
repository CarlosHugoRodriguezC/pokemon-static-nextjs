import { Layout } from '../../components/layouts';
import NoFavorites from '../../components/ui/NoFavorites';
import React, { FC, useEffect, useState } from 'react';
import { localFavorites } from '../../utils';
import { useRouter } from 'next/router';
import { FavoritePokemons } from '../../components/ui';

type Props = {};

const FavoritosPage: FC<Props> = () => {
  const router = useRouter();
  const [favorites, setFavorites] = useState<number[]>([]);
  useEffect(() => {
    setFavorites(localFavorites.localFavorites());
  }, []);

  return (
    <Layout title='Pokemones favorios'>
      {favorites.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons favorites={favorites} />
      )}
    </Layout>
  );
};

export default FavoritosPage;
