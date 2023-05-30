import React from 'react'
import IMAGE_CURRENCY from './assets/image-currency.jpg'
import IMAGE_CONFETTI from './assets/image-confetti.jpg'
import IMAGE_PLANE from './assets/image-plane.jpg'
import IMAGE_RESTAURANT from './assets/image-restaurant.jpg'
import { Card } from 'react-bootstrap'

export default function Articles() {
    const articles = [
        {
            image: IMAGE_CURRENCY,
            author: 'Claire Robinson',
            title: 'Receive money in any currency with no fees',
            description: 'The world is getting smaller and we\’re becoming more mobile. So why should you be forced to only receive money in a single …'
        },
        {
            image: IMAGE_RESTAURANT,
            author: 'Wilson Hutton',
            title: 'Treat yourself without worrying about money',
            description: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'
        },
        {
            image: IMAGE_PLANE,
            author: 'Wilson Hutton',
            title: 'Take your Easybank card wherever you go',
            description: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'
        },
        {
            image: IMAGE_CONFETTI,
            author: 'Claire Robinson',
            title: 'Our invite-only Beta accounts are now live!',
            description: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'
        }
    ]

    return (
        <div className='d-flex flex-column align-items-center align-items-md-start articles-wrapper'>
            <div className='mb-4 text-center text-md-start title-font-size' style={{ lineHeight: '50px' }}>Latest Articles</div>
            <div className="d-flex flex-column flex-md-row justify-content-center">
                {
                    articles?.map((artice, index) => {
                        return (
                            <Card key={index} className='me-md-3 mb-3 mb-md-0' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={artice.image} style={{ height: '190px', maxHeight: '190px' }} />
                                <Card.Body>
                                    <Card.Text className='text-muted' style={{ fontSize: '12px' }}>By {artice.author}</Card.Text>
                                    <Card.Text className='article-card-title'>{artice.title}</Card.Text>
                                    <Card.Text style={{ fontSize: '14px' }} className='text-muted'>
                                        {artice.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
        // <div className='d-flex flex-column align-items-center align-items-md-start services-wrapper'>
        //     <div className='mb-4 text-center text-md-start title-font-size' style={{ lineHeight: '50px' }}>Latest Articles</div>
        //     <p className='text-center text-md-start' style={{ color: 'hsl(233, 8%, 62%)', marginBottom: '30px' }}>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
        //     <div className="d-flex flex-column flex-md-row align-items-center">
        //         {
        //             services?.map((service, index) => {
        //                 return (
        //                     <div className='px-3 d-flex flex-column align-items-center align-items-md-start'>
        //                         <img src={service.image} alt={service.title} style={{ marginBottom: '30px', maxWidth: '172px' }} />
        //                         <p style={{ marginBottom: '30px', fontSize: '1.5rem' }}>{service.title}</p>
        //                         <p className='text-center text-md-start' style={{ color: 'hsl(233, 8%, 62%)', fontSize: '16px' }}>{service.description}</p>
        //                     </div>
        //                 )
        //             })
        //         }
        //     </div>
        // </div>
    )
}
