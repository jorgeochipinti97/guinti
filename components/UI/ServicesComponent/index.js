import { Box, Typography } from "@mui/material"
import Lottie from "lottie-react";
import { useInView } from 'react-intersection-observer';
import animation from '../../../animations/guintiservices.json'


import { Elastic, gsap, Back, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import Image from "next/image";

export const ServicesComponent = ({isMobile}) => {
    gsap.registerPlugin(ScrollTrigger)

    const [refText, inViewtext] = useInView({
        threshold: 1,
    });
    const [refImage, inViewImage] = useInView({
        threshold: .2,
    });
    const [refAnimation, inViewAnimation] = useInView({
        threshold: .2,
    });

    useEffect(() => {
        inViewImage && gsap.to('.image_', {
            transform: 'scale(1)', ease: Elastic.easeIn
        })


    }, [inViewImage])
    useEffect(() => {
        inViewtext && gsap.to('.textServices', {
            opacity: 1, ease: Power1.easeIn, delay: .5
        })
    }, [inViewtext])
    useEffect(() => {
        inViewtext && gsap.to('.animationService', {
            transform: 'scale(1)', ease: Power1.easeInOut, delay: .5
        })
    }, [inViewAnimation])

    return (
        <>
            <Box sx={{ height: '100vh', width: '100vw' }}>
                <Box sx={{ transform: 'scale(0)' }} className='image_' display={'flex'} justifyContent={'center'} ref={refImage}>
                    <Image src='/services.png' width={isMobile? 300:500} height={isMobile? 300:500} alt='' />
                </Box>
                <Box sx={{ opacity: 0,my:isMobile ? 2:1 }} className='textServices' display={'flex'} justifyContent={'center'} ref={refText}>
                    <Typography variant='body1' sx={{ fontFamily: 'Montserrat', textAlign: isMobile ? 'center' : 'auto' }}>We specialize in <span className="heavyFont">digital transformation</span> for <span className="slimFont">businesses</span>. </Typography>
                </Box>
                <Box sx={{ opacity: 0 ,my:isMobile ? 2:1}} className='textServices' display={'flex'} justifyContent={'center'}>
                    <Typography variant='body1' sx={{ fontFamily: 'Montserrat', textAlign: isMobile ? 'center' : 'auto' }}>Our <span className="slimFont">personalized approach and expertise </span> in digital transformation provide you with a <span className="heavyFont">competitive edge</span> in today s market
                    </Typography>
                </Box>
                <Box sx={{ opacity: 0,my:isMobile ? 2:1 }} className='textServices' display={'flex'} justifyContent={'center'}>
                    <Typography variant='body1' sx={{ fontFamily: 'Montserrat', textAlign: isMobile ? 'center' : 'auto' }}>We work closely with our <span className="heavyFont">clients</span> to implement innovative technological solutions that drive <span className="slimFont">efficiency, productivity, and growth</span>.  </Typography>
                </Box>
                <Box ref={refAnimation} sx={{ width: '100%', display: 'flex', justifyContent: 'center', my: 4, transform: 'scale(0)' }} className='animationService'>
                    <Box sx={{ width: isMobile ?'200px':'300px' }}>
                        <Lottie animationData={animation} loop={true} />
                    </Box>
                </Box>
            </Box>
        </>
    )
}