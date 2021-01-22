import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadData } from './store/actions';

import { RaceColumns } from './components/RaceColumns';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  return (
    <div className="App">
      <RaceColumns />
    </div>
  )
};

export default App;
