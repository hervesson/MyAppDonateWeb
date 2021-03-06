import React, {useEffect} from 'react';
import { withRouter, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, Card, CardBody, FormGroup, Alert, Form, Input, Button, FormFeedback, Label, InputGroup, InputGroupAddon } from 'reactstrap';
import { firebaseAuthServices } from "../../Services/firebaseAuthServices";
import { Redirect } from 'react-router-dom';
import hello from "../../Assets/hello.png"

const fireBaseBackend = new firebaseAuthServices();


const Register = (props) => {

   const formik = useFormik({
      initialValues: {
         email: '',
         password: ''
      },
      validationSchema: Yup.object({
         email: Yup.string().required('Por favor coloque seu Email'),
         password: Yup.string().required('Por favor coloque sua Senha')
      }),
      onSubmit: values => {
         fireBaseBackend.registerUser(values.email, values.password);
      }
   });
   	

    return (
      <React.Fragment>
      <div className="account-pages my-5 pt-sm-1">
         <Container>
            <Row className="justify-content-center">
               <Col md={8} lg={6} xl={5}>
                  <div className="text-center mb-4">
                     <Link to="/" className="auth-logo mb-2 d-block">
                        <img src={hello} alt="" height="50" className="logo logo-dark"/>
                     </Link>
                     <h4>Sign up</h4>  
                  </div>

                        <Card>
                            <CardBody className="p-4">
                                        {
                                            props.error && <Alert variant="danger">{props.error}</Alert>
                                        }
                                        {
                                            props.user && <Alert variant="success">Obrigado por se cadastrar conosco!</Alert>
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
                                                    placeholder="Enter email"
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
                                            <Label>Senha</Label>
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
                                                    placeholder="Enter Password"
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


                                        <div>
                                            <Button color="primary" block className=" waves-effect waves-light" type="submit">Cadastrar</Button>
                                        </div>

                                        <div className="mt-4 text-center">
                                            <p className="text-muted mb-0">Ao se cadastrar voc?? concorda com o MyAppDonate <Link to="#" className="text-primary">Termos de Uso</Link></p>
                                        </div>
                                        
                                    </Form>
                                </div>
                            </CardBody>
                        </Card>

                        <div className="mt-5 text-center">
                            <p>?? 2021 My App Donate <i className="mdi mdi-heart text-danger"></i>by Hervesson Porto</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </React.Fragment>
    )
}


export default Register;