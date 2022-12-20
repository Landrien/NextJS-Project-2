import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from './about'
import Link from 'next/link'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'


export default function Home() {
  return( 
    <>
    <Head>
      <title>Ninja List | Home</title>
    </Head>
    <div>
      <h1 className={styles.title}> Oh! Shit here you go again !</h1>
      <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta similique odit error atque nobis provident maxime officia quo, illo quas quia explicabo, dolorem eligendi maiores. Ipsam, necessitatibus ab? Impedit!</p>
      <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta similique odit error atque nobis provident maxime officia quo, illo quas quia explicabo, dolorem eligendi maiores. Ipsam, necessitatibus ab? Impedit!</p>
      <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta similique odit error atque nobis provident maxime officia quo, illo quas quia explicabo, dolorem eligendi maiores. Ipsam, necessitatibus ab? Impedit!</p>
      <Link href="/ninjas"><a className={styles.btn}>See a Ninja Listing</a></Link>
      <Link href="/ninjas4"><a className={styles.btn}>Try error 404</a></Link>
    </div>
    </>
  )
}
