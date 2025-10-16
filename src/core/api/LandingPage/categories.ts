import { ICategories } from "@/core/types/LandingPage/ICategories";

export const getCategories = async (): Promise<ICategories> => {
  const baseURL = process.env.API_BASE_URL;
  const result = await fetch(
    `${baseURL}/api/categories?page=1&limit=10&order=ASC`
  );
  if (!result.ok) {
    throw new Error("Failed to fetch categories");
  }
  return result.json()
};
