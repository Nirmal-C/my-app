import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            planet: "earth"
        };
        console.log("Hey I am from constructor");
    }

    componentDidMount(){
        console.log("Hey I am from componentDidMount");
    }

    render() {//logic
        console.log("Hey I am from rendered");
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>
                <h4>{this.state.planet}</h4>
            </div>
        );
    }
}
//State -> A set of data that an individual component holds
export default User;

//LIFE CYCLE METHODS

//1.MOUNT -> The component is initially rendered in a DOM
    //1.a Constructor 
    //1.b Render
    //1.c componentDidMount -side effects (get explore repos, recent activities, recent links )




//2.UPDATE -> Component is being updated
//3.UNMOUNT -> Component is removed from the DOM

