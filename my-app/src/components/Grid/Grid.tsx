"use client"

import Card from "../Card/Card"
import styles from "./grid.module.css"

export default function Grid() {
    return(
        <div className={styles.container}>
             {[...Array(16)].map((_, i) => (
            <Card key={i} />
  ))}
        </div>
        
        
    )
}