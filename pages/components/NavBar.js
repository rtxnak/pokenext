import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div>
        <Image
          src="/images/pokeball.png"
          width="30"
          height="30"
          alt="Pokebola"
        />
        <h1>PokeNext</h1>
      </div>
      <ul>
        <li>
          <Link href="/"><a>Home</a></Link>
        </li>
        <li>
          <Link href="/about"><a>About</a></Link>
        </li>
      </ul>
    </nav>
  )
}