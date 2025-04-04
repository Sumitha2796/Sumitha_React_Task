import React, { useState } from "react"
import Userinput from "./Userinput"
import Display from "./Display"
import "./styles.css"

export default function App() {
  //Here globally created the state and function
  //and passed as props to the child component(Userinput and Display)
  const [users, setUsers] = useState([]) //Created state user to get input from the user

  const addUser = (name) => {
    if (name.trim() !== "") {
      setUsers([...users, { id: Date.now(), name }])
    }
  } //If the input field is not null then set the input.

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  } //Get the key of the delete item and check with list
  //if matches fiter the particular item from the list

  const updateUser = (id, newName) => {
    setUsers(
      users.map((user) => (user.id === id ? { ...user, name: newName } : user))
    )
  }

  return (
    <div className="App">
      <h4>You are Wlecome!</h4>

      <Userinput addUser={addUser} />
      <Display users={users} deleteUser={deleteUser} updateUser={updateUser} />
    </div>
  )
}
