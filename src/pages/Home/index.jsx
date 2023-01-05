import { Pokemon } from "../../components/Pokemon";
import Logo from "../../assets/images/logo.png"
import styles from './styles.module.css'



export const Home = () => {
  return (
      <div className={styles.container}>
        <img className={styles.image} src={Logo} alt="Pokemon Logo" />
        <Pokemon name="Pikachu"/>
        <Pokemon name="Charizard"/>
        <Pokemon name="Psyduck"/>
      </div>
  );
}

