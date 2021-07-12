import updateReducer, { initialState } from "../gifData.reducer";
import * as types from '../../types';

describe("Gif Reducer", () => {
    test("Initial case", () => {
        expect(updateReducer(
            initialState,
            {
                type: 'ANOTHER_TYPE',
            }
        )).toEqual(initialState);
    })
    test("Update new data", () => {
        expect(updateReducer(
            initialState,
            {
                type: types.SET_GIF,
                payload: {
                    data: [1, 2, 3],
                    loadMore: false
                }
            }
        )).toEqual({
            data: [1, 2, 3],
            loadMore: false
        })
    })
})

