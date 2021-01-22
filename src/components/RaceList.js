import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import {addNewPerson } from '../store/actions';
import { Person } from './Person';
import {FormDialog} from './FormDialog';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export const RaceList = ({ race, raceList }) => {
  
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  
  const closeDialog = () => {
    setIsEdit(false);
  }

  const handleSave = (newName) => {
    dispatch(addNewPerson(race, newName));
    setIsEdit(false);
  };

  return (
    <>
    <div className='column__top'>
      <h3 className="header">{race}</h3>
      <Fab size="small" color="primary" aria-label="add" onClick={() => setIsEdit(true)}>
        <AddIcon />
      </Fab>
    </div>
     
    <FormDialog
      type="addNew"
      isEdit={isEdit}
      text={`Add new ${race}`}
      handleClose={closeDialog}
      handleSave={handleSave}
    />
      { raceList.map((item) => {
        if (race === item.race) {
          return (
            <Person item={item} key={item.id} />
          );
        }

        return null;
      })
      }
    </>
  );
};
