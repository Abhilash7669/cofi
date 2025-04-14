import axios, { AxiosError, AxiosRequestConfig } from "axios";

/**
 * AXIOS GET METHOD API Function
 * @param url pass the endpoint url
 * @returns T generic value
 */
export async function getAxios<T>(url: string): Promise<T> {

    try {
        const m_data = await axios.get<T>(url);
        return m_data.data;
    } catch (error) {
        console.error(error);
        throw error as AxiosError;
    }

}


/**
 * AXIOS POST METHOD API Function
 * @param url pass the endpoint url
 * @param data pass data object
 * @param config pass configs(headers, authorization, etc)
 * @returns T generic value
 */
export async function postAxios<T>(
    url: string,
    data: T, 
    config: AxiosRequestConfig
): Promise<T> {

    try {
        const m_data = await axios.post<T>(url, data, config);
        return m_data.data; 
    } catch (error) {
        console.error(error);
        throw error as AxiosError;
    }

}