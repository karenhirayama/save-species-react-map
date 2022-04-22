import { Box, Container, Typography } from "@mui/material";
import { Map } from "./map/Map";
import leaf from '../../leaf.svg';


export const About = () => {
  return (
    <Box>
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
            Especies Ameaçadas em extinção
          </Typography>
          <Box
            maxWidth={500}
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
              A extinção pode ocorrer por diversos motivos, como competição, doenças, catástrofes ambientais, destruição do habitat, mudanças climáticas drásticas, e principalmente pela ação antrópica.
              {<br />}
              {<br />}
              Existem um total de XXXX espécies em ameaça de extinção e esse projeto visa mostrar essas espécies e as suas respectivas áreas.
              {<br />}
              {<br />}
              Também vale ressaltar a importância da conservação das espécies e que o trabalho de gerenciamento e identificação de espécies ameaçadas é muito importante para que providências sejam tomadas para reduzir as crescentes taxas de extinção.
              {<br />}
              {<br />}
              As informações aqui presentes fazem parte de uma base de dados extraído do Portal de Dados Abertos do Ministério do Meio Ambiente/Serviço Florestal Brasileiro.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
              mt={1}
            >
              <img src={leaf} alt='Leaf' />
            </Box>
          </Box>
        </Box>
        <Map />
      </Container>
    </Box>
  )
}
