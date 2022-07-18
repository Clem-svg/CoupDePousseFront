import { useState, useEffect } from "react";
import axios from "./axios";

const GARDEN_API_URL = "/api/v1/gardens";

const [errorMessage, setErrorMessage] = useState('');
const [allGardens, setAllAllGardens] = useState([]);
const [displayedAllGardens, setDisplayedAllGardens] = useState([]);
const [searchInput, setSearchInput] = useState('');
const [isLoading, setIsLoading] = useState(false);

export async function getAllGardens() {
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

useEffect(() => {
  // Some synchronous code.

  (async () => {
      await getAllGardens();
  })();

  return () => {
      // Component unmount code.
  };
}, []);

// useEffect(() => {
//     // Create an scoped async function in the hook
//     async function anyNameFunction() {
//       await getAllGardens();
//     }
//     // Execute the created function directly
//     anyNameFunction();
//   };
//   }, []);


// useEffect(async () => {
//   setIsLoading(true);
//   if (errorMessage !== '') {
//     setErrorMessage('');
//   }

//   const result = await getAllGardens();
//   setIsLoading(false);

//   if (result.error) {
//     setErrorMessage(result.error.message);
//     return;
//   }

//   setAllGardens(result);
// }, []);