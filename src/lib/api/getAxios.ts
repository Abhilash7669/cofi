import axios, { AxiosError } from "axios";

export default async function getAxios<T>(url: string): Promise<T> {

    try {
        const { data } = await axios.get<T>(url);
        return data;
    } catch (error) {
        console.error(error);
        throw error as AxiosError;
    }

}