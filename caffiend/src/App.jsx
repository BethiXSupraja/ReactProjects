import { useAuth } from "./Context/AuthContext";
import CoffeeForm from "./components/CoffeeForm";
import Hero from "./components/Hero";
import History from "./components/History";
import Layout from "./components/Layout";
import Stats from "./components/Stats";
import { coffeeConsumptionHistory } from "./utils";

function App() {
  const { globalUser, isLoading, globalData } = useAuth()
  const isAuthenticated = globalUser
  const isData = globalData && !!Object.keys(globalData||{}).length
  
  const aunthenticatedContent = (
    <>
    <Stats/>
    <History/>
    </>
  )
  return (


   <Layout>
      <Hero/>
      <CoffeeForm isAuthenticated={isAuthenticated}/>
      {(isAuthenticated && isLoading) &&(
        <p>Loading Data...</p>
      )}
      {(isAuthenticated && isData) && (aunthenticatedContent) }
    </Layout>
       
  )
}

export default App
