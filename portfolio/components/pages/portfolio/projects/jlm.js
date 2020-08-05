import React from 'react';
import LeftImageRightDescription from '../sections/LeftImageRightDescription';
import FullImage from '../sections/FullImage';
import CenteredHeadingImage from '../sections/CenteredHeadingImage';
import CenteredHeadingCascadingImages from '../sections/CenteredHeadingCascadingImages';

const JLM = () => {
    return (
        <>
        <LeftImageRightDescription
            backgroundColor={`#f5f5f5`}
            heading="Timesheet System"
            img={{
                url: "/img/portfolio/screenshots/jlm/timesheets-incomplete.jpg"
            }}
            points={[
                'Supervisor Approval',
                'Calculate overtime and double-overtime',
                'Generate PDF and Excel reports',
            ]}
        />
        <FullImage
            imgUrl="/img/portfolio/screenshots/jlm/login.jpg"
        />
        <CenteredHeadingCascadingImages
            heading="Payroll To Quickbooks"
            points={[
                'Calculates employee’s payroll',
                'Payroll to Quickbooks invoices',
            ]}
            images={[
                {
                    heading: 'Calculate',
                    imgUrl: '/img/portfolio/screenshots/jlm/timesheets-invoice.jpg'  
                },
                {
                    heading: 'Invoice',
                    imgUrl: '/img/portfolio/screenshots/jlm/quickbooks-invoice.jpg'  
                }
            ]}
        />
        <CenteredHeadingImage
            backgroundColor={`#f5f5f5`}
            heading="PDF Reports"
            imgUrl="/img/portfolio/screenshots/jlm/timesheets-pdf-report.jpg"
        />
        </>
    )
}

export default JLM;