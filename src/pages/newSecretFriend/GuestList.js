import React from 'react'
import Guest from '../../components/Guest'

export default ({
  list,
  handleChange
}) => {
  const renderGuests = (guestList) => (
    guestList.map((guest, idx) => (
      <Guest
        key={idx}
        name={guest.name}
        email={guest.email}
        handleChange={(changed) => handleChange(idx, changed)} />
    ))
  )

  return renderGuests(list, handleChange)
}