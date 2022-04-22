import { Box, Container, Grid, Typography } from "@mui/material";
import leaf from '../../leaf.svg';
import { EvaluationCategories } from "./EvaluationCategories";
import { linksHrefCategories } from "./hrefCategories";

export const Categories = () => {
  return (
    <>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid md={6}
          >
            <Box mt={5} mr={3}>
              <Typography variant="h4"
                sx={{
                  fontFamily: 'Raleway, sans-serif',
                  marginLeft: 1,
                  fontWeight: 600,
                  color: '#005359',
                  textAlign: 'start',
                  marginBottom: 5
                }}
              >
                Categorias de Avaliação
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Raleway, sans-serif',
                  marginLeft: 1,
                  fontWeight: 700,
                  color: '#005359',
                  textAlign: 'start'
                }}
              >
                A metodologia para identificação de conservação das especíes foi desenvolvida pela União Internacional para Conservação da Natureza (IUCN).
                {<br />}
                {<br />}
                O trabalho da IUCN é de suma importância, pois fonece informações com base científica sobre o estado das espécies de plantas, animais, fungos e protozoários. Assim, contribuindo para decisões legislativas em relação à preservação da fauna e flora.
                {<br />}
                {<br />}
                Para mais informações:
                <ul>
                  {linksHrefCategories.map((info) => (
                    <li>
                      <a href={info.link} target='_blank' rel='noreferrer'>
                        {info.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
                mt={4}
              >
                <img src={leaf} alt='Leaf' />
              </Box>
            </Box>

          </Grid>
          <Grid md={6}
            mt={5}
          >
            <EvaluationCategories />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
