import { useSelector } from "react-redux";
import { RootState } from "../store";
import axios from "./axios";

export default interface GardenInterface {
  garden: {
    id: string;
    city: string;
    country: string;
    created_at: string;
    description: string;
    floor_type: string;
    image_url: string;
    is_available: boolean;
    latitude: string;
    longitude: string;
    orientation: string;
    parking: boolean;
    street_name: string;
    street_number: string;
    surface: string;
    title: string;
    tools_available: boolean;
    updated_at: string;
    user_id: string;
    zip_code: string;
  };
}



export async function getOneGarden(accessToken: any, id: string | undefined) {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    return axios
      .get(`/gardens/${id}`, config)
      .then((response: any) => {
        return response.data;
      })
      .catch((error: any) => {
        return error.response.data;
      });
  }

export async function getAllGardens() {
  const GARDEN_API_URL = "/gardens/";
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