import axios, { AxiosError } from "axios";

/**
 * AXIOS GET METHOD API Function
 * @param url pass the endpoint url
 * @returns T generic value
 */
export default async function getAxios<T>(url: string): Promise<T> {

    try {
        const { data } = await axios.get<T>(url);
        return data;
    } catch (error) {
        console.error(error);
        throw error as AxiosError;
    }

}