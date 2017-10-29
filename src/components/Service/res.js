import React, { Component } from 'react';
import { Form, Input, Icon, Button, Select, Collapse, Col, Row, Menu} from 'antd';
import { Link } from 'react-router-dom';
import './Service.css' 
import logo from '../../img/logo.png'  

const FormItem = Form.Item;
const Option = Select.Option;
const Panel = Collapse.Panel;
const lo = require('lodash');
const { SubMenu } = Menu;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Service extends Component {

	constructor(props) {
        super(props);
        this.state = {
            api: {},
            resource: []
        };
    }

    componentWillMount(){
        console.log(window.localStorage.getItem('tables'));
        this.setState({
            tables: JSON.parse(window.localStorage.getItem('tables'))
        })
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

                <br/>
                <Form style={{width: '60%', margin: '0 auto'}} onSubmit={this.handleSubmit}>
                    
                    <h2 className="titleForm"> <strong> Creacion de la API </strong> </h2>
                    <h3 className="titleForm"> Configuracion General </h3>
                    <br/>
                    
                    <FormItem
                        {...formItemLayout}
                        label="Nombre del servicio"
                        hasFeedback>

                        {getFieldDecorator('mainname', {
                            rules: [{
                                required: true, message: 'Por favor, digite el nombre del servicio',
                            }],
                        })(
                            <Input prefix={<Icon type="hdd" style={{ fontSize: 13 }} />} placeholder="servicio" />
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="Titulo"
                        hasFeedback>

                        {getFieldDecorator('title', {
                            rules: [{
                                required: true, message: 'Por favor, digite el titulo del servicio',
                            }],
                        })(
                            <Input prefix={<Icon type="hdd" style={{ fontSize: 13 }} />} placeholder="titulo" />
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="Descripcion"
                        hasFeedback>

                        {getFieldDecorator('description', {
                            rules: [{}],
                        })(
                            <Input prefix={<Icon type="hdd" style={{ fontSize: 13 }} />} placeholder="descripcion" />
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="host"
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
                        label="Puerto"
                        hasFeedback>

                        {getFieldDecorator('Puerto', {
                            rules: [{
                                required: true, message: 'Por favor, digite el puerto',
                            }],
                        })(
                            <Input prefix={<Icon type="hdd" style={{ fontSize: 13 }} />} placeholder="Puerto" />
                        )}
                    </FormItem>

                    <h3 className="titleForm"> <strong> Recurso </strong> </h3>
                    <br/>
                    <FormItem
                        {...formItemLayout}
                        label="Nombre"
                        hasFeedback>

                        {getFieldDecorator('namegroup', {
                            rules: [{
                                required: true, message: 'Por favor, digite el nombre del recurso',
                            }],
                        })(
                            <Input prefix={<Icon type="hdd" style={{ fontSize: 13 }} />} placeholder="recurso" />
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="Ruta"
                        hasFeedback>

                        {getFieldDecorator('basepath', {
                            rules: [{
                                required: true, message: 'Por favor, digite el la ruta del recurso',
                            }],
                        })(
                            <Input prefix={<Icon type="hdd" style={{ fontSize: 13 }} />} placeholder="/ejmplo" />
                        )}
                    </FormItem>

                    <h3 className="titleForm"> <strong> Acciones del recurso </strong> </h3>
                    <br/>
                    <FormItem
                        {...formItemLayout}
                        label="Nombre"
                        hasFeedback>

                        {getFieldDecorator('name', {
                            rules: [{
                                required: true, message: 'Por favor, digite el nombre de la accion',
                            }],
                        })(
                            <Input prefix={<Icon type="hdd" style={{ fontSize: 13 }} />} placeholder="accion" />
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="Descripcion"
                        hasFeedback>

                        {getFieldDecorator('description', {
                            rules: [{
                                required: true, message: 'Por favor, digite el la descripcion del accion',
                            }],
                        })(
                            <Input prefix={<Icon type="hdd" style={{ fontSize: 13 }} />} placeholder="descripcion" />
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="Metodo"
                        hasFeedback
                    >
                        {getFieldDecorator('method', {
                            rules: [{ required: true, message: 'Por favor, seleccione el metodo de la accion' }],
                        })(
                            <Select placeholder="Selecciona el metodo">
                              <Option value="POST">POST</Option>
                              <Option value="GET">GET</Option>
                              <Option value="PUT">PUT</Option>
                              <Option value="DELETE">DELETE</Option>
                            </Select>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="Ruta"
                        hasFeedback>

                        {getFieldDecorator('route', {
                            rules: [{
                                required: true, message: 'Por favor, digite el la ruta de la accion',
                            }],
                        })(
                            <Input prefix={<Icon type="hdd" style={{ fontSize: 13 }} />} placeholder="/miruta" />
                        )}
                    </FormItem>

                    <h3 className="titleForm"> <strong> Parametros de la accion </strong> </h3>
                    <br/>
                    <FormItem
                        {...formItemLayout}
                        label="Nombre"
                        hasFeedback>

                        {getFieldDecorator('name', {
                            rules: [{
                                required: true, message: 'Por favor, digite el nombre del parametro',
                            }],
                        })(
                            <Input prefix={<Icon type="hdd" style={{ fontSize: 13 }} />} placeholder="nombre" />
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="Tipo"
                        hasFeedback>

                        {getFieldDecorator('type', {
                            rules: [{
                                required: true, message: 'Por favor, digite el tipo de parametro',
                            }],
                        })(
                            <Input prefix={<Icon type="hdd" style={{ fontSize: 13 }} />} placeholder="boolean" />
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="Descripcion"
                        hasFeedback>

                        {getFieldDecorator('type', {
                            rules: [{
                                required: true, message: 'Por favor, digite el una descripcion del parametro',
                            }],
                        })(
                            <Input prefix={<Icon type="hdd" style={{ fontSize: 13 }} />} placeholder="boolean" />
                        )}
                    </FormItem>

                    <h3 className="titleForm"> <strong> Payload </strong> </h3>
                    <br/>

                    <FormItem
                        {...formItemLayout}
                        label="Nombre"
                        hasFeedback>

                        {getFieldDecorator('name', {
                            rules: [{
                                required: true, message: 'Por favor, digite el nombre del payload',
                            }],
                        })(
                            <Input prefix={<Icon type="hdd" style={{ fontSize: 13 }} />} placeholder="boolean" />
                        )}
                    </FormItem>

                    <h3 className="titleForm"> <strong> Atributos del Payload </strong> </h3>
                    <br/>

                    <FormItem
                        {...formItemLayout}
                        label="Nombre"
                        hasFeedback>

                        {getFieldDecorator('name', {
                            rules: [{
                                required: true, message: 'Por favor, digite el nombre',
                            }],
                        })(
                            <Input prefix={<Icon type="hdd" style={{ fontSize: 13 }} />} placeholder="nombre" />
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="Tipo"
                        hasFeedback>

                        {getFieldDecorator('type', {
                            rules: [{
                                required: true, message: 'Por favor, digite el tipo',
                            }],
                        })(
                            <Input prefix={<Icon type="hdd" style={{ fontSize: 13 }} />} placeholder="tipo" />
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="Descripcion"
                        hasFeedback>

                        {getFieldDecorator('description', {
                            rules: [{
                                required: true, message: 'Por favor, digite el la descripcion',
                            }],
                        })(
                            <Input prefix={<Icon type="hdd" style={{ fontSize: 13 }} />} placeholder="descripcion" />
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="Requerido"
                        hasFeedback
                    >
                        {getFieldDecorator('required', {
                            rules: [{ required: true, message: 'Por favor, seleccione si el campo es requerido' }],
                        })(
                            <Select placeholder="Selecciona una opcion">
                              <Option value="true">True</Option>
                              <Option value="false">False</Option>
                            </Select>
                        )}
                    </FormItem>

                    <h3 className="titleForm"> <strong> Respuesta </strong> </h3>
                    <br/>

                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>Iniciar</Button>
                    </FormItem>
                </Form>


                <Row type="flex">
                    <Col className="gutter-row" span={7}>

                        { this.state.tables.map((table, index_table)=>{
                            return (
                                <Collapse key={index_table}>
                                    <Panel header={table.table_name}>
                                        {
                                            table.columns.map((colum, index_colum) => {
                                                return ( 
                                                    <div key={index_colum} >
                                                        <label>{ colum.column_name}</label>
                                                        <Button type="primary" shape="circle" icon="plus" />
                                                    </div>
                                                )
                                            })
                                        }
                                    </Panel>
                                </Collapse>
                                )
                            }) 
                        }
                    </Col>
                </Row>
                
            </div>
        );
    }
}

const ServiceForm = Form.create()(Service);
export default ServiceForm;
