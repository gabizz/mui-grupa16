import React from 'react'
import { Box, Button, Card, CardContent, Grid, Paper, Stack, Typography, Fade } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import BrushIcon from '@mui/icons-material/Brush'
import CodeIcon from '@mui/icons-material/Code'
import SpeedIcon from '@mui/icons-material/Speed'

const features = [
  {
    title: 'Adaptabilitate maximă',
    description: 'Ne pliem perfect pe cerințele specifice ale proiectului tău, oferind flexibilitate deplină în dezvoltare.',
    icon: <BrushIcon fontSize="large" color="secondary" />,
  },
  {
    title: 'Cod curat & modern',
    description: 'Scriem cod performant, optimizat SEO și ușor de întreținut, folosind cele mai noi standarde web.',
    icon: <CodeIcon fontSize="large" color="primary" />,
  },
  {
    title: 'Performanță de top',
    description: 'Aplicațiile noastre se încarcă instant și rulează fluid pe orice dispozitiv, asigurând o experiență premium.',
    icon: <SpeedIcon fontSize="large" color="secondary" />,
  },
]

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <Fade in={true} timeout={800}>
      <Box sx={{ py: 2 }}>
      {/* Hero Section */}
      <Grid container spacing={6} sx={{ alignItems: 'center', mb: 8 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={3}>
            <Typography variant="overline" color="secondary.main" sx={{ fontWeight: 'bold', letterSpacing: 1.5 }}>
              TEHNOLOGIE & ADAPTABILITATE
            </Typography>
            <Typography variant="h3" component="h1" sx={{ fontWeight: 800, color: 'primary.main', lineHeight: 1.2 }}>
              Soluții digitale la fel de adaptabile ca natura
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
              La fel ca un cameleon care își modifică culorile pentru a se integra perfect în mediu, soluțiile noastre software se adaptează instant nevoilor dinamice ale afacerii tale. Construim viitorul tău digital astăzi.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
              <Button 
                variant="contained" 
                color="primary" 
                size="large"
                onClick={() => navigate('/preturi')}
                sx={{ px: 4, py: 1.5, borderRadius: 2, textTransform: 'none', fontWeight: 'bold' }}
              >
                Vezi ofertele de preț
              </Button>
              <Button 
                variant="outlined" 
                color="secondary" 
                size="large"
                onClick={() => navigate('/contact')}
                sx={{ px: 4, py: 1.5, borderRadius: 2, textTransform: 'none', fontWeight: 'bold' }}
              >
                Contactează-ne
              </Button>
            </Stack>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src="./cameleon.jpg"
            alt="Cameleon adaptabilitate"
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: 400,
              objectFit: 'cover',
              borderRadius: 4,
              boxShadow: 8,
              border: '1px solid',
              borderColor: 'divider',
            }}
          />
        </Grid>
      </Grid>

      {/* Services/Features Section */}
      <Box sx={{ mb: 8 }}>
        <Box sx={{ mb: 5, textAlign: 'center' }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 2 }}>
            De ce să colaborezi cu noi?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Combinăm expertiza tehnică de excepție cu adaptabilitatea pentru a livra proiecte software de înaltă calitate.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index} sx={{ display: 'flex' }}>
              <Card 
                variant="outlined" 
                sx={{ 
                  width: '100%',
                  borderRadius: 3, 
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    borderColor: 'primary.main',
                    boxShadow: 4,
                  }
                }}
              >
                <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Box sx={{ display: 'inline-flex', alignSelf: 'flex-start', p: 1.5, borderRadius: 2, bgcolor: 'action.hover', mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1, color: 'text.primary' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, flexGrow: 1 }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* CTA Section */}
      <Paper 
        elevation={0}
        sx={{ 
          p: { xs: 4, md: 6 }, 
          borderRadius: 4, 
          bgcolor: 'primary.main', 
          color: 'primary.contrastText',
          textAlign: 'center'
        }}
      >
        <Typography variant="h4" component="h2" sx={{ fontWeight: 800, mb: 2 }}>
          Pregătit să îți scalezi afacerea?
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', mb: 4, opacity: 0.9 }}>
          Fie că ai nevoie de consultanță, un produs complet sau optimizarea unei soluții existente, suntem echipa de care ai nevoie.
        </Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          size="large"
          onClick={() => navigate('/contact')}
          sx={{ 
            px: 5, 
            py: 1.5, 
            borderRadius: 2, 
            fontWeight: 'bold', 
            textTransform: 'none',
            bgcolor: 'secondary.main',
            color: 'primary.contrastText',
            '&:hover': {
              bgcolor: 'secondary.dark',
            }
          }}
        >
          Începe un proiect acum
        </Button>
      </Paper>
      </Box>
    </Fade>
  )
}
