import React, { useState } from "react"
import { FaTrash } from "react-icons/fa"
import Button from "react-bootstrap/Button"
import { Paper } from "@mui/material"

export default function Display({ users, deleteUser, updateUser }) {
  const [editId, setEditId] = useState(null)
  const [newName, setNewName] = useState("")

  const handleUpdate = (id, currentName) => {
    setEditId(id)
    setNewName(currentName)
  }

  const handleSave = (id) => {
    updateUser(id, newName)
    setEditId(null)
    setNewName("")
  }

  return (
    <Paper
      elevation={3}
      style={{ padding: "16px", maxWidth: "400px", margin: "auto" }}
    >
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ gap: "6px" }}>
            {editId === user.id ? (
              <>
                <input
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
                <Button variant="success" onClick={() => handleSave(user.id)}>
                  Save
                </Button>
              </>
            ) : (
              <>
                {user.name}
                <Button
                  variant="success"
                  onClick={() => handleUpdate(user.id, user.name)}
                >
                  Update
                </Button>
                <FaTrash onClick={() => deleteUser(user.id)}>Delete</FaTrash>
              </>
            )}
          </li>
        ))}
      </ul>
    </Paper>
  )
}
