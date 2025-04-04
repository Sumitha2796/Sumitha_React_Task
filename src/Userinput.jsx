import { Paper } from "@mui/material"
import React, { useState } from "react"
import Button from "react-bootstrap/Button"

export default function UserInput({ addUser }) {
  const [name, setName] = useState("")

  const handleSubmit = () => {
    addUser(name)
    setName("")
  }

  return (
    <Paper
      elevation={3}
      style={{ padding: "16px", maxWidth: "400px", margin: "auto" }}
    >
      <input
        type="text"
        placeholder="Enter user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button variant="primary" onClick={handleSubmit}>
        Add
      </Button>
    </Paper>
  )
}
