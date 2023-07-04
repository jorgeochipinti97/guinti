import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {  useInView } from 'react-intersection-observer';
import { Elastic, gsap, Back, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";


export const FaqQuestion = ({ question, answer }) => {
    const [refDiv, inViewDiv] = useInView({
        threshold: .5,
    });

    gsap.registerPlugin(ScrollTrigger)

    useEffect(()=>{
        inViewDiv && gsap.to('.accordion',{
            opacity: 1, ease: Elastic.easeIn,delay:.6
        })

    },[inViewDiv])

    return (
        <>
            <Accordion sx={{my:1,backgroundColor:'#FDFCF8',opacity:0}} ref={refDiv} className='accordion' >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{fontFamily:'Montserrat', fontSize:'19px'}}> {question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontFamily:'Montserrat',fontSize:'15px'}}>
                        {answer}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )
}