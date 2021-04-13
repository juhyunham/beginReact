import React, { useRef, useState } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: ""
  })

  const {username, email} = inputs

  const onChange = (e) => {
    const {name, value} =  e.target

    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const [users, setUsers] = useState([
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
    ])

  const nextId = useRef(4)

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    }

    setInputs({
      username: "",
      email: ""
    })

    setUsers([...users, user])

    console.log(nextId.current)
    nextId.current += 1
  }

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <>
      <CreateUser 
        username = {username}
        email = {email}
        onChange = {onChange}
        onCreate = {onCreate}
      />
      <UserList 
        users = {users}
        onRemove = {onRemove}
      />
    </>
  );
}

export default App;