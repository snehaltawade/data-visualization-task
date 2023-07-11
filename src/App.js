import React, { useEffect } from 'react';
import './App.css';
import { calculateGamma, classBasedFilter, filterProperty, mean, median, mode } from './util/utils';
import wineData from './data/Wine-Data.json';
import TaskTable from './components/taskTable';

function App() {

  return (
    <div className="App">
      <TaskTable/>

    </div>
  );
}

export default App;
