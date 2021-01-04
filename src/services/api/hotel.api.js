import api from "@/utils/api";
import { API_URL } from "@/utils/api/constants";

export const getCities = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await api.get(`${API_URL.CITIES}`);
      if (resp) {
        resolve(resp);
      }
    } catch (err) {
      reject(err);
    }
  });
};

export const getRoomTypes = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await api.get(`${API_URL.ROOM_TYPES}`);
      if (resp) {
        resolve(resp);
      }
    } catch (err) {
      reject(err);
    }
  });
};

export const getHotels = (payload) => {
  const {
    cityId,
    guestCount,
    roomTypeIds,
    rating,
    pageSize,
    pageIndex,
    sort
  } = payload;
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await api.get(`${API_URL.HOTELS}`, {
        params: {
          CityId: cityId,
          GuestCount: guestCount,
          RoomTypeIds: roomTypeIds,
          Rating: rating,
          PageSize: pageSize,
          PageIndex: pageIndex,
          Sort: sort
        }
      });
      if (resp) {
        resolve(resp);
      }
    } catch (err) {
      reject(err);
    }
  });
};

export const getHotel = (hotelId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await api.get(`${API_URL.HOTEL}/${hotelId}`);
      if (resp) {
        resolve(resp);
      }
    } catch (err) {
      reject(err);
    }
  });
};
