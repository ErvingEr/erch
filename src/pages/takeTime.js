import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useState } from "react";
import * as React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import "react-datepicker/dist/react-datepicker.css";

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Dialog onClose={handleClose} open={open}>
      <div>
        <div className="container-fluid d-flex flex-column align-items-end" style={{paddingTop:"12px"}}>
          <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
        </div>
        <div className="inputs">
          <div className="d-flex flex-column align-items-center">
          <i class="bi bi-clock-history" style={{fontSize:"6rem"}}></i>
          <h2>Цаг авах</h2>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div>
              <label>Үйлчилгээ</label>  
              <select className="form-select mb-3" aria-label="Default select example">
                <option selected>Сонгох</option>
                <option value="Тэнхлэг тохиргоо">Тэнхлэг тохиргоо</option>
                <option value="Смарт оношлогоо">Смарт оношлогоо</option>
                <option value="Компьютер оношлогоо">Компьютер оношлогоо</option>
                <option value="CRDI оношлогоо">CRDI оношлогоо</option>
              </select>
            </div>
            <div className="d-flex align-items-start flex-column">
              <label>Өдөр</label>
              <DatePicker selected={startDate} onChange={(date=Date) => setStartDate(date)} className="date mb-3"/>
            </div>
            <div>
              <label>Цаг</label>  
              <select className="form-select mb-3" aria-label="Default select example">
                <option selected>Сонгох</option>
                <option value="9:00">9:00</option>
                <option value="9:20">9:20</option>
                <option value="9:40">9:40</option>
                <option value="10:00">10:00</option>
                <option value="10:20">10:20</option>
                <option value="10:40">10:40</option>
                <option value="11:00">11:00</option>
                <option value="11:20">11:20</option>
                <option value="11:40">11:40</option>
                <option value="12:00">12:00</option>
                <option value="12:20">12:20</option>
                <option value="12:40">12:40</option>
                <option value="13:00">13:00</option>
                <option value="13:20">13:20</option>
                <option value="13:40">13:40</option>
                <option value="14:00">14:00</option>
                <option value="14:20">14:20</option>
                <option value="14:40">14:40</option>
                <option value="15:00">15:00</option>
                <option value="15:20">15:20</option>
                <option value="15:40">15:40</option>
                <option value="16:00">16:00</option>
                <option value="16:20">16:20</option>
                <option value="16:40">16:40</option>
                <option value="17:00">17:00</option>
                <option value="17:20">17:20</option>
                <option value="17:40">17:40</option>
                <option value="18:00">18:00</option>
                <option value="18:20">18:20</option>
                <option value="18:40">18:40</option>
              </select>
              <button className="btn btn-success" id="takeTimeBtn">Цаашлах</button>
              </div>
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

export default function TakeTime() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };


  return (
    <div>
      <div variant="outlined" onClick={handleClickOpen} style={{cursor:"pointer"}}>
        Цаг авах
      </div>
      <SimpleDialog
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
