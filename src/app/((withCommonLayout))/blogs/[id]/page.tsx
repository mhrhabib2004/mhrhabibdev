import BlogsDetails from '@/components/modules/home/Blogs/BlogsDetails';
import { getSingleBlogsDetails } from '@/services/blogs';
import { notFound } from 'next/navigation';

export type BlogDetailsProps = {
  params: { id: string };
};

export default async function BlogsDetailsPage({ params }: BlogDetailsProps) {
  const blog = await getSingleBlogsDetails(params.id);

//   console.log(blog.data);

  if (!blog) return notFound();

  return <BlogsDetails blog={blog.data} />;
}
