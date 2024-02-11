import React, { useEffect } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

import "./HeaderMenu.scss";

import { useSelector, useDispatch } from "react-redux";
import {
  layCongViecTheoChiTietLoaiAction,
  layMenuCongViecAction,
} from "../../../../../redux/actions/CongViecActions";

import { Link, useNavigate } from "react-router-dom";

export default function HeaderMenu() {
  const navigate = useNavigate();
  const { menuJob } = useSelector((state) => state.CongViecReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layMenuCongViecAction());
  }, []);

  const renderMenuJob = () => {
    return menuJob?.map((menu, index) => {
      return (
        <Menu.SubMenu
          title={menu.tenLoaiCongViec}
          key={index.id}
          onTitleClick={() => navigate(`${menu.id}`)}
        >
          {menu.dsNhomChiTietLoai?.map((item, index) => {
            return (
              <Menu.Item key={index.id}>
                <Link to={`/${menu.id}/${item.id}`}>{item.tenNhom}</Link>
              </Menu.Item>
            );
          })}
        </Menu.SubMenu>
      );
    });
  };

  return (
    <>
      <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
        {renderMenuJob()}
      </Menu>
    </>
  );
}
