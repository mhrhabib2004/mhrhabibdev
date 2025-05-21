/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAllSkills = async () => {

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/skills/getallskills`,
      {
        method: "GET",
        next: {
          tags: ["skills"],
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
