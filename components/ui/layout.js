import { makeStyles } from 'tss-react/mui';

import Header from './header';
import Footer from './footer';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      position: 'relative',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('lg')]: {
        width: '100%',
        height: 'auto',
      },
    },
    main: {
      height: '100vh',
      width: '100vw',
      [theme.breakpoints.down('lg')]: {
        width: '100%',
        height: 'auto',
      },
    },
  };
});

function Layout({ children }) {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
