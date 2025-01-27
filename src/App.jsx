import { firebaseProvider } from "./context/FirebaseContext"
import Dashboard from "./components/Dashboard"

function App() {

  return (
    <firebaseProvider className='bg-black '>
      <div className="bg-blue-950 w-screen h-screen">
      <Dashboard/>
      </div>
    </firebaseProvider>
  )
}

export default App
