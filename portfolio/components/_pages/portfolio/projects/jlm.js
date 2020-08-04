import React from 'react';
import Section from '../../../page/Section';

const styles = {
    list: {
        fontFamily: "Graphik",
        fontSize: "21px",
        color: "#6C757D",
    }
}

const JLM = () => {
    return (
        <>
        <Section className="py-5" backgroundColor={`#f5f5f5`} fluid>
            <div className='row'>
                <div className='col-md-6 pl-md-0 order-1 order-md-0'>
                    <div className="bg-image-left">
                        <img src="/img/portfolio/screenshots/jlm/timesheets-incomplete.jpg" className="w-100 w-md-auto"/>
                    </div>
                </div>
                <div className='col-md-auto offset-0 offset-md-1 d-flex flex-column justify-content-center order-0 order-md-1'>
                    <h3 className='text-dark'>Timesheet System</h3>
                    <ul className="list-group list-group-flush text-right" style={styles.list}>
                        <li className="list-group-item bg-transparent border-0 px-0">Supervisor Approval</li>
                        <li className="list-group-item bg-transparent border-0 px-0">Calculate overtime and double-overtime</li>
                        <li className="list-group-item bg-transparent border-0 px-0">Generate PDF and Excel reports</li>
                    </ul>
                </div>
            </div>
        </Section>
        <Section fluid backgroundColor={`#ffffff`}>
            <div className='row'>
                <div className='col-md-12 px-0 text-center d-flex flex-column justify-content-center'>
                    <p className='text-justify text-muted'>
                        <img src='/img/portfolio/screenshots/jlm/login.jpg' className='img-fluid shadow'/>
                    </p>
                </div>
            </div>
        </Section>
        <Section fluid className="py-5" backgroundColor={`#ffffff`}>
            <div className='row'>
                <div className='col-md-12 d-flex flex-column align-items-center justify-content-center'>
                    <h3 className='text-dark'>Payroll To Quickbooks</h3>
                    <ul className="list-group list-group-flush text-center mb-4" style={styles.list}>
                        <li className="list-group-item bg-transparent border-0 px-0">Calculates employee’s payroll</li>
                        <li className="list-group-item bg-transparent border-0 px-0">Payroll to Quickbooks invoices</li>
                    </ul>
                </div>
                <div className='col-md-11 offset-1 pl-md-0 order-1 order-md-0'>
                    <h4 className='text-secondary font-weight-light mb-3'>1. Calculate</h4>
                </div>
                <div className='col-md-10 pl-md-0 order-1 order-md-0 mb-5 pb-5'>
                    <div className="bg-image-left">
                        <img src="/img/portfolio/screenshots/jlm/timesheets-invoice.jpg" className='w-100 w-md-auto'/>
                    </div>
                </div>
                <div className='col-md-10 offset-2 pl-md-0 order-1 order-md-0'>
                    <h4 className='text-secondary font-weight-light mb-3'>2. Invoice</h4>
                </div>
                <div className='col-md-10 offset-2 pl-md-0 order-1 order-md-0'>
                    <div className="bg-image-left">
                        <img src="/img/portfolio/screenshots/jlm/quickbooks-invoice.jpg" className='w-100 w-md-auto'/>
                    </div>
                </div>
            </div>
        </Section>
        <Section className="py-5" backgroundColor={`#f5f5f5`} fluid>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 d-flex flex-column align-items-center justify-content-center'>
                        <h3 className='text-dark mb-3'>PDF Reports</h3>
                    </div>
                    <div className='col-md-11 mx-auto text-center text-center'>
                        <img src='/img/portfolio/screenshots/jlm/timesheets-pdf-report.jpg' className='img-fluid'/>
                    </div>
                </div>
            </div>
        </Section>
        </>
    )
}

export default JLM;