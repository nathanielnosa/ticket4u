import logo from '../assets/image/flightlogo.png';
import {FaPlaneDeparture,FaPlaneArrival,FaGreaterThan,FaLessThan} from 'react-icons/fa';
import {BiCalendar} from 'react-icons/bi';
import {BsPersonFill,BsDot} from 'react-icons/bs';
import {ImDatabase} from 'react-icons/im';
import {AiOutlineArrowRight} from 'react-icons/ai';
import medium from '../components/medium';
import tickets from '../components/tickets';
const Home = () => {
  return (
    <section id="home__page" className="p-2 h-full bg-rightColor">
        <div className="cont h-full rounded-md mx-auto py-3 px-2 md:px-0">
            <div className="container flex flex-col md:flex-row mx-auto shadow-2xl drop-shadow-xl h-full rounded-md overflow-hidden">
              {/* left side details */}
              <div className="w-full md:w-4/12 bg-leftColor h-100 py-5">
                {/* logo */}
                <div className="mx-5">
                  <img src={logo} alt="flight logo" className=' w-28' />
                </div>
                {/* meidum */}
                <div className="flex w-full my-10">
                    {
                      medium.map(({id,icons,text,style})=>{
                        return(
                          <div key={id} className={'w-1/2 flex flex-col items-center justify-center gap-2  h-16 text-center'+' '+style}>
                            <span className=''>{icons}</span>
                            <p>{text}</p>
                          </div>
                        )
                      })
                    }
                </div>
                {/* form section */}
                <div className="mx-5">
                  <h3 className='text-offBlack text-2xl  text-center md:text-left'>Best flight deals with</h3>
                  <h3 className='text-textBlue text-3xl font-bold  text-center md:text-left'>Tickets4u</h3>
                  <form className="my-5">

                    <div className="form-group my-2">
                      <label htmlFor="" className='text-offBlack text-xs'>Depart from</label>
                      <div className="border-rightColor border-2 rounded-md flex bg-white p-2 py-3 items-center text-offBlack">
                        <FaPlaneDeparture size={25}/> <input type="text" placeholder='London - All Airports, England, UK' className='text-black w-full ml-4 border-none focus:outline-none' />
                      </div>
                    </div>
                    
                    <div className="form-group my-2">
                      <label htmlFor="" className='text-offBlack text-xs'>Arrive at</label>
                      <div className="border-rightColor border-2 rounded-md flex bg-white p-2 py-3 items-center text-offBlack">
                        <FaPlaneArrival size={25}/> <input type="text" placeholder='New York - All Airports, New York, USA' className='text-black w-full ml-4 border-none focus:outline-none' />
                      </div>
                    </div>

                    <div className="form-group my-2 mt-4 flex items-center gap-1">
                      <div className="w-48">
                        <label htmlFor="" className='text-offBlack text-xs'>Departure date</label>
                        <div className="border-rightColor border-2 rounded-md flex bg-white p-2 py-3 items-center text-offBlack">
                          <BiCalendar size={25}/> <input type="text" placeholder='11/11/2019' className='text-black w-full ml-4 border-none focus:outline-none' />
                        </div>
                      </div>
                      <div className="w-48">
                        <label htmlFor="" className='text-offBlack text-xs'>Return date</label>
                        <div className="border-rightColor border-2 rounded-md flex bg-white p-2 py-3 items-center text-offBlack">
                          <BiCalendar size={25}/> <input type="text" placeholder='31/11/2019' className='text-black w-full ml-4 border-none focus:outline-none' />
                        </div>
                      </div>
                    </div>

                    <div className="form-group my-2 mt-4 flex items-center gap-1">
                      <div className="w-56">
                        <label htmlFor="" className='text-offBlack text-xs'>Departure date</label>
                        <div className="border-rightColor border-2 rounded-md flex bg-white p-2 py-3 items-center text-offBlack">
                          <ImDatabase size={25}/> <input type="number" placeholder='Economy' className='text-black w-full ml-4 border-none focus:outline-none' />
                        </div>
                      </div>
                      <div className="w-40">
                        <label htmlFor="" className='text-offBlack text-xs'>Return date</label>
                        <div className="border-rightColor border-2 rounded-md flex bg-white p-2 py-3 items-center text-offBlack">
                          <BsPersonFill size={25}/> <input type="number" placeholder='2' className='text-black w-full ml-4 border-none focus:outline-none' />
                        </div>
                      </div>
                    </div>

                    <div className="">
                      <button className="bg-btnColor border w-full p-3 mt-4 rounded-md text-white">FIND FLIGHT</button>
                    </div>

                  </form>
                </div>
              </div>

              {/* right side details */}
              <div className="w-full border-l-2 border-splitBorder md:w-4/6 bg-rightColor h-100 py-5 px-6">
                {/* search section */}
                <div className=" flex flex-col md:flex-row justify-between">
                  <div className="">
                    <h3 className="text-offBlack text-2xl md:text-3xl">Search results</h3>
                    <p className='text-offBlack font-light text-xs md:text-base'> we found 15 results</p>
                  </div>

                  <div className="flex gap-2 mt-3 md:mt-0">
                    <button className="text-xs px-3 md:px-8 h-10 bg-white rounded-full text-offBlack text-center">CHEAPEST</button>
                    <button className="text-xs px-3 md:px-8 h-10 bg-white rounded-full text-offBlack text-center">SHORTEST</button>
                    <button className="text-xs px-3 md:px-8 h-10 bg-btnColor rounded-full text-white text-center">RECOMMENDED</button>
                  </div>

                </div>
                
                <h3 className="text-offBlack text-base md:text-3xl my-6">London <AiOutlineArrowRight className='mx-4 inline'/> New York </h3>
                    {/* tickets section  */}
                <div className="cards">
                  {
                    tickets.map(({id,src,ddate,dtime,stop,stoptime,adate,atime,price,style,sstyle})=>(
                      <div key={id} className={"bg-white h-28 md:h-24 p-1 md:px-5 flex rounded-xl items-center gap-1 md:gap-24 mb-3"+""+style}>
                      <div className="image">
                        <img src={src} className='w-24' />
                      </div>
                      <div className="time flex gap-1 items-center">
                        <div className="detail">
                          <p className="text-sm text-off-Black">Depart</p>
                          <p className="text-xs md:text-base">{ddate}</p>
                          <p className="font-bold text-xs md:text-base">{dtime}</p>
                        </div>
                        <div className="hidden md:flex text-offBlack"><BsDot/><BsDot/><BsDot/></div>
                        <div className="text-center">
                          <span className={sstyle?"bg-red-400 text-xs px-3 md:px-6 py-o md:py-2 rounded-full text-white":"bg-offBlack text-xs text-white px-3 md:px-6 py-o md:py-2 rounded-full"}>{stop}  Stops</span>
                          <p className='text-offBlack -mb-6 mt-0 md:mt-2 text-xs'>{stoptime}</p>
                        </div>
                        <div className="hidden md:flex text-offBlack"><BsDot/><BsDot/><BsDot/></div>
                        <div className="detail">
                          <p className="text-sm text-off-Black">arrive</p>
                          <p className="text-xs md:text-base">{adate}</p>
                          <p className="font-bold text-xs md:text-base">{atime}</p>
                        </div>
                      </div>

                      <div className="price">
                      <p className="text-sm text-off-Black">Price</p>
                      <h3 className="font-bold text-sm md:text-3xl md:mt-2">$ {price}</h3>
                      </div>

                  </div>
                    ))
                  }
                </div>

                <div className="pagination text-center flex gap-2 md:text-left">
                  <button className="bg-leftColor border w-8 h-8 rounded-md text-offBlack"><FaLessThan className='text-center inline' size={12}/></button>
                  <button className="bg-btnColor border w-8 h-8 rounded-md text-white">1</button>
                  <button className="bg-white border w-8 h-8 rounded-md text-offBlack">2</button>
                  <button className="bg-white border w-8 h-8 rounded-md text-offBlack">3</button>
                  <button className="bg-leftColor border w-8 h-8 rounded-md text-offBlack"><FaGreaterThan className='text-center inline' size={12}/></button>
                </div>

              </div>
            </div>
        </div>
    </section>
  )
}

export default Home