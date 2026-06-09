import React, { useState } from 'react'
import { Box, Button, Grid, Paper, Stack, Tab, Tabs, TextField, Typography, Fade } from '@mui/material'

export default function Contact() {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  return (
    <Fade in={true} timeout={800}>
      <Box sx={{ py: 2 }}>
      {/* Page Title */}
      <Box sx={{ mb: 5, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Contactează-ne
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Echipa noastră este pregătită să îți răspundă la orice întrebare. Trimite-ne un mesaj sau vizitează-ne la sediu.
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
        {/* Left Column - Contact Form */}
        <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex' }}>
          <Paper 
            variant="outlined" 
            sx={{ 
              p: 4, 
              borderRadius: 3, 
              width: '100%',
              display: 'flex', 
              flexDirection: 'column',
              borderColor: 'divider',
              boxShadow: 1
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', mb: 3 }}>
              Trimite-ne un mesaj
            </Typography>
            
            <Stack spacing={2.5} sx={{ flexGrow: 1 }}>
              <TextField 
                label="Nume și Prenume" 
                fullWidth 
                required 
                variant="outlined"
              />
              <TextField 
                label="Adresă Email" 
                type="email" 
                fullWidth 
                required 
                variant="outlined"
              />
              <TextField 
                label="Număr Telefon" 
                fullWidth 
                variant="outlined"
              />
              <TextField 
                label="Mesaj" 
                multiline 
                rows={4} 
                fullWidth 
                required 
                variant="outlined"
              />
              
              <Box sx={{ flexGrow: 1 }} />
              
              <Button 
                variant="contained" 
                color="primary" 
                size="large" 
                sx={{ 
                  textTransform: 'none', 
                  fontWeight: 'bold', 
                  py: 1.5, 
                  borderRadius: 2,
                  mt: 2
                }}
              >
                Trimite mesajul
              </Button>
            </Stack>
          </Paper>
        </Grid>

        {/* Right Column - Map and Contact Info Tabs */}
        <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex' }}>
          <Paper 
            variant="outlined" 
            sx={{ 
              p: 4, 
              borderRadius: 3, 
              width: '100%',
              display: 'flex', 
              flexDirection: 'column',
              borderColor: 'divider',
              boxShadow: 1
            }}
          >
            {/* Mockup Map Image */}
            <Box
              component="img"
              src="./generic-map.jpg"
              alt="Harta sediu"
              sx={{
                width: '100%',
                height: 200,
                objectFit: 'cover',
                borderRadius: 2,
                mb: 3,
                border: '1px solid',
                borderColor: 'divider',
              }}
            />

            {/* Navigation Tabs */}
            <Tabs 
              value={activeTab} 
              onChange={handleTabChange} 
              textColor="primary" 
              indicatorColor="primary"
              variant="fullWidth"
              sx={{ 
                borderBottom: 1, 
                borderColor: 'divider', 
                mb: 3,
                '& .MuiTab-root': {
                  fontWeight: 'bold',
                  textTransform: 'none',
                  fontSize: '0.95rem'
                }
              }}
            >
              <Tab label="Adresă & contact" />
              <Tab label="Informații juridice" />
            </Tabs>

            {/* Tab Contents */}
            <Box sx={{ flexGrow: 1 }}>
              {activeTab === 0 && (
                <Stack spacing={2.5}>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                      Adresă sediu central:
                    </Typography>
                    <Typography variant="body1">
                      Bulevardul Revoluției nr. 512, etaj 1, Arad, România
                    </Typography>
                  </Box>
                  
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                      Telefon:
                    </Typography>
                    <Typography variant="body1">
                      +40 722 123 456
                    </Typography>
                  </Box>
                  
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                      E-mail:
                    </Typography>
                    <Typography variant="body1" color="primary.main" sx={{ fontWeight: '500' }}>
                      contact@chameleon-digital.ro
                    </Typography>
                  </Box>
                  
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                      Program de lucru:
                    </Typography>
                    <Typography variant="body1">
                      Luni - Vineri: 09:00 - 18:00
                    </Typography>
                  </Box>
                </Stack>
              )}

              {activeTab === 1 && (
                <Stack spacing={2.5}>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                      Denumire firmă:
                    </Typography>
                    <Typography variant="body1">
                      Chameleon Digital S.R.L.
                    </Typography>
                  </Box>
                  
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                      Cod unic de înregistrare (CUI):
                    </Typography>
                    <Typography variant="body1">
                      RO 12345678
                    </Typography>
                  </Box>
                  
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                      Număr registrul comerțului:
                    </Typography>
                    <Typography variant="body1">
                      J02/12345/2026
                    </Typography>
                  </Box>
                  
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                      Sediu social:
                    </Typography>
                    <Typography variant="body1">
                      Bulevardul Revoluției nr. 512, Arad
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                      Date cont bancar:
                    </Typography>
                    <Typography variant="body1" sx={{ fontFamily: 'monospace', fontWeight: 'bold' }}>
                      RO99 BTRL RONCRT 0123 4567 8901
                    </Typography>
                    <Typography variant="caption" color="text.secondary" display="block">
                      Banca Transilvania, Sucursala Arad
                    </Typography>
                  </Box>
                </Stack>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>
      </Box>
    </Fade>
  )
}
