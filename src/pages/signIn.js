import * as React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <div className="d-flex flex-column justify-content-center align-items-center" style={{width:"400px"}}>
        <div className="container-fluid d-flex justify-content-end" style={{paddingTop:"12px"}}>
          <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
        </div>
        <div className="SMS d-flex flex-column align-items-center justify-content-start gap-5">
          <div className="d-flex flex-column align-items-center">
            <i class="bi bi-person-fill" style={{fontSize:"7rem"}}></i>
            <h1>Нэвтрэх</h1>
          </div>
          <div className="d-flex flex-column align-items-center gap-4" style={{width:"100%"}}>
            <TextField className='input' id="fullWidth" label="Утасны дугаар"/>
            <TextField className='input' id="" label="Нууц үг"/>
            <button id="signInBtn" className="btn btn-success"> Нэвтрэх</button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function SignIn() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <button className="btn btn-outline-success" variant="outlined" onClick={handleClickOpen} id="signIn" style={{border:"none"}}>
        Нэвтрэх
      </button>
      <SimpleDialog
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
