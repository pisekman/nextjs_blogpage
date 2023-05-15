import React from 'react';
import Link from 'next/link';
import styles from '../page.module.css'


function Home(props) {
    // const router = useRouter();

    return (
        <>
            <Link href="/"> Back Home</Link>
            <p>blog post page</p>
            <p className={styles.card}>1</p>
            <p className={styles.card}>1</p>
            <p className={styles.card}>1</p>
            <p className={styles.card}>1</p>
            <p className={styles.card}>1</p>
        </>
    )
}

export default Home;