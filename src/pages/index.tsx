import * as React from 'react'
import { Link } from 'gatsby'
import { Button, Input, Row, Col } from 'antd'
import { YuqueOutlined } from '@ant-design/icons'

import ReactPlayer from 'react-player'

const IndexPage = () => {
  return (
    <div
      align="center"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 20,
        maxWidth: 1200,
        margin: '0 auto',
        height: '100vh'
      }}
    >
      <header style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', padding: 10 }}>
        <div style={{display: 'flex', alignItems: 'center' }}>
            <YuqueOutlined style={{ fontSize: '26px', color: '#08c' }} />
            <h1 style={{ fontWeight: 'bold', marginBottom: 0, marginLeft: 14 }}>C-3PO</h1>
        </div>
        <div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeS14FmnJDB_tg_0vq9mxQbwV4mbg7BoZgg0ZHzwaHrMX76Jg/viewform?usp=sf_link">
              <Button type="primary">Solicitar acesso antecipado</Button>
          </a>
        </div>
      </header>
      <div style={{ display: 'flex', flexDirection: 'row'}}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            flex: '1 1 0%',
            marginRight: 80
          }}
        >
          <p
            style={{
              textAlign: 'start',
              fontSize: 35,
              fontWeight: 'bold',
            }}
          >
            Extensão do Chrome de dublagem automatizada com inteligência artificial para o Youtube.
          </p>
          <p
            style={{
              textAlign: 'start',
              fontSize: 18,
            }}
          >
            Com um clique seu vídeo vai ter o áudio convertido para o idioma de sua escolha.
          </p>
          <Row style={{ marginTop: 20}}>
          <Col span={12}>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeS14FmnJDB_tg_0vq9mxQbwV4mbg7BoZgg0ZHzwaHrMX76Jg/viewform?usp=sf_link">
                <Button type="primary">Solicitar acesso antecipado</Button>
            </a>
          </Col>
          </Row>
        </div>
        <Row style={{ display: 'flex', flex: '1 1 0%' }}>
          <ReactPlayer url='https://www.youtube.com/watch?v=jNbkVlMJy-o' />
        </Row>
      </div>
      <div style={{bottom: 20, borderTop: '1px solid #eee', paddingTop: 30}}>
        <p>Feito com ❤️ em Cuiabá</p>
      </div>
    </div>
  )
}

export default IndexPage
