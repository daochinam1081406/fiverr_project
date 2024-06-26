import React, { useEffect } from "react";
import { DatePicker, Form, Input, Select, Upload, Button } from "antd";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { editJobTypeAction } from "../../../../redux/actions/LoaiCongViecAction";

const formItemLayout = {
  labelCol: { xs: { span: 10 }, sm: { span: 9 } },
  wrapperCol: { xs: { span: 10 }, sm: { span: 8 } },
};
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const { TextArea } = Input;
const { Option } = Select;

export default function FormEditJob({ setshowModalEdit }) {
  let userAdmin = JSON.parse(localStorage.getItem("userAdmin"));

  useEffect(() => {}, []);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: userAdmin?.id,
      tenLoaiCongViec: userAdmin?.tenLoaiCongViec,
    },
    onSubmit: (values) => {
      dispatch(editJobTypeAction(values));
    },
  });

  return (
    <Form {...formItemLayout} onFinish={formik.handleSubmit}>
      <Form.Item label="Job type name">
        <Input
          name="tenLoaiCongViec"
          value={formik.values.tenLoaiCongViec}
          onChange={formik.handleChange}
        />
      </Form.Item>

      <Form.Item className="text-right">
        <button
          type="button"
          onClick={() => setshowModalEdit(false)}
          className="btn btn-primary  mr-3"
        >
          Cancel
        </button>

        <button type="submit" className="btn btn-success" onClick={() => {}}>
          Update
        </button>
      </Form.Item>
    </Form>
  );
}
