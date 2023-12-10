import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App2';
import reportWebVitals from './reportWebVitals';
import{BrowserRouter,Route, Routes} from 'react-router-dom';
import MostPointsScoredByTeamTable from './components/pages/MostPointsScoredByTeamTable';
import MostPointsScoredTable from './components/pages/MostPointsScoredTable';
import MostPointsScoredByTimePlayedTable from './components/pages/MostPointsScoredByTimePlayedTable';
import DataTable from './components/pages/DataTable';

const root = ReactDOM.createRoot(document.getElementById('root'));

// /**From the new version of react router */
// const router = createBrowserRouter([
//   {
//   path:"/",
//   element:<App/>,
//   },
//   {
//     path:"/test",
//     element:<TestPage/>
//   },
// ]);

// root.render(<RouterProvider router={router}/>);

/**Old school, still working */
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="/overall-table" element={<DataTable/>}/>
        <Route path="/team-table" element={<MostPointsScoredByTeamTable/>}/>
        <Route path="/points-table" element={<MostPointsScoredTable/>}/>
        <Route path="/time-table" element={<MostPointsScoredByTimePlayedTable/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
