import { IHouses } from "@/core/types/LandingPage/IHouses";

export const getHousesByRate = async ():Promise<IHouses> => {
    const baseURL = process.env.API_BASE_URL;
    const result = await fetch(`${baseURL}/api/houses?page=1&limit=10&order=DESC&sort=rate`)
    if(!result.ok){
        throw new Error('Failed to fetch houses')
    }
    return result.json()
}
export const getHousesByRentAndMortgage = async (transactionType:string = 'rental'):Promise<IHouses> => {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const result = await fetch(`${baseURL}/api/houses?page=1&limit=10&transactionType=[${transactionType}]&order=DESC&sort=last_updated`)
    if(!result.ok){
        throw new Error('Failed to fetch houses')
    }
    return result.json()
}