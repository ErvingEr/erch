import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { NavLink } from 'react-router-dom';
import SignIn from './pages/signIn';
import TakeTime from './pages/takeTime';

export default function Practice() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box className="container d-flex flex-column align-items-start gap-3 pt-4">
        <div className='d-flex align-items-center justify-content-center gap-2'>
        <i class="bi bi-house-door-fill" style={{fontSize:"1.3rem"}}></i>
          <div to="/">Нүүр</div>
        </div>
        <div className='d-flex align-items-center justify-content-center gap-2'>
        <i class="bi bi-clock-history" style={{fontSize:"1.3rem"}}></i>
          <TakeTime/>
        </div>
        <div className='d-flex align-items-center justify-content-center gap-2'>
        <i class="bi bi-journal-text"style={{fontSize:"1.3rem"}}></i>
          <div to="">Бидний тухай</div>
        </div>
        <div>
          <div to="">
           <SignIn onClick={toggleDrawer(anchor, false)}/>
          </div>
        </div>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment>
          <button className='btn btn-outline-dark' onClick={toggleDrawer(anchor, true)} style={{border:"none"}}><i class="bi bi-list" style={{fontSize:"2rem"}}></i></button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}