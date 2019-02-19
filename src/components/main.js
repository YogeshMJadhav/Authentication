import React, { Component } from 'react'

class Main extends Component {
    // constructor(props){
        // super(props);
    // } 

    render(){
        return(
            <div>
                <p>Hello, {this.props.name}<br/>
                Do you want to see secret Area: <a href="/secret"> click Here</a>
                 </p>

                 <hr/>
                 Please login First
                 <hr/>
                 <button onClick={this.props.auth.login}>login </button>  
            </div>
        );
    }
}
export default Main;