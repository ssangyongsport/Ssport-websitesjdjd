import { useSession, signIn, signOut } from 'next-auth/react';
import React from 'react';
import { Button } from "flowbite-react";
export const Header = () => {
const { data: session, status } = useSession();
if (session) {
return (
<>

<button>         <a 
                 href={`/api/auth/signout`} 
                 onClick={(e) => { 
                   e.preventDefault() 
                   signout() 
                 }} 
               > 
                 Sign out 
               </a>
</button>
</>
)
}
return (
<>
<button> 
  <a 
                 href={`/api/auth/signin`} 
                 onClick={(e) => { 
                   e.preventDefault() 
                   signIn() 
                 }} 
               > 
                 Sign out 
               </a></button>
</>
)
}
