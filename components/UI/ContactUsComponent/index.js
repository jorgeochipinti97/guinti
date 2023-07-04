import { Box, Typography } from "@mui/material"
import Lottie from "lottie-react";
import { useInView } from 'react-intersection-observer';
import animation from '../../../animations/guinticontactus.json'


import { Elastic, gsap, Back, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import Image from "next/image";


export const ContactUsComponent = ({ isMobile }) => {
    gsap.registerPlugin(ScrollTrigger)
    const [refDiv, inViewDiv] = useInView({
        threshold: .5,
    });

    useEffect(() => {
        inViewDiv && gsap.to('.imageContact', {
            transform: 'scale(1)', ease: Elastic.easeIn
        })
        inViewDiv && gsap.to('.textcontact', {
            opacity: 1, ease: Power1.easeIn, delay: .5
        })
        inViewDiv && gsap.to('.animationContact', {
            transform: 'scale(1)', ease: Elastic.easeIn, delay: 1
        })
    }, [inViewDiv])
    return (
        <>
            <Box ref={refDiv} sx={{ height: isMobile ? '40vh' : '80vh', my: isMobile ? 10 : 0 }}>
                <Box display='flex' justifyContent={'center'} sx={{ transform: 'scale(0)' }} className='imageContact'>
                    <Image src='/contact.png' width={isMobile ? 300 : 500} height={isMobile ? 300 : 500} alt='' />
                </Box>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', my: 4, transform: 'scale(0)' }} className='animationContact'>
                    <Box sx={{ width: isMobile ? '200px' : '300px' }}>
                        <Lottie animationData={animation} loop={true} />
                    </Box>
                </Box>
                <Box display='flex' justifyContent={'center'} sx={{ opacity: 0 }} className='textcontact'>
                    <Typography variant='body1' fontFamily={'Montserrat'} textAlign='center'>We are thrilled to connect with you at GUINTI.<br /> If you have any questions, comments, or would like to discuss a project, please don t hesitate to get in touch with us.<br /> We are here to assist you. <br />We look forward to hearing from you and working together to bring your digital ideas to life!</Typography>
                </Box>
            </Box>
        </>
    )
}