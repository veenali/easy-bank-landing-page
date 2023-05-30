import React from 'react'
import ICON_ONLINE_BANKING from './assets/icon-online.svg'
import ICON_BUDGETING from './assets/icon-budgeting.svg'
import ICON_ONBOARDING from './assets/icon-onboarding.svg'
import ICON_OPEN_API from './assets/icon-api.svg'

export default function Services() {
    const services = [
        {
            icon: ICON_ONLINE_BANKING,
            title: 'Online Banking',
            description: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
        },
        {
            icon: ICON_BUDGETING,
            title: 'Simple Budgeting',
            description: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
        },
        {
            icon: ICON_ONBOARDING,
            title: 'Fast Onboarding',
            description: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
        },
        {
            icon: ICON_OPEN_API,
            title: 'Open API',
            description: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
        }
    ]
    return (
        <div className='d-flex flex-column align-items-center align-items-md-start services-wrapper'>
            <div className='mb-4 text-center text-md-start title-font-size' style={{ lineHeight: '50px' }}>Why choose Easybank?</div>
            <p className='text-center text-md-start' style={{ color: 'hsl(233, 8%, 62%)', marginBottom: '30px' }}>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            <div className="d-flex flex-column flex-md-row align-items-center">
                {
                    services?.map((service, index) => {
                        return (
                            <div className='px-3 d-flex flex-column align-items-center align-items-md-start'>
                                <img src={service.icon} alt={service.title} style={{ marginBottom: '30px', maxWidth: '72px' }} />
                                <p style={{ marginBottom: '30px', fontSize: '1.5rem' }}>{service.title}</p>
                                <p className='text-center text-md-start' style={{ color: 'hsl(233, 8%, 62%)', fontSize: '16px' }}>{service.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
