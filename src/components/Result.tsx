import { useRouter } from 'next/router';
import { bookData } from './Imgs';
import {useEffect , useState} from "react"
import Navbar from './Navbar';
const ResultPage = ()=>{
    const router = useRouter();
    const [data , setData] = useState([])

    useEffect(()=>{
        console.log(router);
        const searchTerm = router.query.term
        if(searchTerm !== undefined){
        const filteredBooks = bookData?.filter(
            (book) =>
              book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              book.isbnNumber.includes(searchTerm)
          );
          setData(filteredBooks)
          console.log(filteredBooks)
        }
    },[])

    return(
        <>
        <Navbar></Navbar>

        <div className="flex justify-center">
  <div className="flex flex-row gap-8">
    {data.length > 0 ? (
      data.map((item, idx) => (
        <div key={idx} className="flex mt-12 rounded-md bg-white shadow-md overflow-hidden">
          {/* First Column: Book Image */}
          <div className="mr-4">
            <img
              src={item.image.src}
              alt={item.title}
              className="w-80 h-80 object-cover rounded-md"
            />
          </div>

          {/* Second Column: Book Description */}
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
            <p className="text-gray-700 mb-2">Price: {item.price}</p>
            <p className="text-gray-700 mb-2">Quantity: {item.quantity}</p>
            <p className="text-gray-700 mb-2">ISBN: {item.isbnNumber}</p>
            <p className="text-gray-700 mb-2">Store Address: {item.storeAddress}</p>
          </div>
        </div>
      ))
    ) : (
      <div className="text-center m-10 text-gray-700">No Results Found</div>
    )}
  </div>
</div>

        </>
    )
}

export default ResultPage