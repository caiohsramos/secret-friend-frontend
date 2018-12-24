import React from 'react'
import Jumbotron from 'react-bootstrap/lib/Jumbotron'

export default ({
  title,
  subtitle,
  children,
  lead
}) => {
  return (
    <Jumbotron>
      <h1>{title}</h1>
      <p>
        {subtitle}
      </p>
      <hr />
      <div className={lead ? "lead" : ""}>
        {children}
      </div>
    </Jumbotron>
  )
}