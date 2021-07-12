import { act, fireEvent, queryAllByTestId, render, screen, waitFor } from '@testing-library/react';

import App from '../App';
import { Provider } from "react-redux";
import store from "../../../redux/store";

describe("- App Component", () => {

  test('infinite scroll to update data', async () => {

    await act(async () => {
      const { getAllByTestId } = await render(<Provider store={store}><App /></Provider>)
      let resolvedEl = await waitFor(() => getAllByTestId('gif'))
      expect(resolvedEl.length).toBe(20);
    })

  })
})

