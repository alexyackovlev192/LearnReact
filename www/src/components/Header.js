import React from "react"

class Header extends React.Component {
  render() {
    return ( 
      <header className="header">
        {this.props.title}
        <br></br>
      </header>
    )
  }
}

export default Header