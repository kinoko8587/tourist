import request from "./request";

// 取得所有觀光景點資料
export async function getScenicSpot(params) {
  return request(`/Tourism/ScenicSpot`, { ...params }).then((res) =>
    res.map((item) => {
      const { Class, ScenicSpotName, Picture, ...data } = item;
      return {
        ...data,
        Picture: Picture?.PictureUrl1,
        Name: ScenicSpotName,
      };
    })
  );
}

//取得指定[縣市]觀光景點資料
export async function getScenicSpotByCity(city, params) {
  return request(`/Tourism/ScenicSpot/${city}`, { ...params }).then((res) =>
    res
      .filter((x) => x.Picture?.PictureUrl1)
      .map((item) => {
        const { Picture, ScenicSpotName, ...data } = item;
        return { ...data, Picture: Picture?.PictureUrl1, Name: ScenicSpotName };
      })
  );
}

const initRestaurant = {
  // $select:
  //   "Name,Description,City,Phone,Address,Picture,OpenTime,Position,WebsiteUrl,Class",
  // $top: 30,
};

//取得所有觀光餐飲資料
export async function getRestaurant(params) {
  return request(`/Tourism/Restaurant`, {
    ...initRestaurant,
    ...params,
  }).then((res) =>
    res.map((item) => {
      const { RestaurantName, Picture, ...data } = item;
      return { ...data, Picture: Picture?.PictureUrl1, Name: RestaurantName };
    })
  );
}

//取得指定[縣市]觀光餐飲資料
export async function getRestaurantByCity(city, params) {
  return request(`/Tourism/Restaurant/${city}`, {
    ...initRestaurant,
    ...params,
  }).then((res) =>
    res.map((item) => {
      const { Picture, RestaurantName, ...data } = item;
      return { ...data, Picture: Picture?.PictureUrl1, Name: RestaurantName };
    })
  );
}

//取得所有觀光旅宿資料
export async function getHotel(params) {
  return request(`/Tourism/Hotel`, { ...params }).then((res) =>
    res.map((item) => {
      const { Picture, HotelName, ...data } = item;
      return { ...data, Picture: Picture?.PictureUrl1, Name: HotelName };
    })
  );
}

//取得指定[縣市]觀光旅宿資料
export async function getHotelByCity(city, params) {
  return request(`/Tourism/Hotel/${city}`, { ...params }).then((res) =>
    res.map((item) => {
      const { Picture, HotelName, ...data } = item;
      return { ...data, Picture: Picture?.PictureUrl1, Name: HotelName };
    })
  );
}

//取得所有觀光活動資料
export async function getActivity(params) {
  return request(`/Tourism/Activity`, { ...params }).then((res) =>
    res.map((item) => {
      const { ActivityName, Picture, ...data } = item;
      return { ...data, Picture: Picture?.PictureUrl1, Name: ActivityName };
    })
  );
}

//取得指定[縣市]觀光活動資料
export async function getActivityByCity(city, params) {
  return request(`/Tourism/Activity/${city}`, { ...params }).then((res) =>
    res.map((item) => {
      const { ActivityName, Picture, ...data } = item;
      return { ...data, Picture: Picture?.PictureUrl1, Name: ActivityName };
    })
  );
}
