import React from "react"

class Image extends React.Component {
  render() {
    return (
      <img src={this.props.image} alt="Тут должно быть logo"/>
    )
    }
}

export default Image