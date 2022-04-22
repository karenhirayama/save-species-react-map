import { Box, Container, Grid, Typography } from "@mui/material";
import leaf from '../../leaf.svg';
import { EvaluationCategories } from "./EvaluationCategories";

export const Categories = () => {
  return (
    <>
      <Container maxWidth='lg'>
        <Box mt={5}>
          <Typography variant="h4"
            sx={{
              fontFamily: 'Raleway, sans-serif',
              marginLeft: 1,
              fontWeight: 600,
              color: '#005359',
              textAlign: 'start'
            }}
          >
            Categorias de Avaliação
          </Typography>
          <Grid container>
            <Grid sm={6}
              mt={5}
            >
              <Typography
                sx={{
                  fontFamily: 'Raleway, sans-serif',
                  marginLeft: 1,
                  fontWeight: 700,
                  color: '#005359',
                  textAlign: 'start'
                }}
              >
                A metodologia para identificação de conservação das especíes foi desenvolvida pela União Internacional para Conservação da Natureza (UICN).
                {<br />}
                {<br />}
                O trabalho da UICN é de suma importância, pois fonece informações com base científica sobre o estado das espécies de plantas, animais, fungos e protozoários. Assim, contribuindo para decisões legislativas em relação à preservação da fauna e flora.
                {<br />}
                {<br />}
                Para mais informações:
                {<br />}
                {<br />}
                <a href='https://oeco.org.br/dicionario-ambiental/27904-entenda-a-classificacao-da-lista-vermelha-da-iucn/'>
                  Entenda a classificação da Lista Vermelha da IUCN
                </a>
                {<br />}
                {<br />}
                <a href='https://www.icmbio.gov.br/portal/images/stories/imgs-unidades-coservacao/avaliacao_da_fauna_brasileira_ICMBio.pdf'>
                  Avaliação do estado de conservação da fauna brasileira
                </a>
                {<br />}
                {<br />}
                <a href='https://www.icmbio.gov.br/ran/images/Arquivos/especies_ameacadas/categorias_criterios_iucn_2012.pdf'>
                  Categorias de avaliação
                </a>
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
                mt={2}
              >
                <img src={leaf} alt='Leaf' />
              </Box>
            </Grid>
            <Grid sm={6}
              mt={5}
            >
              <EvaluationCategories />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}
