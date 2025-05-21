/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAllBlogs = async () => {

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/blogs`,
      {
        method: "GET",
        next: {
          tags: ["blogs"],
        },
        cache: "no-store",
      }
    );
    const result = await res.json();
      if (Array.isArray(result)) {
      return result;
    } else if (Array.isArray(result.data)) {
      return result.data;
    } else {
      console.error("Unexpected API response:", result);
      return [];
    }
  } catch (error: any) {
    return Error(error.message);
  }
};


export const getSingleBlogsDetails = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/blogs/${id}`,
      {
        method: "GET", 
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          tags: [`blogs-${id}`],
        },
      }
    );

    if (!res.ok) {
      console.error("Failed to fetch blog details:", res.statusText);
      return null;
    }

    const result = await res.json();
    return result;
  } catch (error: any) {
    console.error("Error in getSingleBlogsDetails:", error.message);
    return null;
  }
};
