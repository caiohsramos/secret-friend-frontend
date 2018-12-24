import React, { useEffect, useState } from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import axios from 'axios'
import Button from 'react-bootstrap/lib/Button'
import styled from 'styled-components'

import Jumbotron from '../../components/Jumbotron'
import Guest from '../../components/Guest'
import InfoAlert from '../../components/InfoAlert';

const RemoveButton = styled(Button)`
  float: right;
`

export default (props) => {
  const secretFriendID = props.match.params.id

  const [name, setName] = useState('...')
  const [guests, setGuests] = useState([])
  const [message, setMessage] = useState({ text: '' })

  useEffect(() => {
    axios.get(`http://localhost:3001/${secretFriendID}`)
      .then((resp) => {
        setName(resp.data.name)
        setGuests(resp.data.guests)
      })
      .catch((err) => {
        setMessage({ type: 'warning', text: "Amigo Secreto não encontrado!" })
      })
  }, [props.match.params.id])

  const renderGuests = () => (
    guests.map((guest, idx) => (
      <Guest key={idx} name={guest.name} email={guest.email} disabled />
    ))
  )

  const handleDelete = () => {
    axios.delete(`http://localhost:3001/${secretFriendID}`)
      .then(() => {
        setMessage({ type: 'success', text: "Amigo Secreto excluido!" })
      })
      .catch(() => {
        setMessage({ type: 'danger', text: "Falha ao excluir Amigo Secreto!" })
      })
  }

  const handleReSend = () => {
    setMessage({ type: 'info', text: "Enviando emails!" })
    axios.get(`http://localhost:3001/${secretFriendID}/rand`)
      .then(() => {
        setMessage({ type: 'success', text: "Emails reenviados!" })
      })
      .catch(() => {
        setMessage({ type: 'danger', text: "Falha ao enviar os emails!" })
      })
  }

  return (
    <Grid>
      <InfoAlert message={message} />
      <Jumbotron
        title={"Detalhes do Amigo Secreto: " + name}>
        {renderGuests()}
        <Button bsStyle="primary" onClick={handleReSend} disabled={Boolean(message.text)}>
          Reenviar emails
        </Button>
        <RemoveButton bsStyle="danger" onClick={handleDelete} disabled={Boolean(message.text)}>
          Remover Amigo Secreto
        </RemoveButton>
      </Jumbotron>
    </Grid>
  )
}