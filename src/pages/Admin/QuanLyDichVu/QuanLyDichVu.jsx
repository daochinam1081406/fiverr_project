import React, { useState } from "react";
import "../QuanLyNguoiDung/QuanLyNguoiDung.scss";
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
import { layDSDichVuAction } from "../../../redux/actions/DichVuAction";
// import FormAddUser from "./FormAddUser";
// import FormEdit from "./FormEdit/FormEdit";
const { Search } = Input;

export default function QuanLyDichVu() {
  const { listService } = useSelector((state) => state.DichVuReducers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDSDichVuAction());
  }, []);

  const { Search } = Input;
  const [showModal, setshowModal] = useState(false);
  const [showModalEdit, setshowModalEdit] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const onSearch = (value) => {};
  const data = listService;
  // "id": 4076,
  // "maCongViec": 4,
  // "maNguoiThue": 2591,
  // "ngayThue": "2023-08-25",
  // "hoanThanh": true
  const columns = [
    {
      title: "Service Id",
      dataIndex: "id",
      key: "id",

      render: (text, listService) => {
        return <Fragment key={text}>{listService.id}</Fragment>;
      },
      width: "15%",
    },

    {
      title: "Job id",
      dataIndex: "maCongViec",
      key: "maCongViec",
      render: (text, listService) => {
        return <Fragment>{listService.maCongViec}</Fragment>;
      },
      width: "15%",
    },
    {
      title: "Hirer id",
      dataIndex: "maNguoiThue",
      key: "maNguoiThue",
      render: (text, listService) => {
        return <Fragment>{listService.maNguoiThue}</Fragment>;
      },
      width: "15%",
    },
    {
      title: "Hirer date",
      dataIndex: "ngayThue",
      key: "ngayThue",
      render: (text, listService) => {
        return <Fragment>{listService.ngayThue}</Fragment>;
      },
      width: "15%",
    },
    {
      title: "Service status",
      dataIndex: "hoanThanh",
      key: "hoanThanh",
      render: (text, listService) => {
        return <Fragment>{listService.hoanThanh}</Fragment>;
      },
      width: "15%",
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, listService) => {
        return (
          <Fragment key={text}>
            <span key={1} className=" mr-2  text-2xl">
              <EditOutlined
                style={{ color: "blue" }}
                onClick={() => {
                  setshowModalEdit(true);
                  localStorage.setItem(
                    "userAdmin",
                    JSON.stringify(listService)
                  );
                }}
              />
            </span>
            <span
              style={{ cursor: "pointer" }}
              key={2}
              className="text-2xl"
              onClick={() => {
                //dispatch(deleteUserAction(user.id));
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
        Create service
      </Button>
      <Search
        className="mb-5"
        placeholder="Input job type ..."
        enterButton={<SearchOutlined style={{ color: "darkgreen" }} />}
        allowClear
        value={valueSearch}
        onChange={(e) => setValueSearch(e.target.value)}
        size="large"
        onSearch={onSearch}
      />

      <Table
        columns={columns}
        dataSource={data}
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
          {/* <FormAddUser setshowModal={setshowModal} /> */}
        </Modal.Body>
      </Modal>

      <Modal show={showModalEdit} onHide={() => setshowModalEdit(false)}>
        <Modal.Header style={{ justifyContent: "center" }}>
          <Modal.Title>
            <span className="text-center">Update user</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <FormEdit setshowModalEdit={setshowModalEdit} /> */}
        </Modal.Body>
      </Modal>
    </div>
  );
}
