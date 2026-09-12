
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const router=useRouter()
        const data = await fetch(`https://6aa3eac6e7ae868cdf7b6bf5.mockapi.io/notes`)

  const notes = await data.json();
  return notes.map(note => ({ id: String(note.id) }))//this just returns the [id] fpr whoch it has to build the ssgs
}
//export const dynamicParams = false; 

export default async function NotePage({  params }) {
      const { id } = await params;

    const data = await fetch(`https://6aa3eac6e7ae868cdf7b6bf5.mockapi.io/notes/${id}`)
    if (!data.ok) notFound();
    const note=await data.json()
  return <div><Card>
  <CardHeader><CardTitle>{note.title}</CardTitle></CardHeader>
  <CardContent>{note.body}</CardContent>
  <CardFooter>
    <Button >
      <Link onClick={()=>router.push(`/posts/${id}/update`)}>Update</Link>
    </Button>
  </CardFooter>
</Card>  </div>;
}