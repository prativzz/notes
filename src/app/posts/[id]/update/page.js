'use client'
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState,use } from "react"
import { action } from "./action";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Page({ params }) {
  const router = useRouter()
    const { id } = use(params);
    const [body , setBody]= useState()
    function handleSubmit(e){
      e.preventDefault();  
        action(id,body)
          router.replace(`/posts/${id}`);
        
    }
  return (<div className="w-100 m-auto">
    <Card >
       <form onSubmit={handleSubmit}>
        <Input placeholder='enter body' onChange={(e)=>setBody(e.target.value)}/>
       <Button type="submit" >submit</Button>
       </form>
        
    </Card>
    </div>
  )
}

