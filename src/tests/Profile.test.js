import * as React from 'react';
import { render } from '@testing-library/react';

import Profile from '../components/pages/Profile';

test("renders profile text content and image", () => {

    let sampleUser = {
        id: "1",
        firstName: "Pelton",
        lastName: "Pryon",
        email: "pelton@gmail.com"
    }

    const { getByText, getByRole, getByAltText } = render(<Profile user={sampleUser}/>);

    // Verify page text is displayed
    expect(getByRole("heading")).toHaveTextContent("Welcome to the Pryon Mission Control Center!");
    expect(getByText("YOUR STATS:")).not.toBeNull();

    // Verify props are passed and user info is displayed
    expect(getByText("ID: 1")).not.toBeNull();
    expect(getByText("First Name: Pelton")).not.toBeNull();
    expect(getByText("Last Name: Pryon")).not.toBeNull();
    expect(getByText("Email: pelton@gmail.com")).not.toBeNull();

    // Verify image of astronaut displays
    expect(getByAltText("astronaut")).toHaveAttribute("src", "astronaut.png")
});