import { ILocations } from "@/core/types/LandingPage/ILocations";

export const getLocations = async ():Promise<ILocations> => {
    const baseURL = process.env.API_BASE_URL;
    const result = await fetch(`${baseURL}/api/locations?page=1&limit=10&order=ASC`)
    if(!result.ok){
        throw new Error('Failed to fetch locations')
    }
    return result.json()
}