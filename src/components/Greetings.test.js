import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from "./Greetings";

//testing suite "Greeting component"
describe("Greeting component", () => {
  //test "renders hello world as a text"
  test("renders 'hello world' as a text", () => {
    //Arrange
    render(<Greetings />);

    //Act
    //nothing

    //Assert
    const helloWorldElement = screen.getByText(/hello world/i);
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good if the button was NOT clicked", () => {
    render(<Greetings />);
    const outputElement = screen.getByText(/greetings/i);
    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'Changed!' if button was clicked", () => {
    //Arrange
    render(<Greetings />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Asset
    const outputElement = screen.getByText("Changed!", { exact: true });
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render 'greetings' if the button was clicked", () => {
    //Arrange
    render(<Greetings />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Asset
    const outputElement = screen.queryByText("greetings", { exact: false });
    expect(outputElement).toBeNull();
  });
});
