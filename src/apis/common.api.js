import { API_KEY, LIMIT_QUERY } from "../define"
import axios from "axios";

export const getImageList = async (pageNumber) => {
    try {
        let offset = 0
        if (pageNumber !== 1) {
            offset = (pageNumber - 1) * LIMIT_QUERY + 1;
        }
        let result = await axios.get('https://api.giphy.com/v1/gifs/trending', {
            params: {
                api_key: API_KEY,
                limit: LIMIT_QUERY,
                offset
            }
        });
        return result.data;
    } catch (error) {
        return false;
    }

}