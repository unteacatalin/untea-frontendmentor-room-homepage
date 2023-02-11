import { useState } from 'react';
import Head from 'next/head';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from 'tss-react/mui';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from '@mui/material/styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import cls from 'classnames';
import IconArrow from '../components/images/icon-arrow';

import Layout from '../components/ui/layout';

const useStyles = makeStyles()((theme) => {
  return {
    mainContainer: {
      width: '100vw',
      height: '100vh',
      [theme.breakpoints.down('lg')]: {
        height: 'auto',
      },
    },
    firstLine: {
      width: '100%',
      maxHeight: '70%',
      overflow: 'clip',
      [theme.breakpoints.down('lg')]: {
        maxHeight: 'auto',
      },
    },
    secondLine: {
      width: '100%',
      maxHeight: '30%',
      overflow: 'clip',
      [theme.breakpoints.down('lg')]: {
        maxHeight: 'auto',
      },
    },
    callToActionBlock: {
      width: '100%',
      height: '100%',
      padding: '5rem 15rem',
      [theme.breakpoints.down('xxxl')]: {
        padding: '3rem 7rem',
      },
      [theme.breakpoints.down('xxl')]: {
        padding: '3rem 5rem',
      },
      [theme.breakpoints.down('xl')]: {
        padding: '3rem 3rem',
      },
    },
    buttonContainerLeft: {
      position: 'absolute',
      right: '-7rem',
      bottom: 0,
      zIndex: 20,
      [theme.breakpoints.down('xxl')]: {
        right: '-6rem',
      },
      [theme.breakpoints.down('xl')]: {
        right: '-5rem',
      },
      [theme.breakpoints.down('lg')]: {
        right: '6rem',
      },
      [theme.breakpoints.down('md')]: {
        right: '5rem',
      },
      [theme.breakpoints.down('sm')]: {
        right: '3rem',
      },
    },
    buttonContainerRight: {
      position: 'absolute',
      right: '-14rem',
      bottom: 0,
      zIndex: 20,
      [theme.breakpoints.down('xxl')]: {
        right: '-12rem',
      },
      [theme.breakpoints.down('xl')]: {
        right: '-10rem',
      },
      [theme.breakpoints.down('lg')]: {
        right: 0,
      },
    },
    buttonLeft: {
      backgroundColor: theme.palette.secondary.main,
      width: '7rem',
      height: '7rem',
      padding: 0,
      margin: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 0,
      [theme.breakpoints.down('xxl')]: {
        width: '6rem',
        height: '6rem',
      },
      [theme.breakpoints.down('xl')]: {
        width: '5rem',
        height: '5rem',
      },
      [theme.breakpoints.down('lg')]: {
        width: '6rem',
        height: '6rem',
      },
      [theme.breakpoints.down('md')]: {
        width: '5rem',
        height: '5rem',
      },
      [theme.breakpoints.down('sm')]: {
        width: '3rem',
        height: '3rem',
        minWidth: '3rem',
      },
      '&:hover': {
        backgroundColor: theme.palette.secondary.light,
      },
    },
    buttonRight: {
      backgroundColor: theme.palette.secondary.main,
      width: '7rem',
      height: '7rem',
      padding: 0,
      margin: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 0,
      [theme.breakpoints.down('xxl')]: {
        width: '6rem',
        height: '6rem',
      },
      [theme.breakpoints.down('xl')]: {
        width: '5rem',
        height: '5rem',
      },
      [theme.breakpoints.down('lg')]: {
        width: '6rem',
        height: '6rem',
      },
      [theme.breakpoints.down('md')]: {
        width: '5rem',
        height: '5rem',
      },
      [theme.breakpoints.down('sm')]: {
        width: '3rem',
        height: '3rem',
        minWidth: '3rem',
      },
      '&:hover': {
        backgroundColor: theme.palette.secondary.light,
      },
    },
    image: {
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100%',
      maxHeight: '100%',
      overflow: 'clip',
    },
    imageContainer: {
      // position: 'relative',
      height: '100%',
      width: 'auto',
    },
    heroBlock: {
      maxHeight: '100%',
      width: '100%',
      position: 'relative',
    },
    carouselContainer: {
      width: 'auto',
      height: '100%',
      maxHeight: '100%',
      position: 'relative',
      '& .carousel.carousel-slider': {
        width: 'auto',
        height: 'inherit',
        overflow: 'visible',
        '& .slider-wrapper': {
          width: 'auto',
          height: 'inherit',
          '& .slider': {
            width: 'auto',
            height: 'inherit',
            '& .sliode .selected': {
              width: 'auto',
              height: 'inherit',
            },
          },
        },
      },
    },
    textBody: {
      color: theme.palette.common.dark_gray,
      lineHeight: '1.5rem',
      padding: '1rem 0',
    },
    shopButton: {
      padding: '1rem 0',
      margin: 0,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: '2rem',
      color: theme.palette.common.dark_gray,
      [theme.breakpoints.down('xxl')]: {
        marginTop: '1rem',
      },
      [theme.breakpoints.down('xl')]: {
        marginTop: '0.5rem',
      },
      '&:hover': {
        color: theme.palette.common.black,
      },
    },
    shopButtonText: {
      letterSpacing: '0.5rem',
      fontSize: '0.9rem',
      fontWeight: 500,
      paddingRight: '1rem',
    },
    aboutTitle: {
      letterSpacing: '0.3rem',
      paddingBottom: '1rem',
      fontWeight: 700,
      fontSize: '1.2rem',
      [theme.breakpoints.down('xl')]: {
        fontSize: '1.1rem',
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: '1.2rem',
      },
    },
    aboutContainer: {
      padding: '0 3rem',
      width: '100%',
      height: '100%',
      [theme.breakpoints.down('xl')]: {
        padding: '2.7rem 2.7rem',
      },
    },
    callToActionTitle: {
      paddingBottom: '2rem',
      fontSize: '3.5rem',
      [theme.breakpoints.down('xxl')]: {
        fontSize: '2.5rem',
      },
      [theme.breakpoints.down('xl')]: {
        paddingBottom: '1.5rem',
      },
    },
  };
});

