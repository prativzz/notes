import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import Link from "next/link";
export default  async function Home() {

  const data = await fetch("https://6aa3eac6e7ae868cdf7b6bf5.mockapi.io/notes")
  const notes = await data.json()

  return (
    <div ><ul>
      {notes.map(note => (
         <Link href={`/posts/${note.id}`} key={note.id}>
    <Card>
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
      </CardHeader>
      <CardContent>
        {note.body}
      </CardContent>
    </Card>
  </Link>
      ))}
    </ul></div>
  );
}
