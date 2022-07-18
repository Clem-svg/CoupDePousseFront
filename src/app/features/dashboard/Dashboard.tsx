import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { useState, useEffect } from "react";
import axios from "../api/axios";


function Dashboard() {
const GARDEN_API_URL = "/gardens.json";

const [errorMessage, setErrorMessage] = useState('');
const [allGardens, setAllAllGardens] = useState([]);
const [displayedAllGardens, setDisplayedAllGardens] = useState([]);
const [searchInput, setSearchInput] = useState('');
const [isLoading, setIsLoading] = useState(false);

async function getAllGardens() {
  return axios
    .get(GARDEN_API_URL)
    .then((response: any) => {
      console.log(response)
      return response.data;
    })
    .catch((error: any) => {
      return error.response.data;
    });

}



  const currentUser = useSelector((state: RootState) => state.session.currentUser)
  const accessToken = useSelector((state: RootState) => state.session.accessToken)
  const refreshToken = useSelector((state: RootState) => state.session.refreshToken)

  useEffect(() => {
    // Some synchronous code.
  
    (async () => {
        await getAllGardens();
    })();
  
    return () => {
        // Component unmount code.
    };
  }, []);

  return (
    <section>
      <h1>Dashboard</h1>
      <ul> 
        <li>Current User
          <ul>
            <li>Id: {currentUser?.id}</li>
            <li>Email: {currentUser?.email}</li>
            <li>Created At: {currentUser?.createdAt}</li>
          </ul>
        </li>
        <li>Access Token: {accessToken}</li>
        <li>Refresh Token: {refreshToken}</li>
      </ul>
    </section>
  )
}

export default Dashboard