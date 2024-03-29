import React, { useState } from "react";
import "./QuanLyNguoiDung.scss";
import {
  EditOutlined,
  SearchOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import { Button, Table } from "antd";
import { Input, Space } from "antd";
import { Modal } from "react-bootstrap";

import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteUserAction,
  getUserAction,
  searchUserAction,
} from "../../../redux/actions/NguoiDungActions";
import FormAddUser from "./FormAddUser";
import FormEdit from "./FormEdit/FormEdit";
const { Search } = Input;

export default function QuanLyNguoiDung() {
  const { user } = useSelector((state) => state.NguoiDungReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAction());
  }, []);
  const { Search } = Input;
  const [showModal, setshowModal] = useState(false);
  const [showModalEdit, setshowModalEdit] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const onSearch = (value) => {};
  const data = user;
  const columns = [
    {
      title: "Username",
      dataIndex: "name",
      key: "name",

      render: (text, user) => {
        return <Fragment key={text}>{user.name}</Fragment>;
      },
      width: "15%",
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text, user) => {
        return <Fragment>{user.email}</Fragment>;
      },
      width: "15%",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      render: (text, user) => {
        return <Fragment>{user.phone}</Fragment>;
      },
      width: "15%",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (text, user) => {
        return <Fragment>{user.role}</Fragment>;
      },
      width: "15%",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, user) => {
        return (
          <Fragment key={text}>
            <span key={1} className=" mr-2  text-2xl">
              <EditOutlined
                style={{ color: "blue" }}
                onClick={() => {
                  setshowModalEdit(true);
                  localStorage.setItem("userAdmin", JSON.stringify(user));
                }}
              />
            </span>
            <span
              style={{ cursor: "pointer" }}
              key={2}
              className="text-2xl"
              onClick={() => {
                dispatch(deleteUserAction(user.id));
              }}
            >
              <DeleteOutlined style={{ color: "red" }} />
            </span>
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
  ];

  function onChange(pagination, filters, sorter, extra) {}
  return (
    <div>
      <h1></h1>
      <Button className="mb-5" onClick={() => setshowModal(true)}>
        Create user
      </Button>
      <Search
        className="mb-5"
        placeholder="Input username ..."
        enterButton={<SearchOutlined style={{ color: "darkgreen" }} />}
        allowClear
        value={valueSearch}
        onChange={(e) => setValueSearch(e.target.value)}
        size="large"
        onSearch={onSearch}
      />

      <Table
        columns={columns}
        dataSource={data
          .filter(
            (user) =>
              user.name.includes(valueSearch.toLowerCase().trim()) ||
              user.email.includes(valueSearch.toLowerCase().trim())
          )
          .sort((a, b) => a.id - b.id)}
        rowKey={"name"}
        scroll={{ x: true, y: 400 }}
      />

      <Modal show={showModal} onHide={() => setshowModal(false)}>
        <Modal.Header style={{ justifyContent: "center" }}>
          <Modal.Title>
            <span className="text-center">Add new user</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormAddUser setshowModal={setshowModal} />
        </Modal.Body>
      </Modal>

      <Modal show={showModalEdit} onHide={() => setshowModalEdit(false)}>
        <Modal.Header style={{ justifyContent: "center" }}>
          <Modal.Title>
            <span className="text-center">Update user</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormEdit setshowModalEdit={setshowModalEdit} />
        </Modal.Body>
      </Modal>
    </div>
  );
}
