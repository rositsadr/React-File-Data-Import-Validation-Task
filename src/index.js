import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{createBrowserRouter,RouterProvider,BrowserRouter,Route, Routes} from 'react-router-dom';
import MostPointsScoredByTeamTable from './components/pages/MostPointsScoredByTeamTable';
import MostPointsScoredTable from './components/pages/MostPointsScoredTable';
import MostPointsScoredByTimePlayedTable from './components/pages/MostPointsScoredByTimePlayedTable';
import DataTable from './components/pages/DataTable';
import MostPointsScoredByPlayerInAllGamesTable from './components/pages/MostPointsScoredByPlayerInAllGamesTable';
import BestTeamPlayerTable from './components/pages/BestTeamPlayerTable';

const root = ReactDOM.createRoot(document.getElementById('root'));

// /**From the new version of react router */
// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>,
  //     path:"/overall-table",
  //     element:<DataTable/>
  //   },
  //   {
  //     path:"/team-table",
  //     element:<MostPointsScoredByTeamTable/>
  //   },
  //   {
  //     path:"/points-table",
  //     element:<MostPointsScoredTable/>
  //   },
  //   {
  //     path:"/time-table",
  //     element:<MostPointsScoredByTimePlayedTable/>
  //   },
//   },
//   
// ]);
// root.render(<RouterProvider router={router}/>);

/**Old school, still working */
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="/overall-table" element={<DataTable/>}/>
        <Route path="/team-table" element={<MostPointsScoredByTeamTable/>}/>
        <Route path="/players-table" element={<MostPointsScoredByPlayerInAllGamesTable/>}/>
        <Route path="/points-table" element={<MostPointsScoredTable/>}/>
        <Route path="/time-table" element={<MostPointsScoredByTimePlayedTable/>}/>
        <Route path="/team-player-table" element={<BestTeamPlayerTable/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
