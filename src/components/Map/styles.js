import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px',
  },
  mapContainer: {
    height: '85vh', width: '100%',
  },
  noCoord: {
    height: '65vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    [theme.breakpoints.down('sm')]: {justifyContent: 'flex-start' },
  },
  markerContainer: {
    position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
  },
  pointer: {
    cursor: 'pointer',
  },
}));