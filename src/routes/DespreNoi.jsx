import React from 'react'
import { Box, Typography, Grid, Card, CardContent, Stack, Paper, Fade } from '@mui/material'
import GroupIcon from '@mui/icons-material/Group'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import HandshakeIcon from '@mui/icons-material/Handshake'

const values = [
  {
    title: 'Adaptabilitate',
    description: 'Ne adaptăm instant la noile tehnologii și cerințe de business pentru a livra soluții optime.',
    icon: <LightbulbIcon fontSize="large" color="primary" />,
  },
  {
    title: 'Parteneriat',
    description: 'Dezvoltăm relații de lungă durată cu clienții noștri, bazate pe încredere și comunicare transparentă.',
    icon: <HandshakeIcon fontSize="large" color="secondary" />,
  },
  {
    title: 'Excelență tehnică',
    description: 'Scriem cod robust, curat și optimizat pentru performanță maximă pe orice dispozitiv.',
    icon: <GroupIcon fontSize="large" color="primary" />,
  },
]

export default function DespreNoi() {
  return (
    <Fade in={true} timeout={800}>
      <Box sx={{ py: 2 }}>
      {/* Introduction Hero */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Despre noi
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
          Suntem Chameleon Digital, o echipă de specialiști pasionați de crearea de produse digitale remarcabile. Îmbinăm creativitatea cu rigoarea tehnică pentru a ajuta afacerile să exceleze în mediul online.
        </Typography>
      </Box>

      {/* Cine Suntem Detail */}
      <Grid container spacing={4} sx={{ mb: 8, alignItems: 'center' }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={3}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              Povestea noastră
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              Am pornit la drum cu o misiune clară: să eliminăm complexitatea inutilă din procesul de dezvoltare software și să oferim soluții care se pliază perfect pe obiectivele partenerilor noștri. Numele nostru reflectă capacitatea noastră de a ne adapta la orice provocare tehnică și de a excela în orice context de business.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              Fiecare linie de cod pe care o scriem și fiecare ecran pe care îl proiectăm au la bază înțelegerea profundă a utilizatorului final și a valorii pe care produsul o aduce în piață.
            </Typography>
          </Stack>
        </Grid>
        
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper 
            variant="outlined" 
            sx={{ 
              p: 4, 
              borderRadius: 4, 
              bgcolor: 'primary.main', 
              color: 'primary.contrastText',
              boxShadow: 3
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Misiunea noastră
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.7, mb: 3 }}>
              „Să accelerăm transformarea digitală a partenerilor noștri prin soluții software sigure, inovatoare și perfect adaptabile la schimbările dinamice ale pieței moderne.”
            </Typography>
            <Box sx={{ borderBottom: '1px solid', borderColor: 'primary.light', opacity: 0.3, mb: 3 }} />
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
              — Echipa Chameleon Digital
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Values Section */}
      <Box>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'center', mb: 5 }}>
          Valorile care ne ghidează
        </Typography>
        
        <Grid container spacing={3}>
          {values.map((val, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index} sx={{ display: 'flex' }}>
              <Card variant="outlined" sx={{ width: '100%', borderRadius: 3 }}>
                <CardContent sx={{ p: 4, textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Box sx={{ display: 'inline-flex', mx: 'auto', p: 1.5, borderRadius: '50%', bgcolor: 'action.hover', mb: 2 }}>
                    {val.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {val.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, flexGrow: 1 }}>
                    {val.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      </Box>
    </Fade>
  )
}
