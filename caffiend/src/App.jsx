import CoffeeForm from "./components/CoffeeForm";
import Hero from "./components/Hero";
import History from "./components/History";
import Layout from "./components/Layout";
import Stats from "./components/Stats";

function App() {
  const isAuthenticated = false
  const aunthenticatedContent = (
    <>
    <Stats/>
    <History/>
    </>
  )
  return (


   <Layout>
      <Hero/>
      <CoffeeForm />
      {isAuthenticated && (aunthenticatedContent) }
    </Layout>
       
  )
}

export default App
