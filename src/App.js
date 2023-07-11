import React, { useEffect } from 'react';
import './App.css';
import { calculateGamma, classBasedFilter, filterProperty, mean, median, mode } from './util/utils';
import wineData from './data/Wine-Data.json';

function App() {

  const filteredWine = classBasedFilter(wineData)
  const flavanoidsHeaders = ['Flavanoids Mean', 'Flavanoids Median', 'Flavanoids Mode']
  const gammaHeaders = ['Gamma Mean', 'Gamma Median', 'Gamma Mode']
  const tableHeaders = () => {
    return <thead>
      <tr>
      <th>Measure</th>
      {filteredWine?.map((item, index) => {
        return <th key={index}>{`Class ${index}`}</th>

      })}
      </tr>
    </thead>
  }
  const meanValues = (property) => {
    return <>
      {filteredWine?.map((item, index) => {
        if (property == 'Gamma') {
          return <td key={index}>{mean(calculateGamma(filteredWine[index])).toFixed(3)}</td>
        }
        return <td key={index}>{mean(filterProperty(filteredWine[index], property)).toFixed(3)}</td>
      })}
    </>
  }

  const medianValues = (property) => {
    return <>
      {filteredWine?.map((item, index) => {
        if (property == 'Gamma') {
          return <td key={index}>{median(calculateGamma(filteredWine[index])).toFixed(3)}</td>
        }
        return <td key={index}>{median(filterProperty(filteredWine[index], property)).toFixed(3)}</td>
      })}
    </>
  }

  const modeValues = (property) => {
    return <>
      {filteredWine?.map((item, index) => (
        <>
          {property != "Gamma" && <td key={index}>{mode(filterProperty(filteredWine[index], property)).join(',  ')}</td>}

          {property == "Gamma" && <td key={index}>{mode(calculateGamma(filteredWine[index])).join(',  ')}</td>}

        </>

      ))}
    </>

  }

  const tableRows = (headers, property) => {
    let mean = meanValues(property)
    return <>
      <tr>
        <th>{headers[0]}</th>
        {meanValues(property)}
      </tr>
      <tr>
        <th>{headers[1]}</th>
        {medianValues(property)}
      </tr>
      <tr>
        <th>{headers[2]}</th>
        {modeValues(property)}</tr>
    </>



  }

  return (
    <div className="App">
      <div>
        <h2>Flavanoids</h2>
        <table>    
          {tableHeaders()}
          <tbody>
          {tableRows(flavanoidsHeaders, 'Flavanoids')}
          </tbody>
        </table>
      </div>
      <div>
        <h2>Gamma</h2>
        <table>      
          {tableHeaders()}
          <tbody>
          {tableRows(gammaHeaders, 'Gamma')}
          </tbody>
        </table>
      </div>


    </div>
  );
}

export default App;
