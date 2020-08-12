import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({  
  note: {
    height: '100%', 
    width: '100%',
    background: '#ffeb3b',
    borderRadius: 10, 
    spacing: 2
  },
  noteTextField: {
    height: '100%',
    width: '100%'
  }
});

function NoteBook(props) {
    const { colors } = props;
    const classes = useStyles();
    const [inputToggle, setInputToggle] = useState(true);
    const [value, setValue] = useState("NoteBook Sample");

    return (
      <Grid className={classes.note}>      
        {inputToggle && (
          <Typography 
            className={classes.noteTextField}
            onClick={ () => {
              setInputToggle(false)
            }}
          >
            {value}
          </Typography>
        )}
        {!inputToggle && (
          <TextField       
            className={classes.noteTextField}
            multiline
            onDoubleClick={ () => {
              setInputToggle(true);
            }}
            onChange={ (e) => {
              setValue(e.target.value);
            }}
            value={value}
            >
          </TextField>
        )}                
      </Grid>
    );
}

export default NoteBook;
