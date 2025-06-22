import NewsLatter from './Component/body/newsLatter/NewsLatter'
import Players from './Component/body/players/Players'
import Footer from './Component/footer/footer'
import Banner from './Component/header/banner/Banner'
import Navbar from './Component/header/navbar/Navbar'

function App() {

  return (
    <>
      <div className="container max-w-7xl mx-auto">
        <div className='md:px-5'>
          <Navbar />
        </div>
        <div className='px-5'>
        <Banner />
        <Players />
        <NewsLatter />
        </div>
      </div>
        <Footer />
    </>
  )
}

export default App
