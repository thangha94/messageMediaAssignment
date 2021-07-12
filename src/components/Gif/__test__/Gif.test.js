import { fireEvent, render } from '@testing-library/react'
import Gif from '../Gif'

describe("- Gif Component", () => {
    test("render Gif", () => {
        render(<Gif />)
    })
    test("click to open full screen", () => {
        const click = jest.fn();
        const { getByTestId } = render(<Gif onOpenFullScreen={click} />);
        const gifEl = getByTestId("gif");
        fireEvent.click(gifEl);
        expect(click).toBeCalled();
    })
    test("click to close full screen", () => {
        const click = jest.fn();
        const { getByTestId } = render(<Gif onCloseFullScreen={click} />);
        const gifEl = getByTestId("gif-close");
        fireEvent.click(gifEl);
        expect(click).toBeCalled();
    })
})