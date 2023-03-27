// ReactDOM.render(<div>
//     <h1>Hi</h1>
//     <h2>Ky</h2>
// </div>, document.getElementById("app"))

// ReactDOM.render(React.createElement('input', {
//     placeholder: "Text",
//     onClick: () =>  console.log("Clicked"),
//     onMouseEnter: () => console.log("Mouse Over"),
// }), document.getElementById("app"))

const inputClick = () => console.log("Click")
const mouceOver = () => console.log("Mouse Over")

const helpText = "Help Text"    

const elements = (
    <div className="name">
        <h1>{helpText}</h1>
        <input placeholder={helpText}
            onClick={inputClick} onMouseEnter={mouceOver}/>
        <p>{helpText == "Help Text!" ? "Yes" : "No"}</p>
    </div>
)
const app = document.getElementById("app")

ReactDOM.render(elements, app)