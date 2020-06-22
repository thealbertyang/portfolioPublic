import React from 'react';
import { Form, Field } from "react-final-form";
import { FORM_ERROR } from "final-form";

import MainLayout from '../components/page/Layout';
import Header from '../components/page/Header';
import Section from '../components/page/Section';

const title = "Contact";

const onSubmit = async (values) => {
    let message = await new Promise(resolve => setTimeout(resolve({ response: 400 }), ms));
    if(message.response === 200){
        //success
    }
    else {
        //error
        return { [FORM_ERROR]: "There was an issue sending your message." }
    }
}

const Contact = () => {
    return (
        <MainLayout title={title}>
            <Header
				overlineText={`Get In`}
				overlineClassName={`text-white`}
				titleClassName={`font-weight-light text-white`}
				titleText={`Contact`}
				backgroundImage={`/img/aboutBg.jpg`}
				height={`35rem`}
			/>
            <Section className="py-5">
                <div className='row'>
                    <div className='col-12 col-md-6 offset-md-3'>
                        <Form
                            onSubmit={onSubmit}
                            render={({ handleSubmit, values, submitError }) => (
                                <form onSubmit={handleSubmit}>
                                    {submitError && <div className={`alert alert-danger mb-5`}>{submitError}</div>}
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
            </Section>
        </MainLayout>
    );
}

export default Contact;