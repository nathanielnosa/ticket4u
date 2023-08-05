import british from '../assets/image/airlines/british.png';
import wizz from '../assets/image/airlines/wizz.png';
import american from '../assets/image/airlines/american.png';

const tickets = [
    {id:1, src:british, ddate:'11/11/2019',dtime:'7:34 PM', stop: 0, stoptime:'8 hours 23 mins', adate:'12/11/2019',atime:'2:45 PM', price: 856, style:'shadow-lg drop-shadow-xl mb-3' },
    {id:2, src:wizz, ddate:'11/11/2019',dtime:'12:34 PM', stop: 0, stoptime:'8 hours 45 mins', adate:'12/11/2019',atime:'1:21 PM', price: 980,  style:'' },
    {id:3, src:british, ddate:'11/11/2019',dtime:'1:12 AM', stop: 1, stoptime:'12 hours 57 mins', adate:'12/11/2019',atime:'3:56 PM', price: 1012, style:'',sstyle:'bg-red-400' },
    {id:4, src:wizz, ddate:'11/11/2019',dtime:'6:21 PM', stop: 0, stoptime:'9 hours 43 mins', adate:'12/11/2019',atime:'8:45 AM', price: 908, style:''  },
    {id:5, src:american, ddate:'11/11/2019',dtime:'12:34 PM', stop: 0, stoptime:'8 hours 23 mins', adate:'12/11/2019',atime:'3:06 AM', price: 765, style:''  },
]

export default tickets