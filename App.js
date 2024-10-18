/* <div>
    <div>
        <div>
            <h1>hi person1</h1>
            <h2>hi person2</h2>
        </div>
    </div>
    <div>
        <div>
            <h1>hi person1</h1>
            <h2>hi person2</h2>
        </div>
    </div>
</div> */

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "welocome to world of react"),
      React.createElement("h2", {}, "hello world"),
    ])
  ),
  React.createElement(
    "div",
    { id: "child3" },
    React.createElement("div", { id: "child4" }, [
      React.createElement("h1", {}, "welocome to world of react"),
      React.createElement("h2", {}, "Hello world"),
    ])
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
