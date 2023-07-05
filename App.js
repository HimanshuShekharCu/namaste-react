const heading =
React.createElement(
    "div", { id: "heading" },
 [
    React.createElement("h2", { id: "heading2" },
         React.createElement("h3", { id: "heading3" }, "Hello World from React "))
, React.createElement("h1", { id: "heading4" }, "Hello World from React ")
]
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)