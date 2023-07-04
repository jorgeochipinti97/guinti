import { Box, Typography } from "@mui/material"
import Lottie from "lottie-react";
import animation from '../../../animations/dlf10_L6dZJoGotp.json'

export const LoadingComponent = () => {
    return (
        <>
            <Box sx={{ width: '100vw', height: '80vh', backgroundColor: '#FDFCF8' }}>
                <Typography variant='body1' sx={{ textAlign: 'center', py: 5, fontSize: '25px',fontFamily:'Montserrat' }}>Please wait, loading..</Typography>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ width: '30%' }}>
                        
                        <Lottie animationData={animation} loop={true} />
                    </Box>
                </Box>
            </Box>
        </>
    )
}