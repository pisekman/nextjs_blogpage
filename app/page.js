import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import Navbar from './ui/navbar'


export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.description}>
        {/* <p className={styles.navigation}>
          <Link href="/">  Home</Link>
          <Link href="/blog"> Blog Page</Link>

        </p> */}
        <Navbar />

        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logo-tropemogara.png"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={124}
              height={124}
              priority
            />
          </a>
        </div>
      </div>


      <div className={styles.grid}>
        <div className={styles.mainPosts}>space for posts</div>
      </div>
    </main>
  )
}
