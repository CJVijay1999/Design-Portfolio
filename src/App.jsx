import Contact from "./component/Contact"
import Main from "./component/Main"
import Project from "./component/Project"
import Sidenav from "./component/Sidenav"
import Work from "./component/Work"

function App() {
  return (
    <>
      <div className="App" >
        <Sidenav />
        <Main />
        <Work />
        <Project />
        <Contact />
      </div>
    </>
  )
}

export default App
