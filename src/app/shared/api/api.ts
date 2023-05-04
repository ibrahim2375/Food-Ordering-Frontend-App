import { environment } from "src/environments/environment";
// base api
const API = environment.api;
//food
export const FOODS_API = `${API}/api/foods`;
export const FOODS_BY_ID = `${API}/api/foods/`;
export const FOODS_BY_SEARCH = `${API}/api/foods/search/`;
export const FOOD_TAGS = `${API}/api/foods/tags`;
export const FOODS_BY_TAG = `${API}/api/foods/tag/`;
export const FOODS_MOST_VIEWS = `${API}/api/foods/views/most`;
export const FOODS_LATEST = `${API}/api/foods/latest/food`;
// users
export const USER_LOGIN = `${API}/api/users/login`;
export const USER_REGISTER= `${API}/api/users/register`;
//orders
export const ORDER_CREATE= `${API}/api/orders/create`;
//image src
export const IMAGE_SRC = `${API}/assets/`