import { IComments } from "@/core/types/LandingPage/IComments";

export const gerComments = async ():Promise<IComments> => {
    const baseURL = process.env.API_BASE_URL;
    const result = await fetch(`${baseURL}/api/comments?page=1&limit=10&sort=created_at&order=DESC`)
    if(!result.ok){
        throw new Error('Failed to fetch comments')
    }
    return result.json()
}