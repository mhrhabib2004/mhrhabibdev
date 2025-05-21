/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAllProjects = async () => {

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/projects`,
      {
        method: "GET",
        next: {
          tags: ["projects"],
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
