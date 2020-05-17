import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Popup from "reactjs-popup";
import './Album.css'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
  {
    title: "Strong Acids",
    model: "HCl: Hydrochloric acid\nHNO3: Nitric acid\nH2SO4: Sulfuric acid\nHBr: Hydrobromic acid\nHI: Hydroiodic acid (also known as hydriodic acid)\nHClO4: Perchloric acid\nHClO3: Chloric acid",
    image:
      "https://www.thoughtco.com/thmb/u_XJxqLgUCkRAU_PXn3qdpio7Qc=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Sulfuric-acid-58de7ffa5f9b58468367c7b5.jpg",
    description: "In chemistry, there are 7 strong acids you need to know.",
    text: "In chemistry, there are seven \"strong\" acids. What makes them \"strong\" is the fact that they completely dissociate into their ions (H+ and an anion) when they are mixed with water. Every other acid is a weak acid. Because there are only seven strong acids, it is easy to commit the list to memory. Note that some chemistry instructors may refer only to six strong acids.",
  },
  {
    title: "Strong Bases",
    link: "https://www.google.com/",
  },
];

function displayInfo(props) {
  return (
    <Popup
      trigger={
        <button size="small" color="primary" className="button">
          {" "}
          Open Modal{" "}
        </button>
      }
      modal
    >
      {(close) => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="header"> Modal Title </div>
          <div className="content">{props.text}</div>
          <div className="actions">
            <Popup
              trigger={<button className="button"> Trigger </button>}
              position="top center"
              closeOnDocumentClick
            >
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                magni omnis delectus nemo, maxime molestiae dolorem numquam
                mollitia, voluptate ea, accusamus excepturi deleniti ratione
                sapiente! Laudantium, aperiam doloribus. Odit, aut.
              </span>
            </Popup>
            <button
              className="button"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              close modal
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            EduAR
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              EduAR
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              a simple and easy way to learn new concepts using 3D AR models.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Popup
                      trigger={
                        <Button size="small" color="primary">
                          Read
                        </Button>
                      }
                      modal
                    >
                      {(close) => (
                        <div className="modal">
                          <a className="close" onClick={close}>
                            &times;
                          </a>
                          <CardMedia
                            className={classes.cardMedia}
                            image={card.image}
                            title="Image title"
                          />
                          <CardContent className={classes.cardContent}>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {card.title}
                            </Typography>
                            <Typography>{card.text}</Typography>
                          </CardContent>
                          <div className="actions">
                            <Popup
                              trigger={
                                <Button size="small" color="primary">
                                  Models
                                </Button>
                              }
                              position="top center"
                              closeOnDocumentClick
                            >
                              <span>{card.model}</span>
                            </Popup>
                            <Button
                              size="small"
                              color="primary"
                              onClick={() => {
                                console.log("modal closed ");
                                close();
                              }}
                            >
                              Close
                            </Button>
                          </div>
                        </div>
                      )}
                    </Popup>
                    <Popup
                      trigger={
                        <Button size="small" color="primary">
                          Models
                        </Button>
                      }
                      position="top center"
                      closeOnDocumentClick
                    >
                      <span>{card.model}</span>
                    </Popup>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          EduAR
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          EduAR
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
