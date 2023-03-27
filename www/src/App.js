import React from "react"
import Header from './components/Header'
import Image from './components/Image'
import logo from "./img/logo.jpg"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            helpText: "HelpText",
            userData: ""
        }

        this.inputClick = this.inputClick.bind(this)
    }

    componentDidUpdate(prevProp){
        if(this.state.helpText !== "Help")
            console.log("Some")
    }

  helpText = "Help Text!"
  render() {
    return (<div className="name">
        <Header title="Кепка" />
        <h1>{this.state.helpText}</h1>
        <h2>{this.state.userData}</h2>
        <input placeholder={this.helpText}
            onChange={event => this.setState({userData: event.target.value})}
            onClick={this.inputClick} onMouseEnter={this.mouceOver}/>
        <p>{this.state.helpText === "Help Text!" ? "Yes" : "No"}</p>
        <Image image={logo}/>
        {/* <img src={logo} alt="" /> */}
      </div>)
  }

  inputClick() {
    this.setState({helpText: "Changed"})
    console.log("Click")
}
  mouceOver() {console.log("Mouse Over")}
}

export default App