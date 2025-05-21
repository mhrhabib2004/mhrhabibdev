import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export type Tblog = {
  _id?: string;
  title: string;
  content: string;
  image?: string;
  category?: string;
};

type BlogscardProps = {
  blog: Tblog;
};

export default function Blogscard({ blog }: BlogscardProps) {
  return (
    <Card className="rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform duration-200 group h-full flex flex-col bg-card text-foreground">
      {blog.image && (
        <Image
          src={blog.image}
          alt={blog.title}
          width={400}
          height={200}
          className="w-full h-[180px] object-cover group-hover:brightness-90 transition"
        />
      )}
      <CardContent className="p-3 flex-grow">
        <p className="text-xs text-muted-foreground">{blog.category}</p>
        <h2 className="text-base font-semibold mb-1 line-clamp-2">{blog.title}</h2>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-1 leading-5">
          {blog.content}
        </p>
      </CardContent>
      <CardFooter className="px-3 pb-3">
        <Link href={`/blogs/${blog._id}`} className="w-full">
          <Button className="text-xs w-full">
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
