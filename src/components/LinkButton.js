import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/lib/Button'

export default ({
  to,
  children,
  ...props
}) => {
  return (
    <Link to={to}>
      <Button {...props} >
        {children}
      </Button>
    </Link>
  )
}