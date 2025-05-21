import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type TBlog = {
  _id?: string;
  title: string;
  content: string;
  image?: string;
  category?: string;
};

type BlogsDetailsProps = {
  blog: TBlog;
};

export default function BlogsDetails({ blog }: BlogsDetailsProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Card className="overflow-hidden">
        {blog.image && (
          <Image
            src={blog.image}
            alt={blog.title}
            width={800}
            height={400}
            className="w-full h-[300px] object-cover"
          />
        )}

        <CardHeader>
          {blog.category && (
            <Badge variant="outline" className="text-xs">
              {blog.category}
            </Badge>
          )}
          <CardTitle className="text-2xl mt-2">{blog.title}</CardTitle>
        </CardHeader>

        <CardContent className="text-sm text-muted-foreground leading-7 space-y-3">
          {blog.content?.split("\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </CardContent>
      </Card>

      <div className="mt-6 flex justify-end">
        <Button variant="outline" asChild>
          <a href="/blogs">Back to Blogs</a>
        </Button>
      </div>
    </div>
  );
}
