import React from "react"

function User ({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList () {
    const users = [
        {
            id: 1,
            username: `juham`,
            email: `juham@ebay.com`
        },
        {
            id: 2,
            username: `hamju`,
            email: `hamju@gmail.com`
        },
        {
            id: 3,
            username: `juhyun`,
            email: `juhyun@gmail.com`
        }
    ]

    return (
        <div>
            {users.map(user => (
            <User user = {user} key= {user.id}/>
            ))}
        </div>
    )
}

export default UserList;