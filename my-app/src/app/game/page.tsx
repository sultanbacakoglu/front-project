"use client"
import Grid from "@/components/Grid/Grid"
import styles from "./game.module.css"
import { BalanceContext } from "@/context/BalanceContext"
import { useContext } from "react";
import { useRouter } from "next/navigation";


export default function Game(){
    const router = useRouter();
    const balanceContext = useContext(BalanceContext);

    const handleClick = () => {
        router.push("./store");
    }
    return(
        <div className={styles.container}>
            <h2>balance: {balanceContext.balance}</h2>
            <Grid></Grid>
            <button onClick={handleClick}>
                Store
            </button>
        </div>
        
    )

}