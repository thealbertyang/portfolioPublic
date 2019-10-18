import React from 'react';
import { Form, Field } from "react-final-form";

import MainLayout from '../components/page/Layout';
import Header from '../components/page/Header';
import Section from '../components/page/Section';

const onSubmit = async (values) => {
    let message = await (() => new Promise(resolve => {
        setTimeout(() => {
          resolve({ response: 200 });
        }, 2000);
    }));
    if(message.response === 200){
        //success
    }
    else {
        //error
    }
}

const Contact = () => {
    return (
        <MainLayout>
            <Header
				overlineText={`Get In`}
				overlineClassName={`text-white`}
				titleClassName={`font-weight-light text-white`}
				titleText={`Contact`}
				backgroundImage={`/img/aboutBg.jpg`}
				height={`35rem`}
			/>
            <Section>
                <div className='container'>
                    <div className='row'>
                        <div className={`col-12 col-md-6 offset-md-3`}>
                        
                        </div>
                        <div className='col-12 col-md-6 offset-md-3'>
                            <Form
                                onSubmit={onSubmit}
                                render={({ handleSubmit, values, errors }) => (
                                    <form onSubmit={handleSubmit} >
                                        {errors && <div className={`alert alert-danger mb-5`}>There was an issue sending your message.</div>}
                                        <div className='form-row'>
                                            <div className='col-6'>
                                                <label>
                                                First Name
                                                </label>
                                                <Field
                                                name='first_name'
                                                component='input'
                                                className='form-control'
                                                />
                                            </div>
                                            <div className='col-6'>
                                                <label>
                                                Last Name
                                                </label>
                                                <Field
                                                name='last_name'
                                                component='input'
                                                className='form-control'
                                                />
                                            </div>
                                            <div className='col-12'>
                                                <label>
                                                Email
                                                </label>
                                                <Field
                                                name='email'
                                                component='input'
                                                className='form-control'
                                                />
                                            </div>
                                            <div className='col-12'>
                                                <label>
                                                Message
                                                </label>
                                                <Field
                                                name='message'
                                                component='textarea'
                                                className='form-control'
                                                />
                                            </div>
                                            <div className='col-12 mt-4'>
                                                <button type='submit' className='btn btn-block btn-primary btn-lg shadow'>
                                                <i className="fas fa-paper-plane"></i> &nbsp; Send Message
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </Section>
        </MainLayout>
    );
}

export default Contact;