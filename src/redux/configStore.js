import { applyMiddleware, combineReducers, compose, createStore } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from "redux-thunk";
import { AuthReducers } from "./reducers/AuthReducers";
import { CongViecReducers } from "./reducers/CongViecReducers";
import { NguoiDungReducers } from "./reducers/NguoiDungReducers";
import { ThueCongViecReducers } from "./reducers/ThueCongViecReducers";
import { BinhLuanReducers } from "./reducers/BinhLuanReducers";
import { LoaiCongViecReducers } from "./reducers/LoaiCongViecReducers";
import { DichVuReducers } from "./reducers/DichVuReducers";
const rootReducer = combineReducers({
  //state ứng dụng
  // CongViecReduers: CongViecReducers,
  CongViecReducers,
  AuthReducers,
  ThueCongViecReducers,
  NguoiDungReducers,
  BinhLuanReducers,
  LoaiCongViecReducers,
  DichVuReducers,
});

// const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null
const initialState = {};

const middleware = [thunk];
export const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
    //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  // composeWithDevTools(
  //     applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()

  // )
);
