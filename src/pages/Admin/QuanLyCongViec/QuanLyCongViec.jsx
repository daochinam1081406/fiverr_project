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
import {
  deleteJobAction,
  layDSCongViecAction,
  postImageJobAction,
} from "../../../redux/actions/CongViecActions";
import FormAddJob from "./FormAddJob/FormAddJob";
import FormEditJob from "./FormEditJob/FormEditJob";
const { Search } = Input;

export default function QuanLyCongViec() {
  const { listJob } = useSelector((state) => state.CongViecReducers);
  const dispatch = useDispatch();
  const handleFileChange = (event, id) => {
    console.log("File is selected");
    const file = event.target.files[0];
    if (file) {
      console.log("huhu" + file + id);
      dispatch(postImageJobAction(file, id));
    } else {
      console.error("No file selected!");
    }
  };
  useEffect(() => {
    dispatch(layDSCongViecAction());
  }, []);
  const { Search } = Input;
  const [showModal, setshowModal] = useState(false);
  const [showModalEdit, setshowModalEdit] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const onSearch = (value) => {};
  const data = listJob
    .filter(
      (listJob) =>
        listJob.tenCongViec.includes(valueSearch.toLowerCase().trim()) ||
        listJob.moTaNgan.includes(valueSearch.toLowerCase().trim())
    )
    .sort((a, b) => a.id - b.id);
  const columns = [
    {
      title: "Job name",
      dataIndex: "tenCongViec",
      key: "tenCongViec",
      render: (text, listJob) => {
        return <Fragment key={text}>{listJob.tenCongViec}</Fragment>;
      },
      width: "15%",
    },
    {
      title: "Image",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (text, listJob) => {
        return (
          <Fragment key={text}>
            <img
              src={listJob.hinhAnh}
              alt={listJob.hinhAnh}
              width="100px"
              height="50px"
            />

            <input
              id="uploadAvatar"
              type="file"
              name="uploadAvatar"
              accept="image/png, image/jpeg, image/jpg"
              onChange={(event) => {
                handleFileChange(event, listJob.id);
              }}
            />
          </Fragment>
        );
      },
      width: "8%",
    },
    {
      title: "Description",
      dataIndex: "moTaNgan",
      key: "moTaNgan",
      render: (text, listJob) => {
        return <Fragment key={text}>{listJob.moTaNgan}</Fragment>;
      },
      width: "30%",
    },
    {
      title: "Price",
      dataIndex: "giaTien",
      key: "giaTien",
      render: (text, listJob) => {
        return <Fragment key={text}>{listJob.giaTien} $</Fragment>;
      },
      width: "6%",
    },
    {
      title: "Rating",
      dataIndex: "saoCongViec",
      key: "saoCongViec",
      render: (text, listJob) => {
        return <Fragment key={text}>{listJob.saoCongViec}</Fragment>;
      },
      width: "6%",
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, listJob) => {
        return (
          <Fragment>
            <span key={1} className=" mr-2  text-2xl">
              <EditOutlined
                style={{ color: "blue" }}
                onClick={() => {
                  setshowModalEdit(true);
                  localStorage.setItem("userAdmin", JSON.stringify(listJob));
                }}
              />
            </span>
            <span
              style={{ cursor: "pointer" }}
              key={2}
              className="text-2xl"
              onClick={() => {
                dispatch(deleteJobAction(listJob.id));
              }}
            >
              <DeleteOutlined style={{ color: "red" }} />
            </span>
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "10%",
    },
  ];

  function onChange(pagination, filters, sorter, extra) {}
  return (
    <div>
      <h5></h5>
      <Button className="mb-5" onClick={() => setshowModal(true)}>
        Create job
      </Button>
      <Search
        className="mb-5"
        placeholder="Input job ..."
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
        rowKey={"tenCongViec"}
        scroll={{ x: true, y: 400 }}
      />

      <Modal show={showModal} onHide={() => setshowModal(false)}>
        <Modal.Header style={{ justifyContent: "center" }}>
          <Modal.Title>
            <span className="text-center">Add new</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormAddJob setshowModal={setshowModal} />
        </Modal.Body>
      </Modal>

      <Modal show={showModalEdit} onHide={() => setshowModalEdit(false)}>
        <Modal.Header style={{ justifyContent: "center" }}>
          <Modal.Title>
            <span className="text-center">Update job</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormEditJob setshowModalEdit={setshowModalEdit} />
        </Modal.Body>
      </Modal>
    </div>
  );
}
