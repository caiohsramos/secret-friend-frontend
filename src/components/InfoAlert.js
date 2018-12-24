import React from 'react'
import Alert from 'react-bootstrap/lib/Alert'

export default ({ message }) => {
  if (!message.text) return null
  return (
    <Alert bsStyle={message.type}>
      <p>{message.text}</p>
    </Alert>
  )
}