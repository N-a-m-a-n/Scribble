import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    padding : 0,
    margin : 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    boxShadow: '0px 8px 20px rgb(50, 50, 50, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // borderRadius: '5px',
    height: '100%',
    position: 'relative',
    border: 0,
    // fontFamily : 'Montaga, serif',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    // display: 'flex',
    // justifyContent: 'space-between',
  },   
  likes : {
    height : '35px',
    border : 'none',
    borderRadius : '50px',
    // marginLeft : '10%'
  },
  delete : {
    height : '35px',
    border : 'none',
    borderRadius : '50px',
    marginRight : '10%'
  }
});
