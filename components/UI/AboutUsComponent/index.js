import { Box, Typography } from "@mui/material"
import Lottie from "lottie-react";
import { InView, useInView } from 'react-intersection-observer';
import animation from '../../../animations/guintiaboutus.json'


import { Elastic, gsap, Back, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from "react";
import Image from "next/image";


export const AboutUsComponent = ({ isMobile }) => {
    gsap.registerPlugin(ScrollTrigger)
    const [refOne, inViewOne,] = useInView({
        threshold: 1
    });
    const [refTwo, inViewTwo,] = useInView({
        threshold: 1
    });
    const [refThree, inViewThree,] = useInView({
        threshold: 1
    });


    useEffect(() => {
        inViewOne && gsap.to('.imageAbout', {
            transform: 'scale(1)', ease: Elastic.easeIn
        })

    }, [inViewOne])

    useEffect(() => {
        inViewTwo && gsap.to('.aboutUsText', {
            opacity: 1, ease: Power1.easeIn
        })

    }, [inViewTwo])
    useEffect(() => {
        inViewThree && gsap.to('.aboutUsAnimation', {
            transform: 'scale(1)', ease: Elastic.easeInOut
        })

    }, [inViewThree])
    return (
        <>
            <Box sx={{ width: '100vw', height: isMobile ?'100vh':'60vh', mt:isMobile ? 4:20 }} display='flex' justifyContent='space-around' alignItems={'start'} flexWrap={isMobile ? 'wrap':'no-wrap'}>
                <Box sx={{ transform: 'scale(0)' }} className='imageAbout' display={'flex'} justifyContent={'center'} ref={refOne}>
                    <Image src='/aboutus.png' width={isMobile ? 300 : 500} height={isMobile ? 300 : 500} alt='' />
                </Box>
                <Box sx={{ opacity: 0, textAlign: 'center' }} display={'flex'} justifyContent={'center'} ref={refTwo} className='aboutUsText'>
                    <Box display={'flex'} flexDirection={'column'} >
                        <Typography variant='subtitle1' sx={{ my: 2, fontFamily: 'Montserrat', textAlign: isMobile ? 'center' : 'auto' }}>We are a passionate team dedicated to technology, growth, and artificial intelligence.   </Typography>
                        <Typography variant='subtitle1' sx={{ my: 2, fontFamily: 'Montserrat', textAlign: isMobile ? 'center' : 'auto' }}>Our mission is to help businesses thrive in the digital realm.</Typography>
                        <Typography variant='subtitle1' sx={{ my: 2, fontFamily: 'Montserrat', textAlign: isMobile ? 'center' : 'auto' }}>With customized digital solutions and a commitment to excellence, we empower our clients to succeed in the ever-evolving digital landscape.</Typography>
                        <Typography variant='subtitle1' sx={{ my: 2, fontFamily: 'Montserrat', textAlign: isMobile ? 'center' : 'auto' }}>Join us as we embark on a journey of digital transformation, creating a better, more connected world together.</Typography>
                    </Box>
                </Box>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', my: 4, transform: 'scale(0)' }} className='aboutUsAnimation' ref={refThree}>
                    <Box sx={{width: isMobile ?'300px':'300px'}} display={'flex'} justifyContent={'center'} alignItems={'center'} >
                        <Lottie animationData={animation} loop={true} />
                    </Box>
                </Box>
            </Box>
        </>
    )
}