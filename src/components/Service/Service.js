import React, { Component } from 'react';
import { Form, Input, Icon, Button, Select, Collapse, Col, Row, Menu, Table} from 'antd';
import { Link } from 'react-router-dom';
import './Service.css' 
import logo from '../../img/logo.png'  


const FormItem = Form.Item;
const Option = Select.Option;
const Panel = Collapse.Panel;
const lo = require('lodash');
const { SubMenu } = Menu;

const columns_recurso = [
    {
        title: 'Name',
        dataIndex: 'namegroup',
        key: 'namegroup',
        render: text => <a href="#">{text}</a>,
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
            <a href="#">Action 一 {record.name}</a>
            <span className="ant-divider" />
            <a href="#">Delete</a>
            <span className="ant-divider" />
            <a href="#" className="ant-dropdown-link">
            More actions <Icon type="down" />
            </a>
            </span>
        ),
    }
];


function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Service extends Component {

	constructor(props) {
        super(props);
        this.state = {
            api: {},
            resource: {},
        };

        this.state.api.resources = [];
        this.state.resource.namegroup = '';
        this.state.resource.basepath = '';

        this.addResource = this.addResource.bind(this);
        this.onChangeResource = this.onChangeResource.bind(this);
    }

    componentWillMount(){
        console.log(window.localStorage.getItem('tables'));
        this.setState({
            tables: JSON.parse(window.localStorage.getItem('tables'))
        })
    }

    onChangeResource (e) {
        this.state.resource[e.target.name] = e.target.value;
    }

    addResource (e) {
        var resource ={};

        resource.basepath = this.state.resource.basepath;
        resource.namegroup = this.state.resource.namegroup;
        this.state.resource.namegroup = '';
        this.state.resource.basepath = '';
        this.state.api.resources.push(resource);
        this.setState(this.state.api.resources);
        this.setState(this.state.api.resource);
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
                <Form name="" style={{width: '60%', margin: '0 auto'}} onSubmit={this.handleSubmit}>
                    
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
                </Form>

                <Form onSubmit={this.addResource}>

                    <Row>
                        <Col span={12}>
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
                                    <Input prefix={<Icon type="hdd" style={{ fontSize: 13 }} />} 
                                    placeholder="recurso"
                                    name="namegroup" 
                                    value={this.state.resource.namegroup} 
                                    onChange={this.onChangeResource} />
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
                                    <Input prefix={<Icon type="hdd" style={{ fontSize: 13 }} />} 
                                    placeholder="/ejemplo"
                                    name="basepath" 
                                    value={this.state.resource.basepath} 
                                    onChange={this.onChangeResource} />
                                )}
                            </FormItem>

                            <FormItem {...tailFormItemLayout}>
                                <Button type="primary" 
                                    onClick={this.addResource}>
                                    Agregar
                                </Button>
                            </FormItem>

                        </Col>
                        
                        <Col span={12}>
                            <Table columns={columns_recurso} dataSource={this.state.api.resources} />
                        </Col>
                    </Row>

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
