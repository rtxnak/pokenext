import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function Home() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id nibh eu mi laoreet fringilla in ut leo. Nam at felis varius, pulvinar elit et, pretium justo. Nam et lobortis enim, sit amet dapibus purus.</p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  )
}