import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export const FormDialog = ({isEdit, text, type, name, handleSave, handleClose}) => {
  const [newName , setNewName] = useState(name || '');
  const [isError, setIsError] = useState(false);
  
  const handleChange = (value) => {
    setNewName(value);
    setIsError(false)
  }

  const close = () => {
    setNewName(name);
    handleClose();
  }

  const save = () => {
    if(newName.length === 0) {
      setIsError(true);
      return
    }
    handleSave(newName);
    if (type === 'addNew'){
      setNewName('');
    }
  }

  return (
    <div>
      <Dialog open={isEdit} onClose={close} aria-labelledby="form-dialog-title">
        <DialogTitle 
          id="form-dialog-title"
        >
          {text}
        </DialogTitle>
        <DialogContent>
          <TextField
            error={isError}
            helperText={isError ? "Field must'n be empty" : null}
            autoFocus
            id="name"
            label="New Name"
            fullWidth
            value={newName}
            onChange={e => handleChange(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={close} color="primary">
            Cancel
          </Button>
          <Button onClick={save} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}