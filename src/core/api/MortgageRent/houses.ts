import { IHouses } from "@/core/types/MortgageRent/IHouses";

export const getMortgageRentHouses = async (
  transactionType: string = "",
  search: string = "",
  sort: string = "last_updated",
  propertyType: string = "",
  location:string = "",
  minMortgage: string = "",
  maxMortgage: string = "",
  minRent: string = "",
  maxRent: string = "",
  minArea: string = "",
  maxArea: string = ""
): Promise<IHouses> => {
  const baseURL = process.env.API_BASE_URL;
  const result = await fetch(
    `${baseURL}/api/houses?page=1&limit=10&location=${location}&transactionType=${transactionType}&search=${search}&order=DESC&sort=${sort}&propertyType=${propertyType}&minRent=${minRent}&maxRent=${maxRent}&minMortgage=${minMortgage}&maxMortgage=${maxMortgage}&minArea=${minArea}&maxArea=${maxArea}`
  );
  console.log(location)
  if (!result.ok) {
    throw new Error("Failed to fetch houses");
  }
  return result.json();
};
