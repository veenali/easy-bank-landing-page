import React from 'react'
import { Button } from 'react-bootstrap'
import PHONE_IMAGE from './assets/image-mockups.png'

export default function MainContent() {
    return (
        <div className="d-flex flex-column flex-md-row" style={{ overflow: 'hidden' }}>
            <div className='d-flex flex-column order-1 order-md-0 main-content-description-container align-items-center align-items-md-start'>
                <p className='title-font-size text-center text-md-start' style={{ lineHeight: '50px', marginBottom: '30px' }}>Next generation digital banking</p>
                <p className='text-center text-md-start' style={{ color: 'hsl(233, 8%, 62%)', marginBottom: '30px' }}>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more.</p>
                <div>
                    <Button className='invite-button' style={{ background: 'linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%))', border: '1px transparent', padding: '10px 25px', borderRadius: '20px' }}>Request Invite</Button>
                </div>
            </div>
            <div className='main-content-image-container order-0 order-md-1' style={{ flex: 1, zIndex: 100 }}>
                <img className='main-content-image' src={PHONE_IMAGE} alt="" />
            </div>
        </div>
    )
}
