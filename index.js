import { h, Component, render } from "preact";

export const App = () => <span>Hello from Preact</span>;

render(<App />, document.getElementById("app"));