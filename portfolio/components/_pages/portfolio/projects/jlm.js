import React from 'react';
import Section from '../../../page/Section';

const JLM = () => {
    return (
        <>
        <Section backgroundColor={`#f5f5f5`}>
            <div className='container-fluid py-5'>
                <div className='row'>
                    <div className='col-md-6 offset-2 text-center'>
                        <div className="bg-image-left">
                            <img src="/img/portfolio/screenshots/jlm/timesheets-incomplete.jpg" className='img-fluid'/>
                        </div>
                    </div>
                    <div className='col-md-4 d-flex flex-column justify-content-center'>
                        <h5 className='text-secondary'>Timesheet System</h5>
                        <p className='text-justify text-muted'>
                            I created a timesheet app that allows their external employees to log in their weekly hours. The app features an supervisor approval system, OT and DBL-OT calculations for California, Nevada and Arizona, and the ability to generate PDF and Excel reports.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
        <Section backgroundColor={`#ffffff`}>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-12 text-center d-flex flex-column justify-content-center'>
                        <p className='text-justify text-muted'>
                            <img src='/img/portfolio/screenshots/jlm/login.jpg' className='img-fluid shadow'/>
                        </p>
                    </div>
                </div>
            </div>
        </Section>
        <Section backgroundColor={`#ffffff`}>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-12 d-flex flex-column align-items-center justify-content-center'>
                        <h5 className='text-secondary'>Payroll To Quickbooks</h5>
                        <p className='text-justify text-muted'>
                            Timesheet web app automatically calculates employees' weekly payroll per company
                        </p>
                        <img src="/img/portfolio/screenshots/jlm/timesheets-invoice.jpg" className='img-fluid mb-4'/>
                        <img src="/img/portfolio/screenshots/jlm/quickbooks-invoice.jpg" className='img-fluid'/>
                    </div>
                </div>
            </div>
        </Section>
        <Section backgroundColor={`#f5f5f5`}>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-12 d-flex flex-column align-items-center justify-content-center'>
                        <h5 className='text-secondary'>PDF Report</h5>
                    </div>
                    <div className='col-md-12 text-center text-center'>
                        <img src='/img/portfolio/screenshots/jlm/timesheets-pdf-report.jpg' className='img-fluid'/>
                    </div>
                </div>
            </div>
        </Section>
        </>
    )
}

export default JLM;