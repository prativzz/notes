'use client'
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState,use } from "react"
import { action } from "./action";


export default function Page({ params }) {
    const { id } = use(params);
    const [body , setBody]= useState()
    function handleSubmit(){
        action(id,body)
    }
  return (<div className="w-100 m-auto">
    <Card >
        <Input placeholder='enter body' onChange={(e)=>setBody(e.target.value)}/>
        <Button onClick={handleSubmit}>submit</Button>
    </Card>
    </div>
  )
}

