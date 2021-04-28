import React, { useState,useEffect, useRef } from 'react';
import { Container, Row, Col, Card, CardBody, FormGroup, Alert, Form, Input, Button, FormFeedback, Label, InputGroup, InputGroupAddon } from 'reactstrap';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { auth } from "../../Services/FirebaseConfig";
import { firebaseAuthServices } from "../../Services/firebaseAuthServices";
import hello from "../../Assets/hello.png"
const fireBaseBackend = new firebaseAuthServices();

function Login() {

   function tester (){
      var user = auth.currentUser;
      console.log(user)
   }

   const formik = useFormik({
      initialValues: {
         email: '',
         password: ''
      },
      validationSchema: Yup.object({
         email: Yup.string().required('Por favor informe seu Email'),
         password: Yup.string().required('Por favor informe sua Senha')
      }),
      onSubmit: values => {
         //props.loginUser(values.email, values.password, props.history);
         fireBaseBackend.loginUser( values.email, values.password)
      },
   });
  


   
   return (
      <React.Fragment>
        	<div className="account-pages my-5 pt-sm-1">
            <Container>
               <Row className="justify-content-center">
                  <Col md={8} lg={6} xl={5} >
                     <div className="text-center mb-2">
                        <Link to="/" className="auth-logo mb-2 d-block">
                           <img src={hello} alt="" height="50" className="logo logo-dark"/>
                        </Link>
                        <h4>Login</h4>
                     </div>
                     <Card>
                        <CardBody className="p-4">
                                        {
                                           // props.error && <Alert color="danger">{props.error}</Alert>
                                        }
                                <div className="p-3">
                                        
                                    <Form onSubmit={formik.handleSubmit}>
    
                                        <FormGroup>
                                            <Label>Email</Label>
                                            <InputGroup className="mb-3 bg-soft-light input-group-lg rounded-lg">
                                                <InputGroupAddon addonType="prepend">
                                                    <span className="input-group-text border-light text-muted">
                                                        <i className="ri-mail-line"></i>
                                                    </span>
                                                </InputGroupAddon>
                                                <Input
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    className="form-control bg-soft-light border-light"
                                                    placeholder="Informe seu email"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.email}
                                                    invalid={formik.touched.email && formik.errors.email ? true : false}
                                                />
                                                {formik.touched.email && formik.errors.email ? (
                                                    <FormFeedback type="invalid">{formik.errors.email}</FormFeedback>
                                                ) : null}
                                            </InputGroup>
                                        </FormGroup>

                                        <FormGroup className="mb-4">
                                            <div className="float-right">
                                                <Link to="forget-password" className="text-muted font-size-13">Não lembra da senha ?</Link>
                                            </div>
                                            <Label>Password</Label>
                                            <InputGroup className="mb-3 bg-soft-light input-group-lg rounded-lg">
                                                <InputGroupAddon addonType="prepend">
                                                    <span className="input-group-text border-light text-muted">
                                                        <i className="ri-lock-line"></i>
                                                    </span>
                                                </InputGroupAddon>
                                                <Input
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    className="form-control bg-soft-light border-light"
                                                    placeholder="Informe sua senha"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.password}
                                                    invalid={formik.touched.password && formik.errors.password ? true : false}
                                                />
                                                {formik.touched.password && formik.errors.password ? (
                                                    <FormFeedback type="invalid">{formik.errors.password}</FormFeedback>
                                                ) : null}
                                                
                                            </InputGroup>
                                        </FormGroup>

                                        <div className="custom-control custom-checkbox mb-4">
                                            <Input type="checkbox" className="custom-control-input" id="remember-check" />
                                            <Label className="custom-control-label" htmlFor="remember-check">Lembrar-me</Label>
                                        </div>

                                        <div>
                                            <Button color="primary" block className=" waves-effect waves-light" type="submit">Entrar</Button>
                                        </div>

                                    </Form>
                                </div>
                            </CardBody>
                        </Card>
                        <button color="primary" onClick={() => tester()}>Tetsra></button>
                         <div className="mt-5 text-center">
                            <p>Ainda não tem uma conta ? <Link to="register" className="font-weight-medium text-primary"> Cadastrar-se </Link> </p>
                            <p>© 2021 My App Donate <i className="mdi mdi-heart text-danger"></i>by Enterprise</p>
                        </div>
                  </Col>
               </Row>
            </Container>
         </div>
      </React.Fragment>
   )
}

export default Login