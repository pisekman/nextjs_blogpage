
import React from "react";
import Link from 'next/link';
import styles from '../page.module.css'



export default function Navbar() {
     return (
          <div className={styles.navigation}>

               <ul>
                    <li>
                         <Link href="/">Home</Link>
                    </li>
                    <li>
                         <Link href="/about">About Us</Link>
                    </li>
                    <li>
                         <Link href="/blog/hello-world">Blog Post</Link>
                    </li>
               </ul>

          </div>

     );
}
