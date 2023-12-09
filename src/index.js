import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App2';
import TestPage from './components/pages/TestPage';
// import PostPage from './components/pages/PostPage';
import reportWebVitals from './reportWebVitals';
import{BrowserRouter,Route, Routes} from 'react-router-dom';
import MostPointsScoredByTeamTable from './components/MostPointsScoredByTeamTable';
import MostPointsScoredTable from './components/MostPointsScoredTable';
import MostPointsScoredByTimePlayedTable from './components/MostPointsScoredByTimePlayedTable';
import DataTable from './components/DataTable';

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
        {/* <Route path="/test" element={<TestPage/>}/> */}
        {/* <Route path="/post" element={<PostPage/>}/> */}
        <Route path="/overall-table" element={<DataTable/>}/>
        <Route path="/team-table" element={<MostPointsScoredByTeamTable/>}/>
        <Route path="/points-table" element={<MostPointsScoredTable/>}/>
        <Route path="/time-table" element={<MostPointsScoredByTimePlayedTable/>}/>
      </Route>
      <Route path="/test-page" element={<TestPage/>}/>
    </Routes>
  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
