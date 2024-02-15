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
import { layDSLoaiCongViecAction } from "../../../redux/actions/LoaiCongViecAction";
// import FormAddUser from "./FormAddUser";
// import FormEdit from "./FormEdit/FormEdit";
const { Search } = Input;

export default function QuanLyLoaiCongViec() {
  const { listTypeJob } = useSelector((state) => state.LoaiCongViecReducers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDSLoaiCongViecAction());
  }, []);

  const { Search } = Input;
  const [showModal, setshowModal] = useState(false);
  const [showModalEdit, setshowModalEdit] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const onSearch = (value) => {};
  const data = listTypeJob;

  const columns = [
    {
      title: "JobType Id",
      dataIndex: "id",
      key: "id",

      render: (text, listTypeJob) => {
        {
          console.log("sdsd" + listTypeJob);
        }
        return <Fragment key={text}>{listTypeJob.id}</Fragment>;
      },
      width: "15%",
    },

    {
      title: "Name",
      dataIndex: "tenLoaiCongViec",
      key: "tenLoaiCongViec",
      render: (text, listTypeJob) => {
        return <Fragment>{listTypeJob.tenLoaiCongViec}</Fragment>;
      },
      width: "15%",
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, listTypeJob) => {
        return (
          <Fragment key={text}>
            {/* <span key={1} className=" mr-2  text-2xl">
              <EditOutlined
                style={{ color: "blue" }}
                onClick={() => {
                  setshowModalEdit(true);
                  localStorage.setItem("userAdmin", JSON.stringify(user));
                }}
              />
            </span> */}
            {/* <span
              style={{ cursor: "pointer" }}
              key={2}
              className="text-2xl"
              onClick={() => {
                dispatch(deleteUserAction(user.id));
              }}
            >
              <DeleteOutlined style={{ color: "red" }} />
            </span> */}
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
        Create Job type
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
