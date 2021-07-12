import { render } from "@testing-library/react";
import Loading from "../Loading";

describe("- Loading Component", () => {
    test("render Loading", () => {
        const { getByTestId } = render(<Loading loading={true} />);
        const loading = getByTestId("loading");
        expect(loading).toBeTruthy();
    })

    test("don't render Loading", () => {
        const { queryByTestId } = render(<Loading loading={false} />)
        const loading = queryByTestId("loading");
        expect(loading).toBeFalsy();
    })
})