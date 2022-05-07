import { pokeApi } from '../api';
import { PokemonFull } from '../interfaces';

const getPokemonInfo = async (nameOrId: string) => {
  try {
    const { data } = await pokeApi.get<PokemonFull>(`/pokemon/${nameOrId}`);

    return {
      name: data.name,
      id: data.id,
      types: data.types,
      height: data.height,
      weight: data.weight,
      abilities: data.abilities,
      sprites: data.sprites,
    };
  } catch (error) {
    return null;
  }
};

export { getPokemonInfo };
