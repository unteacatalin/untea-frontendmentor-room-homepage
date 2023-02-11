import React, { Fragment, useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles()((theme) => {
  return {
    appBarContainer: {
      width: '100%',
      padding: '2.5rem 25rem',
      backgroundColor: 'transparent',
      padding: '1.6rem 2.1rem 0 2.1rem',
      [theme.breakpoints.down('md')]: {
        padding: '1rem',
      },
      [theme.breakpoints.down('xs')]: {
        padding: '1rem 0.5rem',
      },
    },
    drawerContainer: {
      width: '100%',
      backgroundColor: theme.palette.common.white,
      padding: '2rem 1rem',
      [theme.breakpoints.down('md')]: {
        padding: '1.7rem 0.9rem',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '1.9rem 1rem',
      },
      [theme.breakpoints.down('xs')]: {
        padding: '1.95rem 0.5rem',
      },
    },
    iconContainer: {
      padding: '0.5rem',
      margin: 0,
      minWidth: '24px',
    },
    logoContainer: {
      backgroundImage: 'url("/brush-stroke-logo.svg")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      padding: '1.5rem 2rem',
      margin: '0',
      [theme.breakpoints.down('md')]: {
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    logoText: {
      textTransform: 'none',
      color: theme.palette.common.white,
      textShadow: `2px 2px 3px ${theme.palette.common.white}`,
      fontSize: '1.5rem',
      letterSpacing: '0.15rem',
      fontWeight: '600',
    },
    drawerIcon: {
      color: theme.palette.common.black,
    },
    menuBackground: {
      backgroundImage: 'url("/brush-stroke-tab-menu.svg")',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100%',
    },
  };
});

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className='MuiTabs-indicatorSpan' /> }}
  />
))(({ theme }) => ({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    height: '3px',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    width: '20px',
    backgroundColor: theme.palette.common.white,
    boxShadow: `0 3px 5px 3px ${theme.palette.common.black}`,
    borderRadius: '5px',
    [theme.breakpoints.down('xs')]: {
      backgroundColor: theme.palette.common.black,
    },
  },
  '&.MuiTabs-root': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  '& .MuiTabs-flexContainer': {
    display: 'block',
  },
}));

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontSize: theme.typography.pxToRem(16),
    marginLeft: theme.spacing(1),
    color: theme.palette.common.white,
    textShadow: `2px 2px 2px ${theme.palette.common.white}`,
    fontWeight: 500,
    height: '3rem',
    minHeight: '3rem',
    width: '7rem',
    letterSpacing: '0.1rem',
    backgroundImage: 'url("/brush-stroke-tab.svg")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    [theme.breakpoints.down('xl')]: {
      fontSize: theme.typography.pxToRem(15),
    },
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.pxToRem(15),
      marginLeft: theme.spacing(1),
      width: '6rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.pxToRem(13),
      marginLeft: theme.spacing(0.1),
      width: '5rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.pxToRem(14),
      marginLeft: theme.spacing(0),
      width: '2rem',
      letterSpacing: 0,
      backgroundImage: 'url("/brush-stroke-tab-drawer.svg")',
      minWidth: '75px',
    },
    '&.Mui-selected': {
      color: theme.palette.common.white,
      fontWeight: 600,
    },
    ':hover': {
      color: theme.palette.common.white,
    },
  })
);

function Header() {
  const { classes } = useStyles();
  const matchesMD = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const [value, setValue] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = (
    <StyledTabs
      value={value}
      onChange={handleChange}
      variant='fullWidth'
      className={classes.rightAlign}
    >
      <StyledTab
        label='home'
        component={Link}
        href='/'
        onClick={() => {
          setOpenDrawer(false);
        }}
      />
      <StyledTab
        label='shop'
        component={Link}
        href='/'
        onClick={() => {
          setOpenDrawer(false);
        }}
      />
      <StyledTab
        label='about'
        component={Link}
        href='/'
        onClick={() => {
          setOpenDrawer(false);
        }}
      />
      <StyledTab
        label='contact'
        component={Link}
        href='/'
        onClick={() => {
          setOpenDrawer(false);
        }}
      />
    </StyledTabs>
  );

  const drawer = (
    <Fragment>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        {openDrawer ? (
          <CloseIcon className={classes.drawerIcon} />
        ) : (
          <div className={classes.menuBackground}>
            <MenuIcon
              className={classes.drawerIcon}
              sx={{ fill: theme.palette.common.white }}
            />
          </div>
        )}
      </IconButton>
      <SwipeableDrawer
        anchor='top'
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawerPaper, root: classes.drawerRoot }}
      >
        <AppBar className={classes.drawerContainer} position='fixed'>
          <Toolbar disableGutters>
            <Button
              component={Link}
              href='/'
              disableRipple
              onClick={() => {
                setOpenDrawer(false);
              }}
              className={classes.iconContainer}
            >
              <CloseIcon className={classes.drawerIcon} />
            </Button>
            {tabs}
          </Toolbar>
        </AppBar>
      </SwipeableDrawer>
    </Fragment>
  );

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar className={classes.appBarContainer} position='fixed'>
          <Toolbar disableGutters>
            {matchesMD && drawer}
            <Button
              component={Link}
              href='/'
              disableRipple
              className={classes.logoContainer}
              onClick={() => {
                setOpenDrawer(false);
                setValue(0);
              }}
            >
              <Typography variant='body' className={classes.logoText}>
                room
              </Typography>
            </Button>
            {!matchesMD && tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
}

export default Header;
