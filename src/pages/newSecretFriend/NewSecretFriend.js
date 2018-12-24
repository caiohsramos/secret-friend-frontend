import React, { useState } from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import styled from 'styled-components'
import Button from 'react-bootstrap/lib/Button'
import Row from 'react-bootstrap/lib/Row'
import InfoAlert from '../../components/InfoAlert'
import axios from 'axios'

import LabeInput from '../../components/LabelInput'
import Jumbotron from '../../components/Jumbotron'
import GuestList from './GuestList'

const SectionTitle = styled.p`
  margin-top: 15px;
`

const AddButton = styled(Button)`
  margin-bottom: 10px;
`

const RemoveButton = styled(Button)`
  float: right;
`

const SubmitButton = styled(Button)`
  margin-top: 15px;
  margin-left: 5px;
`

const ButtonContainer = styled(Row)`
  padding-left: 30px;
  padding-right: 30px;
`

export default () => {
  const [name, setName] = useState('')
  const [guestList, setGuestList] = useState([])
  const [message, setMessage] = useState({ text: '' })

  const handleSubmit = (name, guestList) => {
    setMessage({ type: 'info', text: `Amigo Secreto está sendo criado!` })
    const payload = {
      name: name,
      guests: guestList,
    }

    axios.post("http://localhost:3001", payload)
      .then((resp) => {
        setMessage({ type: 'info', text: `Amigo Secreto com ID ${resp.data._id} está sendo sorteado!` })
        axios.get(`http://localhost:3001/${resp.data._id}/rand`)
          .then(() => {
            setMessage({ type: 'success', text: `Amigo Secreto com ID ${resp.data._id} foi criado e sorteado!` })
          })
          .catch(() => {
            setMessage({ type: 'danger', text: `Amigo Secreto com ID ${resp.data._id} foi criado porém teve erro no sorteio! Use a página inicial para conferir os dados e ressortear!` })
          })
      })
      .catch((err) => {
        setMessage({ type: 'danger', text: 'Falha na criação!' })
      })
  }

  const addGuest = () => {
    setGuestList([...guestList, { name: '', email: '' }])
  }

  const removeGuest = () => {
    var newGuestList = [...guestList]
    newGuestList.pop()
    setGuestList(newGuestList)
  }
  const handleListChange = (idx, modifiedGuest) => {
    var newGuestList = [...guestList]
    newGuestList[idx] = modifiedGuest
    setGuestList(newGuestList)
  }

  return (
    <Grid>
      <InfoAlert message={message} />
      <Jumbotron
        title='Criar Amigo Secreto'>
        <LabeInput
          label='Nome do Amigo Secreto'
          type='text'
          value={name}
          placeholder='Nome do Amigo Secreto'
          onChange={(e) => { setName(e.target.value) }}
        />
        <SectionTitle>
          Participantes ({guestList.length})
        </SectionTitle>
        <GuestList
          list={guestList}
          handleChange={handleListChange}
        />
        <ButtonContainer>
          <AddButton onClick={addGuest} disabled={Boolean(message.text)}>
            Adicionar Participante
          </AddButton>
          <RemoveButton onClick={removeGuest} bsStyle='danger' disabled={!guestList.length || Boolean(message.text)}>
            Remover Participante
          </RemoveButton>
        </ButtonContainer>
        <Row>
          <SubmitButton
            bsStyle='success'
            disabled={!guestList.length || Boolean(message.text)}
            onClick={() => handleSubmit(name, guestList)}>
            Criar e sortear Amigo Secreto
          </SubmitButton>
        </Row>
      </Jumbotron>
    </Grid>
  )
}