import { useFormik } from "formik";
import React, { useEffect } from "react";
import { Form, Input, Select, DatePicker } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { dangNhapAction } from "../../redux/actions/AuthActions";
import "./Login.scss";
export default function Login(props) {
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state.AuthReducers);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      dispatch(dangNhapAction(values));
    },
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formItemLayout = {
    labelCol: { xs: { span: 10 }, sm: { span: 9 } },
    wrapperCol: { xs: { span: 10 }, sm: { span: 8 } },
  };
  return (
    <Form
      onFinish={formik.handleSubmit}
      {...formItemLayout}
      className="selection:bg-green-500 selection:text-white"
      style={{ marginTop: "100px" }}
    >
      <div className=" bg-green-100 flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="w-96 bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
            <div className="px-10 pt-2 pb-8 bg-white rounded-tr-4xl">
              <div className="mt-6">
                {}
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    {
                      required: true,
                      message: "Email không được bỏ trống !",
                    },
                    { type: "email", message: "Email không đúng định dạng !" },
                  ]}
                  hasFeedback
                >
                  <Input
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder="Nhập email"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Mật khẩu"
                  rules={[
                    {
                      required: true,
                      message: "Mật khẩu không được bỏ trống !",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password
                    name="password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder="Nhập mật khẩu"
                  />
                </Form.Item>
                <div className="mt-10">
                  <button
                    className="bg-green-500 text-gray-100 text-xl p-2 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-green-600
                          shadow-lg"
                  >
                    Đăng nhập
                  </button>
                </div>
              </div>
              <div className="text-center mt-3">
                Bạn chưa có tài khoản?{" "}
                <span className="link-primary">
                  <Link to="/register">Đăng ký ngay</Link>
                </span>
              </div>
              <a
                href="#"
                className="mt-4 block text-sm text-center font-medium text-rose-600 hover:underline focus:outline-none focus:ring-2 focus:ring-rose-500"
              >
                Quên mật khẩu ?{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}
