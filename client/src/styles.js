import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appbar : {
    backgroundColor: 'rgb(50, 50, 50, 0.8)',
    boxShadow: '0px 8px 20px rgb(50, 50, 50, 0.9)',
    display: 'flex',
    height : '18vh',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom : '2%'
  },
  heading: {
    marginLeft: '3vh',
    color: 'rgba(0,183,255, 1)',
    fontSize: "300%"

  },
  image: {
    marginLeft: '15px',
  },
  outer: {
    margin : '0',
    padding : '0',
  }
}));
