import React, { Component } from 'react';

class Dashboard extends Component{
    state = {
        name:  'Alex'
    }

    render(){
        return(
            <div>
                <p>Hello {this.state.name}</p>
            </div>
        )
    }

}

export default  Dashboard;