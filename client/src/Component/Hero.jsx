import { Box,CardContent,CardMedia,Container,Grid,Stack, styled, Typography } from '@mui/material'
import React from 'react'
import HeroImager from "../asset/images/caro.jpg"
import HeroImager1 from "../asset/images/caro2.jpg"
import HeroImager2 from "../asset/images/caro3.jpg"
export default function Hero() {
    const StyledBox = styled(Box)({
        height:200,
        width:"100%",
        cursor:"pointer",
        backgroundPosition:"center center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"

    })
    const StyledTypography = styled(Typography)({
        margin:"25% 50px 25% 50px",
        backgroundColor:"white", 
        opacity:"0.8"
    })

  return (
    <>
        <Box>
            <Typography align='center' variant="h3" sx={{fontweight:900}}>Fashion<b style={{color:"red"}} >Blog</b></Typography>
            <Typography align='center' variant="body2" sx={{fontweight:100}}>we make you look better</Typography>
            <Box sx={{backgroundImage:`url(${HeroImager})`,display:"flex",justifyContent:"center",width:"100%",height:600, backgroundRepeat:'no-repeat', backgroundColor:"black", backgroundPosition:"center",backgroundSize:"cover"}}>
                <Box sx={{width:{xs:"100%", sm:"80%", md:"70%"}, padding:{xs:3, sm:2, md:20}, }}>
                    <Box sx={{background:"white", opacity:"0.8"}}>
                        <Typography variant={"h6"} color="tomato" align='center' pt={8}>
                            Trading Style
                        </Typography>
                        <Typography variant={"h4"} align='center'>
                            Life is boring without fashion
                        </Typography>
                        <Typography variant={"body1"} align='center' pb={8}>
                            we love to change you very
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
        <Container>
            <Box>
                <Stack direction={{xs:"column", sm:"column", md:"row"}} spacing={{xs:1, sm:2, md:4}} mt={5}>
                    <StyledBox sx={{backgroundImage:`url(${HeroImager1})`}}>
                        <StyledTypography align="center" variant="h3">Kids</StyledTypography>
                    </StyledBox>
                    <StyledBox sx={{backgroundImage:`url(${HeroImager2})`}}>
                        <StyledTypography align="center" variant="h3">Men</StyledTypography>
                    </StyledBox>
                    <StyledBox sx={{backgroundImage:`url(${HeroImager1})`}}>
                        <StyledTypography align="center" variant="h3">Women</StyledTypography>
                    </StyledBox>
                </Stack>
            </Box>
            <hr/>
            <Stack direction="row" spacing={8} mt={8}>
                <Box flex={3} sx={{padding:"18px 100px 100px 100px"}}>
                    <Grid container rowSpacing={1} columnSpacing={1}>
                        <Grid item>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="100%"
                            image={HeroImager}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="body1" color={"tomato"} align='center' component="div">
                            PERFUMES
                            </Typography>
                            <Typography gutterBottom variant="h5"  align='center' component="div">
                            Wearing this will make everyone loves you
                            </Typography>
                            <Typography gutterBottom variant="body2" align='center'  color="text.secondary" component="div">
                            Its Woman love
                            </Typography>
                            <Typography variant="body2" color="text.secondary" align='center'>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        </Grid>

                        <Grid item xs={6} >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="100%"
                            image={HeroImager}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="body1" color={"tomato"} align='center' component="div">
                            PERFUMES
                            </Typography>
                            <Typography gutterBottom variant="h5"  align='center' component="div">
                            Wearing this will make everyone loves you
                            </Typography>
                            <Typography gutterBottom variant="body2" align='center'  color="text.secondary" component="div">
                            Its Woman love
                            </Typography>
                            <Typography variant="body2" color="text.secondary" align='center'>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        </Grid>
                        <Grid item xs={6} >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="100%"
                            image={HeroImager}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="body1" color={"tomato"} align='center' component="div">
                            PERFUMES
                            </Typography>
                            <Typography gutterBottom variant="h5"  align='center' component="div">
                            Wearing this will make everyone loves you
                            </Typography>
                            <Typography gutterBottom variant="body2" align='center'  color="text.secondary" component="div">
                            Its Woman love
                            </Typography>
                            <Typography variant="body2" color="text.secondary" align='center'>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        </Grid>
                        <Grid item xs={6} >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="100%"
                            image={HeroImager}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="body1" color={"tomato"} align='center' component="div">
                            PERFUMES
                            </Typography>
                            <Typography gutterBottom variant="h5"  align='center' component="div">
                            Wearing this will make everyone loves you
                            </Typography>
                            <Typography gutterBottom variant="body2" align='center'  color="text.secondary" component="div">
                            Its Woman love
                            </Typography>
                            <Typography variant="body2" color="text.secondary" align='center'>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        </Grid>
                        <Grid item xs={6} >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="100%"
                            image={HeroImager}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="body1" color={"tomato"} align='center' component="div">
                            PERFUMES
                            </Typography>
                            <Typography gutterBottom variant="h5"  align='center' component="div">
                            Wearing this will make everyone loves you
                            </Typography>
                            <Typography gutterBottom variant="body2" align='center'  color="text.secondary" component="div">
                            Its Woman love
                            </Typography>
                            <Typography variant="body2" color="text.secondary" align='center'>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        </Grid>
                    </Grid>
                </Box>
                <Box flex={1}>
                    Rightbar
                </Box>
            </Stack>
        </Container>
    </>
  )
}
