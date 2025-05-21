import Blogscard, { Tblog } from "@/components/modules/home/Blogs/Blogscard";
import { getAllBlogs } from "@/services/blogs";

export default async function BlogsPage() {
  let blogs: Tblog[] = [];

  try {
    blogs = await getAllBlogs();
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return (
      <div className="p-6 text-red-500">
        Failed to load blogs. Please try again later.
      </div>
    );
  }

  if (!blogs?.length) {
    return (
      <div className="p-6 text-gray-600">
        No blogs found.
      </div>
    );
  }

  return (
    <section className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
        Latest Blog Posts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {blogs.map((blog) => (
          <Blogscard key={blog._id} blog={blog} />
        ))}
      </div>
    </section>
  );
}
