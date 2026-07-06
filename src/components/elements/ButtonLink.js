import React from 'react'
import styles from "@/src/components/elements/ButtonLink.module.scss"
import Link from 'next/link'

function ButtonLink({text, color, shadowColor}) {
  return (
    <Link href="/hire-me" className={styles.button} style={color ? {"backgroundColor": color, "boxShadow": `0 0 4rem ${shadowColor}`} : {"backgroundColor": "#f57f17", "boxShadow": "0 2rem 4rem #f57f1740"} }> {text} </Link>
  )
}

export default ButtonLink