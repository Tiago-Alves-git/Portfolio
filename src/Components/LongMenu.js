import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Language } from '@mui/icons-material';

const optionsEn = [
  { name: 'Portuguese', code: 'PT'},
  { name: 'English', code: 'EN'},
];

const optionsPt = [
  { name: 'Português', code: 'PT'},
  { name: 'Inglês', code: 'EN'},
];

const ITEM_HEIGHT = 48;

export default class LongMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      language: 'PT'
    };
  }
  
  render() {
    const { anchorEl } = this.state; // Moveu para antes do uso de anchorEl
    const { language, setLanguage } = this.props;
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      this.setState((prevState) => {
        return {
          ...prevState,
          anchorEl: event,
        };
      });
    };

    const handleClose = (e) => {
      const { target } = e;
      const atributo = target.getAttribute('value');
      setLanguage(atributo);
      this.setState((prevState) => {
        return {
          ...prevState,
          anchorEl: null,
          language: atributo,
        };
      });
      
    };


    return (
      <div style={{ display: 'flex', alignSelf: 'flex-start' }}>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          sx={{ color: 'white' }}
        >
          <Language />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {language === 'PT'
            ? optionsPt.map((option, index) => (
                <MenuItem key={index} onClick={(e) => handleClose(e)} value={option.code}>
                  {option.name}
                </MenuItem>
              ))
            : optionsEn.map((option, index) => (
              <MenuItem key={index} onClick={(e) => handleClose(e)} value={option.code}>
              {option.name}
            </MenuItem>
              ))}
        </Menu>
      </div>
    );
  }
}
