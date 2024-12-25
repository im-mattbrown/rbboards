import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Coming just as soon as I finish this beer.
        </h1>
        <Image
          className={styles.logo}
          src="/mace.jpg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </main>
    </div>
  );
}
