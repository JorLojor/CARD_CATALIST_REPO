import { Fragment, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PageList from './pages/PageList'
import AddItems from './component/AddItems'
import EditItems from './component/EditItems'

function App() {
    return (
        <>
            <Router>
                <Fragment>
                    <Routes>
                        <Route path="/" element={<PageList/>} />
                        <Route path="/add" element={<AddItems/>} />
                        <Route path="/edit/:id" element={<EditItems/>} />
                    </Routes>
                </Fragment>
            </Router>
        </>
    )
}

export default App
