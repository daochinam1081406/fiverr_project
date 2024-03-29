import React from "react";
import { DatePicker, Form, Input, Select, Upload, Button } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addJobAction } from "../../../../redux/actions/CongViecActions";

const formItemLayout = {
  labelCol: { xs: { span: 10 }, sm: { span: 9 } },
  wrapperCol: { xs: { span: 10 }, sm: { span: 8 } },
};

const { TextArea } = Input;
const { Option } = Select;

export default function FormAddJob({ setshowModal }) {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: 0,
      tenCongViec: "",
      danhGia: 0,
      giaTien: 0,
      nguoiTao: 0,
      hinhAnh: "",
      moTa: "",
      maChiTietLoaiCongViec: 0,
      moTaNgan: "",
      saoCongViec: 0,
    },
    onSubmit: (values) => {
      dispatch(addJobAction(values));
    },
  });
  const handleChangeRate = (saoCongViec) => {
    formik.setFieldValue("saoCongViec", saoCongViec);
  };

  return (
    <Form {...formItemLayout} onFinish={formik.handleSubmit} form={form}>
      <Form.Item label="Tên công việc">
        <Input
          name="tenCongViec"
          value={formik.values.tenCongViec}
          onChange={formik.handleChange}
        />
      </Form.Item>

      <Form.Item label="Mô tả ngắn">
        <TextArea
          rows={4}
          name="moTaNgan"
          value={formik.values.moTaNgan}
          onChange={formik.handleChange}
        />
      </Form.Item>
      <Form.Item label="Giá tiền">
        <Input
          style={{ width: "30%" }}
          name="giaTien"
          value={formik.values.giaTien}
          onChange={formik.handleChange}
        />
      </Form.Item>
      <Form.Item label="Số sao">
        <Select
          name="saoCongViec"
          placeholder="Chọn số sao"
          style={{ width: "30%" }}
          value={formik.values.saoCongViec}
          onChange={handleChangeRate}
        >
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
          <Option value="5">5</Option>
        </Select>
      </Form.Item>
      <Form.Item className="text-right">
        <button
          type="button"
          onClick={() => setshowModal(false)}
          className="btn btn-primary  mr-3"
        >
          Cancel
        </button>

        <button type="submit" className="btn btn-success" onClick={() => {}}>
          Thêm
        </button>
      </Form.Item>
    </Form>
  );
}
