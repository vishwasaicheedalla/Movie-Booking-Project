import { useEffect, useState } from 'react'
import { dummyShowsData } from '../../assets/assets';
import Loading from '../../components/Loading';
import Title from '../../components/admin/Title';
import { dateFormat } from '../../lib/dateFormat';
// import { useAppContext } from '../../context/AppContext';

const ListShows = () => {

  const currency = import.meta.env.VITE_CURRENCY

  // const {axios, getToken, user} = useAppContext()

  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  // const getAllShows = async () =>{
  //     try {
  //         const { data } = await axios.get("/api/admin/all-shows", {
  //             headers: { Authorization: `Bearer ${await getToken()}` }
  //         });
  //         setShows(data.shows)
  //         setLoading(false);
  //     } catch (error) {
  //         console.error(error);
  //     }
  // }

  const getAllShows = () => {
    setShows([{
      movie : dummyShowsData[0],
      showDateTime : "2025-06-30T02:30:00.000Z",
      showPrice : 250,
      occupiedSeats : {
        A1 : "user_1",
        A2 : "user_2",
        A3 : "user_3"
      }
    }]);
    setLoading(false);
  };


  useEffect(() => {
    getAllShows();
  }, []);

  return !loading ? (
    <>
      <Title text1="List" text2="Shows" />

      <div className="max-w-4xl mt-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-md overflow-hidden text-nowrap">
          <thead>
            <tr className="bg-red-500/20 text-left text-white">
              <th className="p-2 font-medium pl-5">Movie Name</th>
              <th className="p-2 font-medium">Show Time</th>
              <th className="p-2 font-medium">Total Bookings</th>
              <th className="p-2 font-medium">Earnings</th>
            </tr>
          </thead>
          <tbody className="text-sm font-light">
            {shows.map((show, index) => (
              <tr key={index} className="border-b border-red-500/10 bg-red-500/5 even:bg-red-500/10">
                <td className="p-2 min-w-45 pl-5">{show.movie.title}</td>
                <td className="p-2">{dateFormat(show.showDateTime)}</td>
                <td className="p-2">{Object.keys(show.occupiedSeats).length}</td>
                <td className="p-2">{currency} {Object.keys(show.occupiedSeats).length * show.showPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  ) : <Loading />
}

export default ListShows