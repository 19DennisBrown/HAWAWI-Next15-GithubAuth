

'use client'
import { login } from "@/app/lib/actions/auth";

export default function SignInButton(){

        return(
                <button 
                className="bg-green-500 py-1 px-4 font-semibold rounded-lg mt-8 focus:outline-0 p-8" 
                onClick={()=> login()} >
                Sign in with github....
              </button>
        )
}