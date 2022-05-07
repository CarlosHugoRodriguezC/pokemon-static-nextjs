import { Link, Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { FC } from 'react';

type Props = {};
export const Navbar: FC<Props> = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '0rem 2rem',
        backgroundColor: theme?.colors.primary.value,
      }}>
      <NextLink href='/' passHref>
        <Link
          css={{
            display: 'flex',
            alignItems: 'center',
          }}>
          <Image
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
            alt='icono de la app'
            width={70}
            height={70}
          />
          <Text color='white' h2>
            P
          </Text>
          <Text color='white' h3>
            okémon
          </Text>
        </Link>
      </NextLink>
      <Spacer
        css={{
          flex: 1,
        }}
      />
      <NextLink href='/favorites' passHref>
        <Link
          css={{
            display: 'flex',
            alignItems: 'center',
          }}>
          <Text color='white' h3>
            Favoritos
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};
