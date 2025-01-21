import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container} from 'react-bootstrap';
import Navbar from './components/navbar.tsx'
function App() {

  return (
    <>
      <div>
          <Navbar></Navbar>
      </div>
        <Container>
      <h1>Exodus Ministries</h1>
      <p className="read-the-docs">
        Exodus Ministries is a non-profit organization that provides music, art.
      </p>
        <Button variant="primary">Learn More</Button>
        </Container>
    </>
  )
}

export default App
