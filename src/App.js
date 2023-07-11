import React, { useEffect } from 'react';
import './App.css';
import { calculateGamma, classBasedFilter, filterProperty, mean, median, mode } from './util/utils';
import wineData from './data/Wine-Data.json';

function App() {

  const filteredWine = classBasedFilter(wineData)
  const flavanoidsHeaders = ['Flavanoids Mean', 'Flavanoids Median', 'Flavanoids Mode']
  const gammaHeaders = ['Gamma Mean', 'Gamma Median', 'Gamma Mode']
  calculateGamma(filteredWine[1])
  const tableHeaders = () => {
    return <thead>
      <td>Measure</td>
      {filteredWine?.map((item, index) => {
        return <td>{`Class ${index}`}</td>

      })}
    </thead>
  }
  const meanValues = (property) => {
    return <>
      {filteredWine?.map((item, index) => {
        if (property == 'Gamma') {
          return <td>{mean(calculateGamma(filteredWine[index])).toFixed(3)}</td>
        }
        return <td>{mean(filterProperty(filteredWine[index], property)).toFixed(3)}</td>
      })}
    </>
  }

  const medianValues = (property) => {
    return <>
      {filteredWine?.map((item, index) => {
        if (property == 'Gamma') {
          return <td>{median(calculateGamma(filteredWine[index])).toFixed(3)}</td>
        }
        return <td>{median(filterProperty(filteredWine[index], property)).toFixed(3)}</td>
      })}
    </>
  }

  const modeValues = (property) => {
    return <>
      {filteredWine?.map((item, index) => (
        <>
          {property != "Gamma" && <td>{mode(filterProperty(filteredWine[index], property)).join(',  ')}</td>}

          {property == "Gamma" && <td>{mode(calculateGamma(filteredWine[index])).join(',  ')}</td>}

        </>

      ))}
    </>

  }

  const tableRows = (headers, property) => {
    console.log(property)
    let mean = meanValues(property)
    return <>
      <tr>
        <td>{headers[0]}</td>
        {mean}</tr>
      <tr>
        <td>{headers[1]}</td>
        {medianValues(property)}</tr>
      <tr>
        <td>{headers[2]}</td>
        {modeValues(property)}</tr>
    </>



  }

  return (
    <div className="App">
      <div>
        <h2>Flavanoids</h2>
        <table>
          {tableHeaders()}
          {tableRows(flavanoidsHeaders, 'Flavanoids')}
        </table>
      </div>
      <div>
        <h2>Gamma</h2>
        <table>
          {tableHeaders()}
          {tableRows(gammaHeaders, 'Gamma')}
        </table>
      </div>


    </div>
  );
}

export default App;
