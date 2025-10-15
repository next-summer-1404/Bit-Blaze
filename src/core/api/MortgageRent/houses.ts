import { IHouses } from "@/core/types/LandingPage/IHouses";

export const getMortgageRentHouses = async (transactionType:string , search:string , sort:string = "last_update" , propertyType:string):Promise<IHouses> => {
    const baseURL = process.env.API_BASE_URL;
    const result = await fetch(`${baseURL}/api/houses?page=1&limit=10&transactionType=${transactionType}&search=${search}&order=DESC&sort=${sort}&propertyType=${propertyType}`)
    if(!result.ok){
        throw new Error('Failed to fetch houses')
    }
    return result.json()
}