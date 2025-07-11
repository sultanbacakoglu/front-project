"use client"
import Grid from "@/components/Grid/Grid"
import styles from "./game.module.css"

export default function Game(){

    return(
        <div className={styles.container}>
            <Grid></Grid>
        </div>
    )

}