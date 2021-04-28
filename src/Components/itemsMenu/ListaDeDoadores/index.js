import React, { useState } from 'react';
import { List, Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import "./index.css"

const Example = (props) => {
   const [detailers, setDetailers] = useState(true)

   return (
      <div className="main">
         <div className="main__container">
            <div className="charts__left">
               <div className="charts__left__title">
                  <div>
                     <h1>Lista de doadores</h1>
                  </div>
                  <i className="fa fa-users"></i>
               </div>
               {
                  detailers ? (
                     <table className="table">
                        <thead class="thead-dark">
                           <tr>
                              <th scope="col">#</th>
                              <th scope="col">Nome</th>
                              <th scope="col">Doações feitas</th>
                              <th scope="col">Ultima doação</th>
                           </tr>
                        </thead>
                        <tbody onClick={() => setDetailers(false)}>
                           <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>9</td>
                              <td>14/04/2021</td>
                           </tr>
                           <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>7</td>
                              <td>11/04/2021</td>
                           </tr>
                           <tr>
                              <th scope="row">3</th>
                              <td>Larry</td>
                              <td>3</td>
                              <td>12/04/2021</td>
                           </tr>
                        </tbody>
                     </table>
                  ) : ( 
                     <div>
                        <i className="ri-arrow-left-line ri-2x" onClick={() => setDetailers(true)}></i>
                        <Form>
                           <Row form>
                             <Col md={6}>
                               <FormGroup>
                                 <Label for="exampleEmail">Nome</Label>
                                 <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" readOnly/>
                               </FormGroup>
                             </Col>
                             <Col md={6}>
                               <FormGroup>
                                 <Label for="examplePassword">Sobrenome</Label>
                                 <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" readOnly/>
                               </FormGroup>
                             </Col>
                           </Row>
                           <FormGroup>
                             <Label for="exampleAddress">Address</Label>
                             <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St" readOnly/>
                           </FormGroup>
                           <FormGroup>
                             <Label for="exampleAddress2">Address 2</Label>
                             <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor" readOnly/>
                           </FormGroup>
                           <Row form>
                             <Col md={6}>
                               <FormGroup>
                                 <Label for="exampleCity">City</Label>
                                 <Input type="text" name="city" id="exampleCity" readOnly/>
                               </FormGroup>
                             </Col>
                             <Col md={4}>
                               <FormGroup>
                                 <Label for="exampleState">State</Label>
                                 <Input type="text" name="state" id="exampleState" readOnly/>
                               </FormGroup>
                             </Col>
                             <Col md={2}>
                               <FormGroup>
                                 <Label for="exampleZip">Zip</Label>
                                 <Input type="text" name="zip" id="exampleZip" readOnly/>
                               </FormGroup>  
                             </Col>
                           </Row>
                        </Form>
                     </div>
                  ) 
               }
            </div>
         </div>
      </div>
   );
}

export default Example;
