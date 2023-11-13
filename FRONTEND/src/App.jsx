import { Fragment, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PageList from './pages/UserProfilePage/PageList'
import AddItems from './components/ListPrivateItems/AddItems';
import EditItems from './components/ListPrivateItems/EditItems';
import './App.css'
import HomePage from './pages/homePage/FirstPage'
function App() {
    return (
        <>
            <Router>
                <Fragment>
                    <Routes>
                        <Route path="/" element={<PageList/>} />
                        <Route path="/add" element={<AddItems/>} />
                        <Route path="/edit/:id" element={<EditItems/>} />
                        <Route path="/home" element={<HomePage/>} />
                    </Routes>
                </Fragment>
            </Router>
        </>
    )
}

export default App
