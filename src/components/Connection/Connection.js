import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import { Form, Input, Icon, Button, Select, Collapse, Col, Row, Menu} from 'antd';
import './Connection.css'
import logo from '../../img/logo.png' 
import { Link } from 'react-router-dom';

const FormItem = Form.Item;
const Option = Select.Option;
const Panel = Collapse.Panel;
const { SubMenu } = Menu;



function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Service extends Component {

	constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {

				let data = {
				  method: 'POST',
				  headers: {
				    'Accept': 'application/json',
				    'Content-Type': 'application/json',
				  },
				  body: JSON.stringify(values),
				 
				}
				
				return fetch('http://localhost:8002/connect', data)
				       	.then(function(response) {  
							return response.json();  
						})  
						.then(function(database) {  
                            if (!database.errors) {
                                window.localStorage.setItem('tables', JSON.stringify(database.data.tables));
                                console.log(window.localStorage.getItem('tables'));
                                this.props.history.push("/service");
                            }
                            
 
						}.bind(this))  
						.catch(function(error) {  
							console.log('Request failed', error)  
						});
            }
        });
    }

    render() {
        
        const { getFieldDecorator, getFieldsError } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 6},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 14},
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 6,
                },
            },
        };

        return (

            <div className="App">

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
                </div>

                <br/>
                <Form style={{width: '60%', margin: '0 auto'}} onSubmit={this.handleSubmit}>
                    
                    <h3 className="titleForm"> Credenciales de la Base de Datos </h3>
                    
                    <br/>
                    
                    <FormItem
                        {...formItemLayout}
                        label="Host"
                        hasFeedback>

                        {getFieldDecorator('host', {
                            rules: [{
                                required: true, message: 'Por favor, digite el nombre del host',
                            }],
                        })(
                        	<Input prefix={<Icon type="hdd" style={{ fontSize: 13 }} />} placeholder="IP" />
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="Usuario"
                        hasFeedback
                    >
                        {getFieldDecorator('user', {
                            rules: [{
                                required: true, message: 'Por favor, digite el nombre de usuario',
                            }],
                        })(
                        	<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Nombre de Usuario" />
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="Password"
                        hasFeedback
                    >
                        {getFieldDecorator('password', {
                            rules: [{
                                required: true, message: 'Por favor, digite la contrasena del usuario',
                            },
                                {
                                    validator: this.checkConfirm,
                                }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="contrasena" />
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="Tipo de BD"
                        hasFeedback
                    >
                        {getFieldDecorator('type', {
				            rules: [{ required: true, message: 'Por favor, seleccione el tipo de base de datos' }],
				        })(
				            <Select placeholder="Selecciona el tipo">
				              <Option value="postgresql">Postgresql</Option>
				              <Option value="mysql">Mysql</Option>
				              <Option value="oracle">Oracle</Option>
				              <Option value="sqlite">Sqlite</Option>
				            </Select>
				        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="Nombre BD"
                        hasFeedback
                    >
                        {getFieldDecorator('name', {
                            rules: [{
                                required: true, message: 'Por favor, digite el nombre de de la base de datos',
                            }],
                        })(
                        	<Input prefix={<Icon type="edit" style={{ fontSize: 13 }} />} placeholder="Nombre de la base de datos" />
                        )}
                    </FormItem>


                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>Iniciar</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const ServiceForm = Form.create()(Service);
export default withRouter(ServiceForm);
