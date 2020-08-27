import React from 'react'

class HelloClassCom extends React.Component {
    render() {
        return <h2>Hello {this.props.name}  From Class Component</h2>
    }
}

export default HelloClassCom