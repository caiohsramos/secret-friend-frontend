import React, { useState } from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import FormControl from 'react-bootstrap/lib/FormControl'
import Col from 'react-bootstrap/lib/Col'
import styled from 'styled-components'

import Jumbotron from '../../components/Jumbotron'
import LinkButton from '../../components/LinkButton'

const CreateButton = styled(LinkButton)`
  margin-bottom: 15px;
`

const Input = styled(FormControl)`
  margin-bottom: 15px;
`

export default () => {
  const [input, setInput] = useState('')
  return (
    <Grid>
      <Jumbotron
        title='Amigo Secreto'
        subtitle='Ferramenta para criar e organizar amigos secretos'
        description='Crie ou acompanhe um Amigo Secreto'
        lead>
        <Row>
          <Col xs={12} md={6}>
            <CreateButton
              to='/secret-friend'
              bsStyle='primary'>
              Crie um amigo secreto
            </CreateButton>
          </Col>
          <form>
            <Col xs={9} md={4}>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='ID do Amigo Secreto' />
            </Col>
            <Col xs={3} md={2}>
              <LinkButton
                to={`/secret-friend/${input}`}
                bsStyle='info'
                type='submit'>
                Ver
            </LinkButton>
            </Col>
          </form>
        </Row>
      </Jumbotron >
    </Grid >
  )
}
