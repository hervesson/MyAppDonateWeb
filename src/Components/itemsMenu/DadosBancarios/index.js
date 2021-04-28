import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Col, Row, Button, Form, FormGroup, Label, Input, Table, FormFeedback } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import  bancos from '../../data/bancos.json';
import "./index.css"

import { connect } from "react-redux";

import { setDadosBancarios } from "../../../Redux/actions";

function Conta (props){
   const [dropdownOpen, setDropdownOpen] = useState(false);
   const [dropdownOpen1, setDropdownOpen1] = useState(false);
   const [lastClicked, setLastClicked] = useState("Selecione o banco");
   const [tipoPix, settipoPix] = useState("Tipo de Pix");

   const toggle = () => setDropdownOpen(prevState => !prevState);
   const toggle1 = () => setDropdownOpen1(prevState => !prevState);

   function renderItems(){
      return( 
         bancos.map((item, index) => 
            <DropdownItem value={item.label} key={index} label={item.label} onClick={() => setLastClicked(item.label)}>{item.label}</DropdownItem>
         )
      );
   }

   const formik = useFormik({
      initialValues: {
         banco: '',
         conta: '',
         digito: '',
         pix: '',
         tipoPix: ''
      },
      validationSchema: Yup.object().shape({
         conta: Yup.string().required('Por favor informe a conta'),
         digito: Yup.string().required('Por favor informe o digito'),
         pix: Yup.string().required('Por favor informe numero do pix'),
      }),
      onSubmit: values => {
         props.setDadosBancarios(values.banco, values.conta, values.digito, values.pix, values.tipoPix)
         //fireBaseBackend.gravarEvento( values.Rua, values.Bairro,  values.Numero)
      },
   });

   return (
      <div className="main">
         <div className="main__container">
            <div className="charts__left">
               <div className="charts__left__title">
                  <div>
                     <h1>Dados bancários</h1>
                  </div>
                  <i className="fa fa-usd"></i>
               </div>
               <Form onSubmit={formik.handleSubmit}>
                  <Row form>
                     <Col md={1.5}>
                        <FormGroup>
                           <Label for="exampleCity">Banco</Label>
                           <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                              <DropdownToggle caret>
                                {lastClicked}
                              </DropdownToggle>
                              <DropdownMenu
                                 name="banco"
                                 id="banco"
                                 value={formik.values.banco}
                                 onChange={formik.handleChange}
                                 onBlur={formik.handleBlur}
                                 modifiers={{
                                    setMaxHeight: {
                                      enabled: true,
                                      order: 890,
                                      fn: (data) => {
                                        return {
                                          ...data,
                                          styles: {
                                            ...data.styles,
                                            overflow: 'auto',
                                            maxHeight: '200px',
                                          },
                                        };
                                      },
                                    },
                                  }}
                                 >
                                {renderItems()}
                              </DropdownMenu>
                           </Dropdown>
                        </FormGroup>
                     </Col>
                     <Col md={3}>
                        <FormGroup>
                           <Label for="exampleState">Conta</Label>
                           <Input   type="text" 
                                    id="conta" 
                                    name="conta" 
                                    placeholder="00000000"
                                    value={formik.values.conta}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    invalid={formik.touched.conta && formik.errors.conta ? true : false}/>
                        </FormGroup>
                     </Col>
                     <Col md={1}>
                        <FormGroup>
                           <Label for="exampleZip">Digito</Label>
                           <Input   type="text"
                                    name="digito"  
                                    id="digito"
                                    placeholder="X"
                                    value={formik.values.digito}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    invalid={formik.touched.digito && formik.errors.digito ? true : false}
                                    />
                        </FormGroup>  
                     </Col>
                  </Row>

                  <Row form>
                     <Col md={1.5}>
                        <FormGroup>
                           <Label for="exampleCity">Tipo de PIX</Label>
                           <Dropdown isOpen={dropdownOpen1} toggle={toggle1}>
                              <DropdownToggle caret>
                                {tipoPix}
                              </DropdownToggle>
                              <DropdownMenu  type="text" 
                                 id="tipoPix" 
                                 name="tipoPix" 
                                 placeholder="00000000"
                                 value={formik.values.tipoPix}
                                 onChange={formik.handleChange}
                                 onBlur={formik.handleBlur}
                              >
                                <DropdownItem value="CPF" label="CPF" onClick={() => settipoPix("CPF")}>CPF</DropdownItem>
                                <DropdownItem value="E-mail" label="E-mail" onClick={() => settipoPix("E-mail")}>E-mail</DropdownItem>
                                <DropdownItem value="Numero de telefone" label="Numero de telefone" onClick={() => settipoPix("Numero de telefone")}>Numero de telefone</DropdownItem>
                              </DropdownMenu>
                           </Dropdown>
                        </FormGroup>
                     </Col>
                     <Col md={4}>
                        <FormGroup>
                           <Label for="exampleState">Digite seu pix</Label>
                           <Input   type="text"
                                    id="pix"
                                    name="pix"  
                                    placeholder="00000000"
                                    value={formik.values.pix}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    invalid={formik.touched.pix && formik.errors.pix ? true : false}/>
                        </FormGroup>
                     </Col>
                  </Row>

                  <Button color="primary" block className=" waves-effect waves-light" type="submit">Salvar</Button>
               </Form>   


               <div>
                  <Label>Valores de arracadação:</Label>
               </div>
                  
               <Table dark>
                  <thead>
                     <tr>
                        <th>Descrição:</th>
                        <th></th>
                        <th></th>
                        <th>Valor:</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>Arrecadodo geral:</td>
                        <td></td>
                        <td></td>
                        <td>R$ 12.000</td>
                     </tr>
                     <tr>
                        <td>Arrecadado do mês:</td>
                        <td></td>
                        <td></td>
                        <td>R$ 1.500</td>
                     </tr>
                     <tr>
                        <td>Retirado no mês:</td>
                        <td></td>
                        <td></td>
                        <td>R$ 1.000</td>
                     </tr>
                     <tr>
                        <td>Saldo restante:</td>
                        <td></td>
                        <td></td>
                        <td>R$ 500</td>
                     </tr>
                  </tbody>
               </Table>
            </div>
         </div>
      </div>
   );
}

const mapStatetoProps = state => {
   return {  };
};

export default connect(mapStatetoProps, { setDadosBancarios })(Conta);

