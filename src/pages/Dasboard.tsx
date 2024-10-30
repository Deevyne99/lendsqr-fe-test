import Navbar from '../components/navbar/Navbar'

const Dasboard = () => {
  return (
    <div>
      <Navbar />
      <div className='layout'>
        <div className='sidebar'>
          <h1>sidebar</h1>
        </div>
        <div>
          <h1>rest of the page</h1>
        </div>
      </div>
    </div>
  )
}

export default Dasboard
