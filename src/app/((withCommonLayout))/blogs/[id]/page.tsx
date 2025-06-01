/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogsDetails from '@/components/modules/home/Blogs/BlogsDetails';
import { getSingleBlogsDetails } from '@/services/blogs';
import { notFound } from 'next/navigation';

export type BlogDetailsProps = {
  params: { id: string };
};

export const dynamic = 'force-dynamic'; 

export default async function BlogsDetailsPage({ params }: any) {
  const blog = await getSingleBlogsDetails(params?.id);

  if (!blog) return notFound();

  return <BlogsDetails blog={blog?.data} />;
}
