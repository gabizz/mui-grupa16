import React, { Fragment } from 'react'
import { Box, Button, Card, CardActions, CardContent, Typography, Grid, Chip, List, ListItem, ListItemIcon, Fade } from '@mui/material'
import { FaShoppingBasket } from "react-icons/fa"
import CheckIcon from '@mui/icons-material/Check'

const plans = [
  {
    title: 'PACHET DE BAZA',
    price: '49 RON',
    period: '/lună',
    description: 'Perfect pentru a începe promovarea afacerii tale în mediul online.',
    features: [
      'Promovare standard pe platformă',
      'Suport tehnic prin email (Luni - Vineri)',
      '1 listare de produs activă',
      'Statistici de bază (vizualizări)',
    ],
    buttonText: 'Cumpără acum',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
    iconColor: 'info.main',
    popular: false,
  },
  {
    title: 'PACHET STANDARD',
    price: '99 RON',
    period: '/lună',
    description: 'Soluția ideală pentru afacerile în creștere rapidă și vizibilitate sporită.',
    features: [
      'Promovare prioritară în rezultatele căutării',
      'Suport telefonic și email 24/7',
      'Până la 5 listări de produse active',
      'Statistici detaliate și rapoarte de performanță',
      'Insignă de vânzător verificat',
    ],
    buttonText: 'Alege standard',
    buttonVariant: 'contained',
    buttonColor: 'primary',
    iconColor: 'primary.main',
    popular: true,
  },
  {
    title: 'PACHET PREMIUM',
    price: '199 RON',
    period: '/lună',
    description: 'Pentru companiile care doresc vizibilitate maximă și suport dedicat.',
    features: [
      'Promovare premium pe prima pagină',
      'Manager de cont dedicat',
      'Listări nelimitate de produse',
      'Statistici avansate în timp real',
      'Optimizare SEO pentru listări',
      'Acces la campanii de marketing exclusive',
    ],
    buttonText: 'Cumpără premium',
    buttonVariant: 'outlined',
    buttonColor: 'secondary',
    iconColor: 'secondary.main',
    popular: false,
  },
]

export default function Preturi() {
  return (
    <Fade in={true} timeout={800}>
      <Box>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Planurile noastre tarifare
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Alege pachetul care se potrivește cel mai bine nevoilor afacerii tale. Poți face upgrade sau downgrade în orice moment.
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ py: 2, alignItems: 'stretch' }}>
        {plans.map((plan, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                borderRadius: 3,
                border: plan.popular ? '2px solid' : '1px solid',
                borderColor: plan.popular ? 'primary.main' : 'divider',
                boxShadow: plan.popular ? 4 : 1,
                overflow: 'visible',
                backgroundColor: 'background.paper',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: plan.popular ? 12 : 6,
                },
              }}
            >
              {plan.popular && (
                <Chip
                  label="CEL MAI POPULAR"
                  color="primary"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontWeight: 'bold',
                    fontSize: '0.75rem',
                    letterSpacing: '0.5px',
                    px: 1,
                  }}
                />
              )}

              <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', mb: 1, color: plan.popular ? 'primary.main' : 'text.primary' }}>
                  {plan.title}
                </Typography>
                
                <Typography variant="body2" color="text.secondary" sx={{ minHeight: 48, mb: 3 }}>
                  {plan.description}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 3 }}>
                  <Typography variant="h3" component="span" sx={{ fontWeight: '800', color: 'text.primary' }}>
                    {plan.price.split(' ')[0]}
                  </Typography>
                  <Typography variant="h6" component="span" sx={{ fontWeight: '600', color: 'text.secondary', ml: 0.5 }}>
                    {plan.price.split(' ')[1]}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                    {plan.period}
                  </Typography>
                </Box>

                <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', mb: 3 }} />

                <List sx={{ p: 0, mb: 2, flexGrow: 1 }}>
                  {plan.features.map((feature, idx) => (
                    <ListItem key={idx} sx={{ px: 0, py: 0.75, alignItems: 'flex-start' }}>
                      <ListItemIcon sx={{ minWidth: 28, mt: 0.25 }}>
                        <CheckIcon sx={{ color: plan.iconColor, fontSize: '1.2rem' }} />
                      </ListItemIcon>
                      <Typography variant="body2" color="text.primary" sx={{ m: 0 }}>
                        {feature}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </CardContent>

              <CardActions sx={{ p: 4, pt: 0 }}>
                <Button
                  fullWidth
                  variant={plan.buttonVariant}
                  color={plan.buttonColor}
                  startIcon={<FaShoppingBasket />}
                  sx={{
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 'bold',
                    textTransform: 'none',
                    borderColor: 'divider',
                    '&:hover': {
                      borderColor: plan.buttonColor === 'secondary' ? 'secondary.main' : 'primary.main',
                    }
                  }}
                >
                  {plan.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Box>
    </Fade>
  )
}
