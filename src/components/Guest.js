import React from 'react'
import LabelInput from './LabelInput'
import styled from 'styled-components'

const GuestContainer = styled.div`
  margin: 1%;
  margin-bottom: 15px;
  border: 3px solid rgba(108,35,135,0.68);
  border-radius: 10px;
`
const StyledInput = styled(LabelInput)`
  margin: 20px;
`

const Guest = ({ name, email, handleChange, disabled }) => {
  return (
    <GuestContainer>
      <StyledInput
        label='Nome'
        value={name}
        placeholder='Nome'
        type='text'
        disabled={disabled}
        onChange={(e) => handleChange({ name: e.target.value, email: email })}
      />
      <StyledInput
        label='Email'
        value={email}
        placeholder='Email'
        type='email'
        disabled={disabled}
        onChange={(e) => handleChange({ name: name, email: e.target.value })}
      />
    </GuestContainer>
  )
}

export default Guest