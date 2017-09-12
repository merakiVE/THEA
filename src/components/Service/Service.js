import React, {Component} from 'react';
import { Form, Input, Icon, Button, Select } from 'antd';
import './Service.css'

const FormItem = Form.Item;
const Option = Select.Option;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Service extends Component {
    state = {
        dataBase: [],
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {

            	console.log(values);
				let data = {
				  method: 'POST',
				  mode: 'no-cors',
				  headers: {
				    'Accept': 'application/json',
				    'Content-Type': 'application/json',
				  },
				  body: JSON.stringify(values),
				 
				}
				
				console.log('Received values of form: ', values);

				return fetch('http://localhost:8080/syndesi/connect', data)
				       .then((response) => {
				       		console.log(response)
					        return response
					    })
						.then((data) => {
							console.log(data)
						}) 
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
export default ServiceForm;