const data = [
  {
    title: 'Discover innovative ways to decorate',
    description:
      'We provide unmatched quality, confort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
  },
  {
    title: 'We are available all across the globe',
    description:
      'With stores all over the world, it&rsquo;s easy for you to find furniture for your home or place of nusiness. Locally, we&rsquo;re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don&rsquo;t hesitate to contact us today.',
  },
  {
    title: 'Manufactured with the best materials',
    description:
      'Our modern furniture store provide a high level of quality. Our company has invested in advanced technologyto ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry,we understand what customers want for their home and office.',
  },
];

export default function Home() {
  const { classes } = useStyles();
  const matchesSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const matchesLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  const matchesXL = useMediaQuery((theme) => theme.breakpoints.down('xl'));
  const theme = useTheme();
  const [hoverShop, setHoverShop] = useState(false);
  const [selected, setSelected] = useState(0);

  function handleChange(selectedIndex) {
    setSelected(selectedIndex);
  }

  return (
    <Layout>
      <Head>
        <title>room - Home</title>
        <meta name='description' content='room home' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Grid
        item
        container
        flexDirection='column'
        xs={12}
        className={classes.mainContainer}
      >
        <Grid
          item
          container
          flexDirection={matchesLG ? 'column' : 'row'}
          className={classes.firstLine}
          xs={12}
        >
          <Grid item container lg={7} md={12} className={classes.heroBlock}>
            <Carousel
              autoPlay={true}
              interval={5000}
              showArrows={false}
              infiniteLoop={true}
              showStatus={false}
              showThumbs={false}
              showIndicators={false}
              preventMovementUntilSwipeScrollTolerance={true}
              swipeScrollTolerance={50}
              className={classes.carouselContainer}
              onChange={handleChange}
              renderArrowPrev={(clickHandler, hasPrev, label) => {
                return (
                  <Button
                    variant='text'
                    className={cls(
                      classes.buttonLeft,
                      classes.buttonContainerLeft
                    )}
                    onClick={clickHandler}
                  >
                    <ArrowBackIosNewIcon
                      color={theme.palette.common.white}
                      sx={{
                        fontSize: matchesSM
                          ? '1rem'
                          : matchesLG
                          ? '2rem'
                          : matchesXL
                          ? '2rem'
                          : '2rem',
                      }}
                    />
                  </Button>
                );
              }}
              renderArrowNext={(clickHandler, hasNext, label) => {
                return (
                  <Button
                    variant='text'
                    className={cls(
                      classes.buttonRight,
                      classes.buttonContainerRight
                    )}
                    onClick={clickHandler}
                  >
                    <ArrowForwardIosIcon
                      color={theme.palette.common.white}
                      sx={{
                        fontSize: matchesSM
                          ? '1rem'
                          : matchesLG
                          ? '2rem'
                          : matchesXL
                          ? '2rem'
                          : '2rem',
                      }}
                    />
                  </Button>
                );
              }}
            >
              <div className={classes.imageContainer}>
                <Image
                  src={
                    matchesXL
                      ? '/mobile-image-hero-1.jpg'
                      : '/desktop-image-hero-1.jpg'
                  }
                  alt='hero 1'
                  width={0}
                  height={0}
                  quality='100'
                  className={classes.image}
                />
              </div>
              <div className={classes.imageContainer}>
                <Image
                  src={
                    matchesXL
                      ? '/mobile-image-hero-2.jpg'
                      : '/desktop-image-hero-2.jpg'
                  }
                  alt='hero 2'
                  width={0}
                  height={0}
                  quality='100'
                  className={classes.image}
                />
              </div>
              <div className={classes.imageContainer}>
                <Image
                  src={
                    matchesXL
                      ? '/mobile-image-hero-3.jpg'
                      : '/desktop-image-hero-3.jpg'
                  }
                  alt='hero 3'
                  width={0}
                  height={0}
                  quality='100'
                  className={classes.image}
                />
              </div>
            </Carousel>
          </Grid>
          <Grid
            item
            container
            lg={5}
            md={12}
            flexDirection='column'
            className={classes.callToActionBlock}
            justifyContent='center'
          >
            <Grid item>
              <Typography variant='h1' className={classes.callToActionTitle}>
                {data[selected].title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body' className={classes.textBody}>
                {data[selected].description}
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant='text'
                className={classes.shopButton}
                disableRipple
                onMouseEnter={() => setHoverShop(true)}
                onMouseLeave={() => setHoverShop(false)}
              >
                <Typography variant='body' className={classes.shopButtonText}>
                  SHOP NOW
                </Typography>
                <IconArrow
                  color={
                    hoverShop
                      ? theme.palette.common.black
                      : theme.palette.common.dark_gray
                  }
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          flexDirection={matchesLG ? 'column' : 'row'}
          className={classes.secondLine}
          xs={12}
        >
          <Grid item container xl={3} lg={4} md={12}>
            <Image
              src='/image-about-dark.jpg'
              alt='about dark'
              width={0}
              height={0}
              quality='100'
              className={classes.image}
            />
          </Grid>
          <Grid
            item
            container
            xl={6}
            lg={4}
            md={12}
            flexDirection='column'
            className={classes.aboutContainer}
            justifyContent='center'
          >
            <Grid item>
              <Typography variant='h5' className={classes.aboutTitle}>
                ABOUT OUR FURNITURE
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body' className={classes.textBody}>
                Our multifunctional collection blends design and function to
                suit your individual taste. Make each room unique, or pick a
                cohesibe theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from
                traditional to contemporary styles or anything in between.
                Product specialists are available to help you create your dream
                space.
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xl={3} lg={4} md={12}>
            <Image
              src='/image-about-light.jpg'
              alt='about light'
              width={0}
              height={0}
              quality='100'
              className={classes.image}
            />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
