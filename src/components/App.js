import React from 'react';

class App extends React.Component{
    render(){
        return(
            <div>
            <h1>{this.props.title2}</h1>
            <p>{this.props.texto2}</p>
            </div>
        )
    }
}

export default App;