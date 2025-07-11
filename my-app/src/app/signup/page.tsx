"use client";
import { useRouter } from "next/navigation";
import { useState} from "react";

export interface User {
    username: string;
    password: string;
}

export default function SignUp() {
        const [username,setUsername]= useState("");
        const [password,setPassword] = useState("");
        const router= useRouter();

        const  handleSignUp =  () => {
        const users: User[] = JSON.parse(localStorage.getItem('users') || "[]");

        users.push({username,password});
        localStorage.setItem("users", JSON.stringify(users));
       router.push("/login")

    }


    return(
        <div>
        <input type="text" value= {username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"/> 
        <input type="password" value= {password} onChange={(e) =>  setPassword(e.target.value)} placeholder="Password"/>
        <button onClick={handleSignUp}>SIGN IN</button> 
    </div>
    )
        

}