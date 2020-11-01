import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import UserInfo from './pages/userInfo';
import OrderList from './pages/orderlIst'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact component={UserInfo} path='/' />
        <Route exact component={OrderList} path='/orders' />
      </BrowserRouter>
    </div>
  )
}

export default App;
