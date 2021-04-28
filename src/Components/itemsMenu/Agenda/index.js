import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Form, Col, Label, Row  } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import allLocales from '@fullcalendar/core/locales-all';
import { firebaseFirestoreServices } from "../../../Services/firebaseFirestoreServices"; 
import banner from "../../../Assets/exampleBanner.jpg"
import "./index.css"

const fireBaseBackend = new firebaseFirestoreServices();

const Agenda = (props) => {
   const [currentEvents, setCurrentEvents] = useState([]);
   const [modal, setModal] = useState(false);
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

   const toggle = () => {setModal(!modal); setfileImage("")};


   let eventGuid = 0
   let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

   const INITIAL_EVENTS = [
     {
       id: createEventId(),
       title: 'All-day event',
       start: todayStr
     },
     {
       id: createEventId(),
       title: 'Timed event',
       start: todayStr + 'T12:00:00'
     }
   ]

   function createEventId() {
     return String(eventGuid++)
   }

   function renderEventContent(eventInfo) {
      return (
         <React.Fragment>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
         </React.Fragment>
      )
   }

   function handleDateSelect(selectInfo){
      let title = prompt("adicione o evento")
      let calendarApi = selectInfo.view.calendar

      calendarApi.unselect() // clear date selection

      if (title) {
         calendarApi.addEvent({
            id: createEventId(),
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay
         })
      }
   }

   function handleEvents(events){
      setCurrentEvents(events)
   }

   const formik = useFormik({
      initialValues: {
         Rua: '',
         Bairro: '',
         Numero: '',
      },
      validationSchema: Yup.object({
         Rua: Yup.string().required('Por favor informe o Endereço'),
         Bairro: Yup.string().required('Por favor informe o Endereço'),
      }),
      onSubmit: values => {
         if(fileImage == ""){
            setErrorImage(true)
         }else {
            fireBaseBackend.gravarEvento( values.Rua, values.Bairro,  values.Numero)
         }
      },
   });

   return (
      <div className="main">
         <div className="main__container">
            <div className="charts__left">
               <div className="charts__left__title">
                  <div>
                     <h1>Agenda</h1>
                  </div>
                  <i className="fa fa-list-alt"></i>
               </div>
               <div className='demo-app'>
                  <div className='demo-app-main'>
                     <FullCalendar
                        locales={allLocales}
                        locale={"pt-br"}
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        headerToolbar={{
                          left: 'prev,next today',
                          center: 'title',
                          right: 'dayGridMonth,timeGridWeek,timeGridDay'
                        }}
                        initialView='dayGridMonth'
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        weekends={true}
                        initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                        select={(select) => {toggle(select)}}
                        eventContent={renderEventContent} // custom render function
                        //eventClick={this.handleEventClick}
                        eventsSet={() => handleEvents()} // called after events are initialized/added/changed/removed
                        /* you can update a remote database when these fire:
                        eventAdd={function(){}}
                        eventChange={function(){}}
                        eventRemove={function(){}}
                        */
                     />
                     <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>Novo evento</ModalHeader>
                        <ModalBody>
                           <Form onSubmit={formik.handleSubmit}>
                              <FormGroup>
                                 <img src={messageIdGenerator() ? messageIdGenerator() : banner} 
                                    alt="Selecione a foto de perfil" style={{width: 470, height: 150}}>
                                 </img>
                                 <Input onChange={(e) => handleImageChange(e)} accept="image/*" size="60"  type="file" name="banner"/>
                                 {errorImage ? (
                                    <p className={"fs-6 text-danger"}>Adicione a imagem do Banner</p>
                                 ) : null}
                                 <h4>Endereço:</h4>
                              </FormGroup>
                              <Row form>
                                 <Col md={6}>
                                    <FormGroup>
                                       <Label for="exampleCity">Rua</Label>
                                       <Input   type="text"
                                                id="Rua" 
                                                name="Rua"  
                                                placeholder="Rua"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Rua}
                                                invalid={formik.touched.Rua && formik.errors.Rua ? true : false}/>
                                    </FormGroup>
                                 </Col>
                                 <Col md={4}>
                                    <FormGroup>
                                       <Label for="exampleState">Bairro</Label>
                                       <Input   type="text"
                                                id="Bairro" 
                                                name="Bairro"  
                                                placeholder="Bairro"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Bairro}
                                                invalid={formik.touched.Bairro && formik.errors.Bairro ? true : false}/>
                                    </FormGroup>
                                 </Col>
                                 <Col md={2}>
                                    <FormGroup>
                                       <Label for="exampleZip">Numero</Label>
                                       <Input   type="text" 
                                                id="Numero"
                                                name="Numero"  
                                                placeholder="s/n"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Numero}
                                                invalid={formik.touched.Numero && formik.errors.Numero ? true : false}/>
                                    </FormGroup>  
                                 </Col>
                              </Row>
                              <Button color="primary" block className=" waves-effect waves-light" type="submit">Salvar</Button>
                           </Form>
                           
                        </ModalBody>
                        {/*<ModalFooter>
                           <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                           <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>*/}
                      </Modal>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Agenda;

