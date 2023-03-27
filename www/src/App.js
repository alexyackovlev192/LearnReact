import React from "react"
import Header from './components/Header'
import Image from './components/Image'
import logo from "./img/logo.jpg"

class App extends React.Component {
  helpText = "Help Text!"
  render() {
    return (<div className="name">
        <Header title="Кепка" />
        <h1>{this.helpText}</h1>
        <input placeholder={this.helpText}
            onClick={this.inputClick} onMouseEnter={this.mouceOver}/>
        <p>{this.helpText === "Help Text!" ? "Yes" : "No"}</p>
        <Image image={logo}/>
        <img src={logo} alt="" />
      </div>)
  }

  inputClick() {console.log("Click")}
  mouceOver() {console.log("Mouse Over")}
}

export default App