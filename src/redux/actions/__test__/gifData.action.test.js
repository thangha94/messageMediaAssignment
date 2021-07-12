import { getGifDataSaga } from "../gifData.action";
import * as types from '../../types';

test("Gif Action", () => {
    expect(getGifDataSaga('data')).toEqual({
        type: types.GET_GIF_SAGA,
        payload: 'data'
    })
})