import React from 'react'
import Link from 'next/link';

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made in &#128171; by &nbsp;
      <Link href="https://www.linkedin.com/in/samet-turkmen" target='_blank'>
      Samet Türkmen
      </Link>
    </footer>
  )
}

export default Footer