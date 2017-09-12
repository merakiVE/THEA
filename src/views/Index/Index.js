//Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


// Ant Disign
import { Menu, Icon, Button, Col, Row, Card } from 'antd'

import logo from '../../img/logo.png'  

const { SubMenu } = Menu;


class Index extends Component {
  render() {
    return (
        <div className="">

          <Menu mode="horizontal">
            <Menu.Item key="1">
              <img src={logo}/>
            </Menu.Item>

            <Menu.Item key="2">
              <Link to="/home"><Icon type="home"/> Inicio </Link> 
            </Menu.Item>

            <Menu.Item key="3">
              <Link to="/login"><Icon type="user"/> Iniciar Sesion </Link> 
            </Menu.Item>

            <Menu.Item key="4">
              <Link to="/register"><Icon type="mail"/> Registrarse </Link> 
            </Menu.Item>

            <Menu.Item key="5">
              <Link to="/service"><Icon type="user-add"/> Crear Servicio </Link>
            </Menu.Item>
            
            <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>Servicios</span></span>}>
              <Menu.Item key="6">Mis Servicios</Menu.Item>
              <Menu.Item key="7">Monitoreo</Menu.Item>
            </SubMenu>
          </Menu>


          <Row type="flex" justify="center">
            <Col className="gutter-row" span={12}>
              <h2>  
                Conjunto estandarizado de herramientas de desarrollo para la union e interconexion de Neurones. 
             </h2>
            </Col>
          </Row>

          <br/><br/>
          
          <Row type="flex" justify="center">
            <Col className="gutter-row" span={4}>
              <Button>  Inicia La experiencia </Button>
            </Col>
          </Row>

          <br/><br/>

          <Row gutter={16} type="flex" justify="center">
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">
                <Card title="Facil Uso">
                  CEHDUN cuenta con un set de herramientas que fueron llevadas a pruebas 
                  de accesibilidad para brindar una grata experiencia, un facil uso y comprension por parte cualquier persona.
                </Card>
              </div>
            </Col>
            
            <Col className="gutter-row" span={6}>
              <div className="gutter-box"> 
                <Card title="Enfocados al usuario" justify="">
                  Enfocados en brindar la mejor experiencia a los usuarios
                </Card>
              </div>
            </Col>

            <Col className="gutter-row" span={6}>
              <div className="gutter-box">
                <Card title="Tienes el control">
                  CEHDUN Te brinda la posibilidad de tener el control total de tus APIS, 
                  brindandote todo lo necesario para poder gestionar tus ENDPOINTS como quieras, dandote seguridad y control sobre tus datos .
                </Card>
              </div>
            </Col>
          </Row>


        </div>
    );
  }
}


export default Index;
