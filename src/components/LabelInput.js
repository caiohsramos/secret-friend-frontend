import React from 'react'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

export default ({
  label,
  placeholder,
  type,
  value,
  onChange,
  className,
  disabled
}) => (
    <Row className={className}>
      <Col xs={12} md={3}>
        <ControlLabel>
          {label}
        </ControlLabel>
      </Col>
      <Col xs={12} md={9}>
        <FormControl
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </Col>
    </Row>
  )