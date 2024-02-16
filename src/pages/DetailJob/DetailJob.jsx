import React, { useEffect, useState } from "react";
import { Progress } from "antd";
import { Tabs, Form, Input } from "antd";

import "./DetailJob.scss";
import "./OrderJob/OrderJob.scss";
import OrderJob from "./OrderJob/OrderJob";
import { useDispatch, useSelector } from "react-redux";
import { layCongViecChiTietAction } from "../../redux/actions/CongViecActions";
import { useParams } from "react-router-dom";
import {
  layBinhLuanTheoCongViecAction,
  themBinhLuan,
} from "../../redux/actions/BinhLuanAction";

export default function DetailJob() {
  const { userLogin } = useSelector((state) => state.AuthReducers);
  const { listBinhLuan } = useSelector((state) => state.BinhLuanReducers);
  const { jobId } = useParams();
  const { detailJobs } = useSelector((state) => state.CongViecReducers);

  const dispatch = useDispatch();
  const dispatch1 = useDispatch();
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);

  const toggleDropdown1 = () => {
    setTimeout(() => {
      setIsOpen1(!isOpen1);
    }, 300);
  };

  const toggleDropdown2 = () => {
    setTimeout(() => {
      setIsOpen2(!isOpen2);
    }, 300);
  };

  const toggleDropdown3 = () => {
    setTimeout(() => {
      setIsOpen3(!isOpen3);
    }, 300);
  };

  const toggleDropdown4 = () => {
    setTimeout(() => {
      setIsOpen4(!isOpen4);
    }, 300);
  };
  const handleRatingChange = (value) => {
    setRating(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(themBinhLuan({ noiDung: content, saoBinhLuan: rating }));
    setContent("");
    setRating(0);
    console.log("comment");
  };
  useEffect(() => {
    dispatch1(layBinhLuanTheoCongViecAction(jobId));
  }, []);

  useEffect(() => {
    dispatch(layCongViecChiTietAction(jobId));
  }, []);

  return (
    <div className="DetailJob py-36">
      <div className="container">
        <div className="row">
          <div className="left col-8">
            <h2>{detailJobs?.congViec?.tenCongViec}</h2>
            <div className="user flex">
              <img
                style={{ heigth: "35px", width: "35px" }}
                src={
                  detailJobs?.avatar
                    ? detailJobs?.avatar
                    : "https://fastly.picsum.photos/id/719/200/300.jpg?hmac=ROd_JjwPBNsmDhuN2yXu9bdtg0T4Nyl1iYA0WDXYpxM"
                }
                alt=""
                className="rounded-full mr-2"
              />
              <span>{detailJobs?.tenNguoiTao} |</span>
              <div className="star text-warning ml-2">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span>({detailJobs?.congViec?.danhGia})</span>
              </div>
            </div>
            <img
              style={{ borderRadius: 5 }}
              src={detailJobs?.congViec?.hinhAnh}
              alt=""
              className="mt-3 w-full"
            />
          </div>
          <div className="right col-4 mt-3">
            <div className="tab">
              <Tabs
                size="large"
                defaultActiveKey="2"
                centered
                type="card"
                className="equal-width-tabs"
              >
                <Tabs.TabPane tab="Basic" key="1">
                  <OrderJob item={detailJobs} />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Standard" key="2">
                  <OrderJob item={detailJobs} />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Premium" key="3">
                  <OrderJob item={detailJobs} />
                </Tabs.TabPane>
              </Tabs>
            </div>
          </div>
          <div className="bottom col-8">
            <div className="about">
              <h4 className="my-4">About This Gig</h4>

              <p className="text-muted h6 mb-4" style={{ lineHeight: 1.5 }}>
                {detailJobs?.congViec?.moTa}
              </p>
              <p>{detailJobs?.congViec?.moTaNgan}</p>
            </div>
            <hr />
            <div className="about-seller mt-5">
              {userLogin.user ? (
                <>
                  <h4>About the Seller</h4>
                  <div className="flex">
                    <img
                      src={
                        detailJobs?.avatar
                          ? detailJobs?.avatar
                          : "https://fastly.picsum.photos/id/719/200/300.jpg?hmac=ROd_JjwPBNsmDhuN2yXu9bdtg0T4Nyl1iYA0WDXYpxM"
                      }
                      alt="..."
                      width={80}
                      height={50}
                      className="rounded-full mr-3"
                      style={{ height: "80px" }}
                    />
                    <div>
                      <span>{detailJobs?.tenNguoiTao}</span>
                      <div>{detailJobs?.tenChiTietLoai}</div>

                      <div className="star text-warning">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        (999+)
                      </div>
                      <button className="mt-3 rounded border border-gray-600 py-2 px-4">
                        Contact me
                      </button>
                    </div>
                  </div>
                </>
              ) : null}
            </div>

            <div className="FAQ mt-5">
              <h4>FAQ</h4>
              <ul className="mt-4 faq-dropdown">
                <li className={`dropdown-item ${isOpen1 ? "expanded" : ""}`}>
                  <div className="dropdown-header" onClick={toggleDropdown1}>
                    <span className="flex justify-between items-center text-muted h4">
                      Why choose Softriver?
                    </span>
                    <i
                      className={`fa-solid fa-chevron-up ${
                        isOpen1 ? "rotate" : ""
                      }`}
                    ></i>
                  </div>

                  <div className="dropdown-content text-muted h6">
                    <p>Voluptates amet earum velit nobis aliquam</p>
                  </div>
                </li>

                <li className={`dropdown-item ${isOpen2 ? "expanded" : ""}`}>
                  <div className="dropdown-header" onClick={toggleDropdown2}>
                    <span className="flex justify-between items-center text-muted h4">
                      What Package should I choose?
                    </span>
                    <i
                      className={`fa-solid fa-chevron-up ${
                        isOpen2 ? "rotate" : ""
                      }`}
                    ></i>
                  </div>
                  <div className="dropdown-content text-muted h6">
                    <p>Voluptates amet earum velit nobis aliquam</p>
                  </div>
                </li>
                <li className={`dropdown-item ${isOpen3 ? "expanded" : ""}`}>
                  <div className="dropdown-header" onClick={toggleDropdown3}>
                    <span className="flex justify-between items-center text-muted h4">
                      What is your Design Process?
                    </span>
                    <i
                      className={`fa-solid fa-chevron-up ${
                        isOpen3 ? "rotate" : ""
                      }`}
                    ></i>
                  </div>
                  <div className="dropdown-content text-muted h6">
                    <p className="full-width">
                      Voluptates amet earum velit nobis aliquam
                    </p>
                  </div>
                </li>
                <li className={`dropdown-item ${isOpen4 ? "expanded" : ""}`}>
                  <div className="dropdown-header" onClick={toggleDropdown4}>
                    <span className="flex justify-between items-center text-muted h4">
                      What does the Social Media Kit and Stationery Designs
                      include?
                    </span>
                    <i
                      className={`fa-solid fa-chevron-up ${
                        isOpen4 ? "rotate" : ""
                      }`}
                    ></i>
                  </div>
                  <div className="dropdown-content text-muted text-muted h6">
                    <p className="full-height">
                      Voluptates amet earum velit nobis aliquam
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="review">
              <div className="top flex justify-between items-center">
                <div className="left flex items-center">
                  <b>123 Review </b>
                  <div className="text-warning ml-3 mb-1">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star mr-3"></i>
                    <b className="text-xl">5</b>
                  </div>
                </div>
                <div className="right">
                  <span>
                    Sort by
                    <span className="options">
                      <select>
                        <option value="mostRecent">Most recent</option>
                        <option value="mostRelevant" selected>
                          Most relevant
                        </option>
                      </select>
                    </span>
                  </span>
                </div>
              </div>
              <div className="bottom flex">
                <div className="left mr-8">
                  <div className="rating">
                    <div className="rating-main" style={{ width: 400 }}>
                      <div className="flex items-center">
                        <span className="mr-4 text-blue-500 flex items-center">
                          5<span className="ml-2">Stars</span>
                        </span>
                        <Progress percent={100} size="small" />
                        <span className="text-blue-500">(999+)</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-4 text-blue-500 flex items-center">
                          4<span className="ml-2">Stars</span>
                        </span>
                        <Progress percent={70} size="small" />
                        <span className="text-blue-500">(456)</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-4 text-blue-500 flex items-center">
                          3<span className="ml-2">Stars</span>
                        </span>
                        <Progress percent={50} size="small" />
                        <span className="text-blue-500">(123)</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-4 text-blue-500 flex items-center">
                          2<span className="ml-2">Stars</span>
                        </span>
                        <Progress percent={30} size="small" />
                        <span className="text-blue-500">(123)</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-4 text-blue-500 flex items-center">
                          1<span className="ml-2">Stars</span>
                        </span>
                        <Progress percent={10} size="small" />
                        <span className="text-blue-500">(10)</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right flex flex-col">
                  <span>Rating Breakdown</span>
                  <ul>
                    <li className="flex">
                      Seller communication level
                      <span>
                        5<i class="fa-solid fa-star text-warning"></i>
                      </span>
                    </li>
                    <li>
                      Recommend to a friend
                      <span>
                        5<i class="fa-solid fa-star text-warning"></i>
                      </span>
                    </li>
                    <li>
                      Service as described
                      <span>
                        5<i class="fa-solid fa-star text-warning"></i>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-3">
                <h4>Filter</h4>
                <span>
                  Industry <b>All Industries</b>{" "}
                  <i class="fa-solid fa-chevron-down"></i>
                </span>
              </div>
              <hr />
            </div>

            <div className="comment">
              {listBinhLuan.map((comment) => (
                <div key={comment.id} className="info">
                  <div className="flex items-center mb-3">
                    <img
                      src={
                        comment.avatar
                          ? comment.avatar
                          : "https://fastly.picsum.photos/id/719/200/300.jpg?hmac=ROd_JjwPBNsmDhuN2yXu9bdtg0T4Nyl1iYA0WDXYpxM"
                      }
                      alt="..."
                      className="rounded-full mr-2 profile-img"
                    />
                    <span>{comment.tenNguoiBinhLuan}</span>

                    {[...Array(comment.saoBinhLuan)].map((_, index) => (
                      <i
                        key={index}
                        className="fa-solid fa-star text-warning ml-2"
                      ></i>
                    ))}
                  </div>
                  <span>{comment.noiDung}</span>
                  <div className="flex items-center mt-3"></div>
                  <hr />
                </div>
              ))}

              {userLogin?.user ? (
                <>
                  <img
                    src={
                      userLogin.user.avatar
                        ? userLogin.user.avatar
                        : "https://fastly.picsum.photos/id/719/200/300.jpg?hmac=ROd_JjwPBNsmDhuN2yXu9bdtg0T4Nyl1iYA0WDXYpxM"
                    }
                    alt="..."
                    className="rounded-full mr-2 profile-img"
                  />
                  <div className="flex items-center mt-3">
                    {[...Array(5)].map((_, index) => (
                      <i
                        key={index}
                        className={`fa-solid fa-star${
                          rating >= index + 1 ? " text-warning" : ""
                        } ml-2`}
                        onClick={() => handleRatingChange(index + 1)}
                        style={{
                          cursor: "pointer",
                        }}
                      ></i>
                    ))}
                  </div>
                  <div className="commet-bottom mt-5 flex">
                    <div></div>
                    <Form className="w-full" onSubmit={handleSubmit}>
                      <Form.Item name="content" className="mb-2 ">
                        <Input.TextArea
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                        />
                      </Form.Item>
                      <div>
                        <button className="btn btn-primary">Add Comment</button>
                      </div>
                    </Form>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
