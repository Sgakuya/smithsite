import { render, screen } from "@testing-library/react"
import { Main } from "../components/Home"
import test from "../data/test.json"

test("Displays user's name", () => {
    const user = test[0];
    // console.log(user);
    render(<Main first={user.first} last={user.last}/>);
    const txt = screen.getByText(`${user.first} ${user.last}`);
    expect(txt).toHaveTextContent(`${user.first} ${user.last}`);
});