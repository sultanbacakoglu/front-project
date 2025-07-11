"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export interface User {
    username: string;
    password: string;
}


export default function Login(){
    const [username,setUsername]= useState("");
    const [password,setPassword] = useState("");
    const router = useRouter();


    const handleLogin = () => {
       const users: User[] = JSON.parse(localStorage.getItem('users') || "[]");

        const match = users.find(u => u.username === username && u.password === password);

        if (match) {
            localStorage.setItem("current user", JSON.stringify(match));            router.push('/game')

        }else {
            alert("incalid username or password");
        }

        

    }

    return(
         <div>
        <input type="text" value= {username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"/> 
        <input type="password" value= {password} onChange={(e) =>  setPassword(e.target.value)} placeholder="Password"/>
        <button onClick={handleLogin}>LOGIN</button> 
    </div>
    )
}