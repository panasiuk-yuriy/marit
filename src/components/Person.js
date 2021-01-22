import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePerson, changePersonName } from '../store/actions';
import { FormDialog } from './FormDialog';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

export const Person = ({ item }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  const startEdit = () => {
    setIsEdit(true);
  };

  const handleClose = () => {
    setIsEdit(false);
  };

  const handleSave = (newName) => {
    dispatch(changePersonName(item.id, newName));
    setIsEdit(false);
  };

  return (
    <>
      <div className="person">
        <div className="person__info">
          <Avatar>
            <PermIdentityIcon />
          </Avatar>
          <p>{item.name}</p>
        </div>
        <div className="person__controls">
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => startEdit()}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => dispatch(deletePerson(item.id))}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      <FormDialog
        isEdit={isEdit}
        text={`Change the ${item.name}`}
        name={item.name}
        handleSave={handleSave}
        handleClose={handleClose}
      />
    </>

  );
};
