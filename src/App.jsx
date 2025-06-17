import NewsLatter from './Component/body/newsLatter/NewsLatter'
import Players from './Component/body/players/Players'
import Footer from './Component/footer/footer'
import Banner from './Component/header/banner/Banner'
import Navbar from './Component/header/navbar/Navbar'

function App() {

  return (
    <>
      <div className="container max-w-7xl px-5 mx-auto">
        <Navbar />
        <Banner />
        <Players />
        <NewsLatter className="" />
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  )
}

export default App
