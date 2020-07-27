import * as React from 'react';
import { render } from '@testing-library/react';

import Loader from '../components/other/Loader';

test("renders spinner and loading message", () => {

    const { getAllByText, getByRole } = render(<Loader />);

    // Check that the loading text and spinner show up
    expect(getAllByText("Loading...")).toHaveLength(2);
    expect(getByRole("status").classList.contains('spinner-border')).toBe(true)

});