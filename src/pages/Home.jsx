import { Pokemon } from "../components/Pokemon";


export const Home = () => {
  return (
      <div>
        <h1>Meu site de pokemon</h1>
        <Pokemon name="Pikachu"/>
        <Pokemon name="Charmander"/>
        <Pokemon name="Charizard"/>
        <Pokemon name="Squirtle"/>
        <Pokemon name="Ditto"/>
        <Pokemon/>
      </div>
  );
}

