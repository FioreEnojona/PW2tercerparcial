// Import vendor dependencies
import {BrowserRouter, Routes, Route} from 'react-router';
// Import Local Components
import { DashBoard } from './pages/dashboard';
import { MyCollection } from './pages/mycollection';
import { Layout } from './pages/Layout';
import { Details } from './pages/Detail';
import { About } from './pages/aboutme';
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<DashBoard/>} />
        <Route path="/my-collection" element={<MyCollection/>} />
        <Route path="/about-me" element={<section>{<About/>}</section>} />
        <Route path="details/:pokeid" element={<Details />} />
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App