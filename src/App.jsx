
import { Suspense } from 'react';
import './App.css'
import Countries from './Countries/Countries/Countries'

const loadCountries = fetch("https://openapi.programming-hero.com/api/all").then(res => res.json());

function App() {

  return (
    <>
    <Suspense fallback={<h3>Countries loading ...</h3>} >
      <Countries loadCountries={loadCountries}></Countries>
    </Suspense>
    </>
  )
}

export default App
