
//this one displays our frontend shit - the component it displays is Router, which in turn has
// within it the Header component, and Home (displayed as Outlet)

import './App.css';
import Router from './views/src/components/Router'

function App() {
  return (
    <>
      <Router />
    </>
  )
 
  }
;


export default App
