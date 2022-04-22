import { Box, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from './logo.svg'

export const Header = () => {

  return (
    <Box
      sx={{
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
      }}
    >
      <Container maxWidth="lg" >
        <Box
          display='flex' alignItems='center' justifyContent='space-between'
        >
          <Box
            p={1} display='flex' alignItems='center'
          >
            <img src={logo} alt='logo' />
            <Typography
              sx={{
                fontFamily: 'Raleway, sans-serif',
                marginLeft: 1,
                fontWeight: 600,
                cursor: 'pointer',
                color: '#005359'
              }}
            >
              <Link to='/'>
                Save Species
              </Link>
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: 'Raleway, sans-serif',
                marginLeft: 1,
                fontWeight: 600,
                cursor: 'pointer',
                '&:hover': {
                  color: '#005359'
                }
              }}
            >
              <Link to='categorias'>
                Categorias
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container >
    </Box >
  )
}
