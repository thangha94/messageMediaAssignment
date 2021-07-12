import { cleanup, render, waitFor } from '@testing-library/react';
import axios from 'axios';
import 'intersection-observer';
import App from '../App';
import { Provider } from "react-redux";
import store from "../../../redux/store";
describe("- App Component", () => {
  beforeEach(() => cleanup());
  test('infinite scroll to update data', async () => {
    // First time after rendering
    const { getAllByTestId } = render(<Provider store={store}><App /></Provider>)
    await waitFor(async () => {
      let gifEl = getAllByTestId('gif')
      expect(gifEl.length).toBe(20);
    })
  })
})

