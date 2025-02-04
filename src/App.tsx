import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container} from 'react-bootstrap';
import Navbar from './components/navbar.tsx'
import Gridsection from "./components/gridsection.tsx";
import CardSection from "./components/cardSection.tsx";
function App() {

  return (
    <>
      <div>
          <Navbar></Navbar>
      </div>
        <Container>
            <header className="App-header">
                <p>Exodus Music Ministries</p>
            </header>
            <p className="read-the-docs">
                Exodus Ministries is a non-profit organization that provides music, art.
            </p>
            <Button variant="primary">Learn More</Button>
            <Gridsection></Gridsection>
            <CardSection></CardSection>
        </Container>
    </>
  )
}

export default App
