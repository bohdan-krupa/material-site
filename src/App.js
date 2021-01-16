import { useState } from 'react'
import { AppBar, Button, Container, IconButton, Toolbar, Typography, Box, Paper, Grid, Card, CardMedia, CardContent, CardActions, BottomNavigation, BottomNavigationAction, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import LayerIcon from '@material-ui/icons/Layers'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FolderIcon from '@material-ui/icons/Folder'
import RestoreIcon from '@material-ui/icons/Restore'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import FavoriteIcon from '@material-ui/icons/Favorite'

import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  mainFeaturesPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, .3)'
  },
  mainFeaturesPostContent: {
    position: 'relative',
    padding: theme.spacing(6),
    marginTop: theme.spacing(8)
  },
  cardMedia: {
    paddingTop: '56.25%'
  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  },
  footer: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(5)
  }
}))

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function App() {
  const classes = useStyles()
  const [value, setValue] = useState('recents')
  const [openDialog, setOpenDialog] = useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleDialogOpen = () => {
    setOpenDialog(true)
  }

  const handleDialogClose = () => {
    setOpenDialog(false)
  }

  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton className={classes.menuButton} edge="start" aria-label="menu" color="inherit">
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6">KRP Blog</Typography>
            <Box mr={3}>
              <Button color="inherit" variant="outlined" onClick={handleDialogOpen}>Log in</Button>

              <Dialog open={openDialog} onClose={handleDialogClose} aria-label="form-dialog-title">
                <DialogTitle id="form-dialog-title">Log in</DialogTitle>
                <DialogContent>
                  <DialogContentText>Log in to edit blog</DialogContentText>
                  <TextField
                    autoFocus margin="dense" id="name" label="Email Address"
                    type="email" fullWidth
                  />
                  <TextField
                    margin="dense" id="password" label="Password"
                    type="password" fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleDialogClose} color="primary">Cancel</Button>
                  <Button onClick={handleDialogClose} color="primary">Log In</Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Button color="secondary" variant="contained">Sign Up</Button>
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Paper
          className={classes.mainFeaturesPost}
          style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}
        >
          <Container fixed>
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography
                    component="h1" variant="h3" color="inherit" gutterBottom
                  >About my life</Typography>
                  <Typography
                    variant="h5" color="inherit" paragraph
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                  <Button variant="contained" color="secondary">Learn more</Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        
        <div className={classes.mainContent}>
          <Container maxWidth="md">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>KRP Blog</Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>

            <div className={classes.mainButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">Story</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">Recently Day</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid}>
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`https://source.unsplash.com/random?sig=${card}`}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>Day {card}</Typography>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">View</Button>
                    <Button size="small" color="primary">Edit</Button>
                    <LayerIcon />
                    <PlayCircleFilledIcon />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>KRP Blog</Typography>
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
          <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
        </BottomNavigation>
        <Typography align="center" color="textSecondary" component="p" variant="subtitle1">Bohdan Krupa 2021-{new Date().getFullYear()}</Typography>
      </footer>
    </>
  );
}

export default App