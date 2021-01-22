import React from 'react';
import { RaceList } from './RaceList';
import { useSelector } from 'react-redux';
import { getList } from '../store/selectors';
import LinearProgress from '@material-ui/core/LinearProgress';

const races = ['Hobbit', 'Human', 'Dworf', 'Elf'];

export const RaceColumns = () => {
  const raceList = useSelector(getList);
  if (raceList.length === 0) {
    return <LinearProgress />
  } else {
    return (
      <div className="container">
        {races.map(race => (
          <div className="column" key={race}>
            <RaceList race={race} raceList={raceList} />
          </div>
        ))}
      </div>
    );
  }
 
}

