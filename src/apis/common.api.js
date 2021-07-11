import { axiosFetch, API_KEY, LIMIT_QUERY } from "../define"

export const getImageList = async (pageNumber) => {
    try {
        let offset = 0
        if (pageNumber !== 1) {
            offset = (pageNumber - 1) * LIMIT_QUERY + 1;
        }
        console.log(offset);
        let result = await axiosFetch.get('', {
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