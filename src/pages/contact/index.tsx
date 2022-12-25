import "./style.css";
import {useState} from "react";
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
function contact(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState({
        name: "",
        email: "",
        message: "",
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const form =useRef<any>(0)
    const handleSubmit = (e:any) => {
        e.preventDefault();
        // @ts-ignore
        emailjs.sendForm('service_ni161qk', 'template_0l8ujtf', form.current, 'YP9ETPeUSXrG2UTht')
            .then((result) => {
              if (result.status === 200){

                  alert('Your message was sent, thank you!')
              }
            }, (error) => {
                console.log(error.text);
            });

    };

    const handleInputChange = (e:any) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    return(


        <div className={"content"}>
            <div className={"container-contact"}>
              <div className={"row justify-content-center"}>
                  <div className={'col-md-8'}>
                        <div className={"row mb-5"}>
                            <div className="col-md-4 mr-auto">
                                <h3 className="thin-heading mb-4">New York</h3>
                                <p>9757 Aspen Lane South <br/> Richmond Hill, NY 11419</p>
                            </div>
                            <div className="col-md-6 ml-auto">
                                <h3 className="thin-heading mb-4">Contact Info</h3>
                                <p>T: +1 (291) 939 9321 <br/> E: info@mywebsite.com</p>
                            </div>
                        </div>
                      <div className="row justify-content-center">
                          <div className="col-md-12">
                              <h3 className="thin-heading mb-4">Message Us</h3>
                              <form   ref={form} className="mb-5"  onSubmit={handleSubmit}  id="contactForm" name="contactForm"
                                   >
                                  <div className="row">
                                      <div className="col-md-6 form-group">
                                          <input   onChange={handleInputChange} type="text" className="form-control" name="name" id="name"
                                                 placeholder="Your name" />
                                      </div>
                                      <div className="col-md-6 form-group">
                                          <input   onChange={handleInputChange} type="text" className="form-control" name="email" id="email"
                                                 placeholder="Email"/>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-12 form-group">
                                          <textarea  onChange={handleInputChange}  className="form-control" name="message" id="message" cols={30}
                                                    rows={2} placeholder="Write your message"></textarea>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-12">
                                          <input type="submit" value="Send Message" className="btn btn-primary rounded-0 py-2 px-4"/>
                                              <span className="submitting"></span>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
        </div>
    )

}




export default  contact