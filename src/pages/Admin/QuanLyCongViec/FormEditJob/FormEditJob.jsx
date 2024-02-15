import React, { useEffect } from "react";
import { DatePicker, Form, Input, Select, Upload, Button } from "antd";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { editJobAction } from "../../../../redux/actions/CongViecActions";

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
      tenCongViec: userAdmin?.tenCongViec,
      danhGia: userAdmin?.danhGia,
      giaTien: userAdmin?.giaTien,
      nguoiTao: userAdmin?.nguoiTao,
      hinhAnh: userAdmin?.hinhAnh,
      moTa: userAdmin?.moTa,
      maChiTietLoaiCongViec: userAdmin?.maChiTietLoaiCongViec,
      moTaNgan: userAdmin?.moTaNgan,
      saoCongViec: userAdmin?.saoCongViec,
    },
    onSubmit: (values) => {
      dispatch(editJobAction(values));
    },
  });
  const handleChangeRate = (saoCongViec) => {
    formik.setFieldValue("saoCongViec", saoCongViec);
  };

  return (
    <Form {...formItemLayout} onFinish={formik.handleSubmit}>
      <Form.Item label="Job name">
        <Input
          name="tenCongViec"
          value={formik.values.tenCongViec}
          onChange={formik.handleChange}
        />
      </Form.Item>

      <Form.Item label="Description">
        <TextArea
          rows={4}
          name="moTaNgan"
          value={formik.values.moTaNgan}
          onChange={formik.handleChange}
        />
      </Form.Item>
      <Form.Item label="Price">
        <Input
          style={{ width: "30%" }}
          name="giaTien"
          value={formik.values.giaTien}
          onChange={formik.handleChange}
        />
      </Form.Item>
      <Form.Item label="Rating">
        <Select
          name="saoCongViec"
          placeholder="Input rating"
          style={{ width: "30%" }}
          value={formik.values.saoCongViec}
          onChange={handleChangeRate}
        >
          <Option value={1}>1</Option>
          <Option value={2}>2</Option>
          <Option value={3}>3</Option>
          <Option value={4}>4</Option>
          <Option value={5}>5</Option>
        </Select>
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
