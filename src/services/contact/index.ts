/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

interface IApiResponse {
  success: boolean;
  message: string;
  [key: string]: any;
}

export const CreateContact = async (data: IContactPayload): Promise<IApiResponse> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/contact/create-contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData?.message || "Failed to send message",
        ...errorData,
      };
    }

    const result = await response.json();
    return {
      success: true,
      message: result.message || "Message sent successfully",
      ...result,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Something went wrong",
    };
  }
};
