"use client"
import { useEffect, useState } from "react";
import styles from "./card.module.css";

type CardState = "E" | "T" | "F" | "B" | "Ç" | "K";
const StateOrder: CardState[] = ["T", "F", "B", "Ç", "K"];

export default function Card() {
    const [state, setState] = useState<CardState>("E");
    const [stepIndex, setStepIndex] = useState<number | null>(null);

    useEffect(() => {
        if (stepIndex === null) return;

        if (stepIndex >= StateOrder.length) {
            setStepIndex(null); 
            return;
        }

        const nextState = StateOrder[stepIndex];
        const delay = nextState === "K" ? 4000 : 2000;

        const timeout = setTimeout(() => {
            setState(nextState);
            setStepIndex((prev) => (prev !== null ? prev + 1 : null));
        }, delay);

        return () => clearTimeout(timeout);
    }, [stepIndex]);

    const handleClick = () => {
        if (stepIndex !== null) return; 

        if (state === "E") {
            setStepIndex(0); 
        } else if (state === "K") {
            setState("E");
        }
    };

    return (
        <div className={styles.container} onClick={handleClick}>
            {state}
        </div>
    );
}
