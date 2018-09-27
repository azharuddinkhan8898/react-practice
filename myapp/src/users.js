import React from "react";

const Users = (props) => {
    const userList = props.users.map(user => {
        return(
            <div className="users-list" key={user.id}>
                <p>Name: {user.name}<br/>Age: {user.age}</p>  
                <button onClick = {() => props.deleteHandler(user.id)}>Delete</button>
            </div>
        )
    })
    return(
        <div className="users-list-wrapper">
            {userList}
        </div>
        
    )
}
export default Users;