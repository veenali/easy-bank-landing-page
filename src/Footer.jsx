import React from 'react'
import { ReactComponent as BRAND_LOGO } from './assets/logo.svg'
import { ReactComponent as ICON_FACEBOOK } from './assets/icon-facebook.svg'
import { ReactComponent as ICON_INSTAGRAM } from './assets/icon-instagram.svg'
import { ReactComponent as ICON_PININTEREST } from './assets/icon-pinterest.svg'
import { ReactComponent as ICON_TWITTER } from './assets/icon-twitter.svg'
import { ReactComponent as ICON_YOUTUBE } from './assets/icon-youtube.svg'
import { Button } from 'react-bootstrap'

export default function Footer() {
    return (
        <div className="d-flex flex-column align-items-center align-items-md-start flex-md-row footer">
            <div className="d-flex flex-column flex-grow-1 justify-content-around align-items-center align-items-md-start">
                <BRAND_LOGO className='footer-brand-logo mb-4' />
                <div className="d-flex social-icons mb-3">
                    <ICON_FACEBOOK className='me-3' />
                    <ICON_YOUTUBE className='me-3' />
                    <ICON_TWITTER className='me-3' />
                    <ICON_PININTEREST className='me-3' />
                    <ICON_INSTAGRAM className='me-3' />
                    {/* <img className='me-3' src={ICON_FACEBOOK} alt="Facebook" />
                    <img className='me-3' src={ICON_YOUTUBE} alt="Youtube" />
                    <img className='me-3' src={ICON_TWITTER} alt="Twitter" />
                    <img className='me-3' src={ICON_PININTEREST} alt="Pininterest" />
                    <img className='me-3' src={ICON_INSTAGRAM} alt="Instagram" /> */}
                </div>
            </div>

            <div className="d-flex flex-column flex-md-row flex-grow-1 justify-content-between text-white footer-middle-menu">
                <div className="d-flex flex-column align-items-center align-items-md-start">
                    <div className='mb-3'>About Us</div>
                    <div className='mb-3'>Contact</div>
                    <div className='mb-3'>Blog</div>
                </div>
                <div className="d-flex flex-column align-items-center align-items-md-start">
                    <div className='mb-3'>Careers</div>
                    <div className='mb-3'>Support</div>
                    <div className='mb-3'>Privacy Policy</div>
                </div>
            </div>

            <div className="d-flex flex-column flex-grow-1 justify-content-around align-items-center align-items-md-end">
                <div className='mb-4'>
                    <Button className='invite-button' style={{ background: 'linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%))', border: '1px transparent', padding: '10px 25px', borderRadius: '20px' }}>Request Invite</Button>
                </div>
                <div className="text-muted">
                    &#169;EasyBank. All Rights Reserved
                </div>
            </div>
        </div>
    )
}
