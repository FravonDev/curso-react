import styles from './styles.module.css';


export const Pokemon = ({name = 'pikachu' }) => {
  return <h1 className={styles.title}>Nome do pokemon: {name}</h1>;
}