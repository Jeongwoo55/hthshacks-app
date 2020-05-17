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
import "./Album.css";
import firestore from "./firestore";
import firebase from "firebase";
import coronavirusModel from ".\\images\\coronavirus.png";
import dnaModel from ".\\images\\dna.png";
import waterModel from "./images/water.png"
import co2Model from "./images/co2.png";

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

// const db = firebase.firestore().collection("test").get();
// console.log(db);

const cards = [
  {
    title: "Coronavirus",
    model: (
      <img
        style={{
          color: "#6a6a6a",
          textDecoration: "none",
        }}
        src={coronavirusModel}
      />
    ),
    image:
      "https://ewscripps.brightspotcdn.com/dims4/default/7671677/2147483647/strip/true/crop/1303x733+15+0/resize/1280x720!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2F0a%2Ff2%2F72b1b4d94794992a0772cb593ce5%2Fscreen-shot-2020-02-25-at-10.49.27%20AM.png",
    description: "a group of RNA viruses",
    text: `Coronaviruses are a group of related RNA viruses that cause diseases in mammals and birds. In humans, these viruses cause respiratory tract infections that can range from mild to lethal. Mild illnesses include some cases of the common cold (which is caused also by certain other viruses, predominantly rhinoviruses), while more lethal varieties can cause SARS, MERS, and COVID-19. Symptoms in other species vary: in chickens, they cause an upper respiratory tract disease, while in cows and pigs they cause diarrhea. There are as yet no vaccines or antiviral drugs to prevent or treat human coronavirus infections. (Wikipedia contributors. "Coronavirus." Wikipedia, The Free Encyclopedia. Wikipedia, The Free Encyclopedia, 16 May. 2020. Web. 17 May. 2020.)`,
  },
  {
    title: "DNA",
    model: (
      <img
        style={{
          color: "#6a6a6a",
          textDecoration: "none",
        }}
        src={dnaModel}
      />
    ),
    image:
      "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/cc_shutterstock_338933429_16x9.jpg?itok=aoufPxIr",
    description: "carries genetic instructions of living organisms",
    text: `Deoxyribonucleic acid is a molecule composed of two polynucleotide chains that coil around each other to form a double helix carrying genetic instructions for the development, functioning, growth and reproduction of all known organisms and many viruses. DNA and ribonucleic acid (RNA) are nucleic acids. Alongside proteins, lipids and complex carbohydrates (polysaccharides), nucleic acids are one of the four major types of macromolecules that are essential for all known forms of life. (Wikipedia contributors. "DNA." Wikipedia, The Free Encyclopedia. Wikipedia, The Free Encyclopedia, 16 May. 2020. Web. 17 May. 2020.)`,
  },
  {
    title: "Hydrogen Bonding",
    model: (
      <img
        style={{
          color: "#6a6a6a",
          textDecoration: "none",
        }}
        src={waterModel}
      />
    ),
    image:
      "https://d2cbg94ubxgsnp.cloudfront.net/Pictures/2000x2000fit/2/1/7/138217_shutterstock_350946731.jpg",
    description:
      "a partial intermolecular bonding interaction between a lone pair on an electron rich donor atom",
    text: `A hydrogen bond is a partial intermolecular bonding interaction between a lone pair on an electron rich donor atom, particularly the second-row elements nitrogen, oxygen, or fluorine, and the antibonding molecular orbital of a bond between hydrogen and a more electronegative atom or group. Such an interacting system is generally denoted Dn–H···Ac, where the solid line denotes a polar covalent bond, and the dotted or dashed line indicates the hydrogen bond. (Wikipedia contributors. "Hydrogen bond." Wikipedia, The Free Encyclopedia. Wikipedia, The Free Encyclopedia, 29 Apr. 2020. Web. 17 May. 2020. )`,
  },
  {
    title: "Carbon Dioxide",
    model: (
      <img
        style={{
          color: "#6a6a6a",
          textDecoration: "none",
        }}
        src={co2Model}
      />
    ),
    image: "https://miro.medium.com/proxy/1*FBRtL-zgF37T1LChAyCXBA.jpeg",
    description: "a molecule that consists of one carbon atom and 2 oxygen atoms",
    text: `The carbon dioxide molecule is linear and centrosymmetric. The carbon–oxygen bond length is 116.3 pm, noticeably shorter than the bond length of a C–O single bond and even shorter than most other C–O multiply-bonded functional groups. Since it is centrosymmetric, the molecule has no electrical dipole. Carbon dioxide is soluble in water, in which it reversibly forms carbonic acid, which is a weak acid since its ionization in water is incomplete. (Wikipedia contributors. "Carbon dioxide." Wikipedia, The Free Encyclopedia. Wikipedia, The Free Encyclopedia, 10 May. 2020. Web. 17 May. 2020. )`,
  },
];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            MoleculAR
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
              MoleculAR
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              a simple and easy way to learn new concepts using 3D AR models
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
                                  View
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
                          View
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
          MoleculAR
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          a{" "}
          <a
            style={{
              color: "#696969",
              textDecoration: "none",
            }}
            href="https://hthshacks.com/"
            target="_blank"
          >
            <em>hths.hacks()</em>
          </a>{" "}
          project
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
