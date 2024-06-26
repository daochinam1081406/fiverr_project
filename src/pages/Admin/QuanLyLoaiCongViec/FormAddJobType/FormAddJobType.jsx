import React from "react";
import { DatePicker, Form, Input, Select, Upload, Button } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addJobTypeAction } from "../../../../redux/actions/LoaiCongViecAction";

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
      tenLoaiCongViec: "",
    },
    onSubmit: (values) => {
      dispatch(addJobTypeAction(values));
    },
  });

  return (
    <Form {...formItemLayout} onFinish={formik.handleSubmit} form={form}>
      <Form.Item label="Tên loại công việc">
        <Input
          name="tenLoaiCongViec"
          value={formik.values.tenLoaiCongViec}
          onChange={formik.handleChange}
        />
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
