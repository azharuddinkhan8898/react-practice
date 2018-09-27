import React, {Component} from 'react';

class Adduser extends Component{
    state = {
        name:null,
        age:null
    }
    changeHandler = (e) => {
        console.log(e.target.id)
        this.setState({
            [e.target.id]: e.target.value
        })
        
    }
    adduserHandler = (e) => {
        e.preventDefault()
        this.props.adduser(this.state);
    }
    render(){
        return(
            <form onSubmit={this.adduserHandler}>
                <label htmlFor="name">Name: </label><input type="text" id="name" onChange={this.changeHandler}/>
                <label htmlFor="name">Age: </label><input type="text" id="age" onChange={this.changeHandler}/>
                <button>Add</button>
            </form>
        )
    }
}

export default Adduser;