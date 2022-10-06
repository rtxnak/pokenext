import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Card from '../components/Card';
import { fetchAllPokemons } from '../fetchApi';

export async function getStaticProps() {

  const data = await fetchAllPokemons();

  // add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.title}>
        <h1>Poke<span>Next</span></h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="PokeNext"
        />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  )
}
