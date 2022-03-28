import { Box, Container, Typography } from "@mui/material"
import { Map } from "./map/Map"

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
            width={400}
            mt={4}
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
              Também vale ressaltar a importância da conservação das espécies e que esse trabalho de gerenciamento e identificação de espécies ameaçadas é muito importante para que providências sejam tomadas para reduzir as crescentes taxas de extinção.
            </Typography>
          </Box>
        </Box>
        <Map />
      </Container>
    </Box>
  )
}
