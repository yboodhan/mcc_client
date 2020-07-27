import * as React from 'react';
import { render } from '@testing-library/react';

import LoginConsole from '../components/other/LoginConsole';

test("renders login form and buttons with text", () => {

    const { getByText, getByLabelText, getAllByRole, getByRole } = render(<LoginConsole />);

    // Could simplify these to not include assertion (style choice)
    // Check all relevant texts are displayed
    expect(getByText("LOGIN")).not.toBeNull();
    expect(getByLabelText("Username:")).not.toBeNull();
    expect(getByLabelText("Password:")).not.toBeNull();
    expect(getByText("- OR -")).not.toBeNull();

    // Check that the login form shows up
    expect(getByRole("form")).not.toBeNull();

    // Check all buttons with correct text are displayed
    getAllByRole("button").forEach((button, index) => {
        if (index === 0) {
            expect(button).toHaveTextContent("Submit");
        } else if (index === 1) {
            expect(button).toHaveTextContent("LOGIN WITH FACEBOOK");
        }
    })

});