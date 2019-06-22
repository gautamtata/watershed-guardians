import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
     button: {
        margin: theme.spacing(1),
      },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  },
}));

function SimpleModal() {
  const [open, setOpen] = React.useState(false);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  return (
    <div>
     
      <Button id="modal-button" variant="outlined" color="primary" className={classes.button} onClick={handleOpen}>HEALTHY RANGE</Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper} id = "test-range-modal">
          <Typography variant="h6" id="modal-title">
            <b> <em> These ranges are approximate and research shows that they correspond to a healthy aquatic life</em></b>
          </Typography>
          <Typography variant="subtitle1" id="simple-modal-description">
           <b> pH => 7.0 - 8.0 </b>
           <b> Air Temperature => 10.0 degree - 20.0 degree celcius </b>
           <b> Depth => Above 100m </b>
           <b> Dissolved Oxygen => more than 8mg/L    </b>
          </Typography>
          
        </div>
      </Modal>
    </div>
  );
}

export default SimpleModal;