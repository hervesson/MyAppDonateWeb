import React, { useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardImg, CardBody, CardTitle, CardText, UncontrolledTooltip } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./index.css"

import profile from "../../../Assets/profile.jpg"
import { firebaseFirestoreServices } from "../../../Services/firebaseFirestoreServices"; 

const fireBaseBackend = new firebaseFirestoreServices();

const Conta = (props) => {
   const [fileImage, setfileImage] = useState("");
   const [errorImage, setErrorImage] = useState("")


   const handleImageChange = e => {
      if(e.target.files.length !==0 )
      setfileImage(e.target.files[0])
   }

   function messageIdGenerator() {
      if(fileImage !== ""){
         const queiraBem =  URL.createObjectURL( fileImage )
         return queiraBem
      }else{
         return false
      }
   }


   const formik = useFormik({
      initialValues: {
         nome: '',
         descricao: '',
         video: '',
         email:'',
         telefone: '',
         endereco: '',
         cidade: '',
         estado:'',
         cep:'',
         tags:''
      },
      validationSchema: Yup.object({
         nome: Yup.string().required('Por favor informe o nome da entidade'),
         descricao: Yup.string().required('Por favor informe a descrição'),
         email: Yup.string().required('Por favor informe o email'),
         telefone: Yup.string().required('Por favor informe o seu telefone'),
         endereco: Yup.string().required('Por favor informe o seu endereco'),
         cidade: Yup.string().required('Por favor informe a sua cidade'),
         estado: Yup.string().required('Por favor informe o seu estado'),
         cep: Yup.string().required('Por favor informe o seu cep'),
      }),
      onSubmit: values => {
         if(fileImage == ""){
            setErrorImage(true)
         }else {
            fireBaseBackend.gravarConta( 
            values.nome, 
            values.descricao, 
            values.video, 
            values.email,
            values.telefone,
            values.endereco,
            values.cidade,
            values.estado,
            values.cep,
            values.tags 
         )}
      },
   });


   return (
      <div className="main">
         <div className="main__container">
            <div className="charts__left">
               <div className="charts__left__title">
                     <div>
                        <h1>Conta</h1>
                     </div>
                     <i className="fa fa-user"></i>
                  </div>
               <Form onSubmit={formik.handleSubmit}>
                  <FormGroup>
                     <img src={messageIdGenerator() ? messageIdGenerator() : profile } 
                        alt="Selecione a foto de perfil" style={{width: 150, height: 150}}>
                     </img>
                     <Input onChange={(e) => handleImageChange(e)} accept="image/*" type="file" name="fileInput" size="60" />
                     {errorImage ? (
                        <p className={"fs-6 text-danger"}>adicione a foto de perfil</p>
                     ) : null}
                  </FormGroup>
                  <FormGroup>
                     <Label   for="name">Nome</Label>
                     <Input   type="text" 
                              id="nome" 
                              name="nome" 
                              placeholder="Centro de ajuda a pessoas afetadas pelo COVID"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.nome}
                              invalid={formik.touched.nome && formik.errors.nome ? true : false}
                     />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleDescricao">Descrição</Label>
                     <Input   type="textarea"
                              id="descricao" 
                              name="descricao"
                              placeholder="Centro de ajuda a pessoas afetadas pelo COVID"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.descricao}
                              invalid={formik.touched.descricao && formik.errors.descricao ? true : false}  />
                  </FormGroup>
                  <FormGroup>
                     <Label for="video">Vídeo institucional</Label>
                     <Input   type="text" 
                              id="video"
                              name="video"  
                              placeholder="youtube.com/videoInstitucional"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.video}
                              invalid={formik.touched.video && formik.errors.video ? true : false}/>
                  </FormGroup>
                  <Row form>
                     <Col md={6}>
                        <FormGroup>
                           <Label for="exampleEmail">Email</Label>
                           <Input   type="email" 
                                    id="email"
                                    name="email"  
                                    placeholder="emailinstituicao@gmail.com" 
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    invalid={formik.touched.email && formik.errors.email ? true : false}/>
                        </FormGroup>
                     </Col>
                     <Col md={6}>
                        <FormGroup>
                           <Label for="examplePassword">Telefone</Label>
                           <Input   type="text" 
                                    id="telefone" 
                                    name="telefone"  
                                    placeholder="(98)98835-7603"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.telefone}
                                    invalid={formik.touched.telefone && formik.errors.telefone ? true : false}/>
                        </FormGroup>
                     </Col>
                  </Row>
                  <FormGroup>
                     <Label for="exampleAddress2">Endereço</Label>
                     <Input   type="text"
                              id="endereco" 
                              name="endereco"  
                              placeholder="Apartment, studio, or floor"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.endereco}
                              invalid={formik.touched.endereco && formik.errors.endereco ? true : false}/>
                  </FormGroup>
                  <Row form>
                     <Col md={6}>
                        <FormGroup>
                           <Label for="exampleCity">Cidade</Label>
                           <Input   type="text"
                                    id="cidade" 
                                    name="cidade"  
                                    placeholder="Cidade"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.cidade}
                                    invalid={formik.touched.cidade && formik.errors.cidade ? true : false}/>
                        </FormGroup>
                     </Col>
                     <Col md={4}>
                        <FormGroup>
                           <Label for="exampleState">Estado</Label>
                           <Input   type="text"
                                    id="estado" 
                                    name="estado"  
                                    placeholder="Estado"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.estado}
                                    invalid={formik.touched.estado && formik.errors.estado ? true : false}/>
                        </FormGroup>
                     </Col>
                     <Col md={2}>
                        <FormGroup>
                           <Label for="exampleZip">CEP</Label>
                           <Input   type="text" 
                                    id="cep"
                                    name="cep"  
                                    placeholder="65095-000"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.cep}
                                    invalid={formik.touched.cep && formik.errors.cep ? true : false}/>
                        </FormGroup>  
                     </Col>
                  </Row>
                  <FormGroup>
                     <Label for="name">Tags</Label>
                     <Input   type="text" 
                              id="tags" 
                              name="tags"  
                              placeholder="+doacao +amar +carente"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.tags}
                              invalid={formik.touched.tags && formik.errors.tags ? true : false}/>
                  </FormGroup>
                  <Button color="primary" block className=" waves-effect waves-light" type="submit">Salvar</Button>
               </Form>
            </div>
         </div>
      </div>
   );
}

export default Conta;
