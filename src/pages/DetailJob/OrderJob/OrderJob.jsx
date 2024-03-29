import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { ThongTinThueCongViec } from "../../../models/ThongTinThueCongViec";
import { layCongViecChiTietAction } from "../../../redux/actions/CongViecActions";
import { ThueCongViecActions } from "../../../redux/actions/ThueCongViecActions";
import { USER_LOGIN } from "../../../util/settings/config";
import "./OrderJob.scss";
export default function OrderJob(props, { currentTab }) {
  useEffect(() => {
    switch (currentTab) {
      case "1":
        console.log("Basic tab is selected");
        break;
      case "2":
        console.log("Standard tab is selected");
        break;
      case "3":
        console.log("Premium tab is selected");
        break;
      default:
        break;
    }
  }, [currentTab]);
  const { item } = props;

  const { thueCongViec } = useSelector((state) => state.ThueCongViecReducers);
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state.AuthReducers);

  useEffect(() => {
    dispatch(layCongViecChiTietAction(jobId));
  }, []);
  const { detailJob, jobId } = useParams();
  const { detailJobs } = useSelector((state) => state.CongViecReducers);
  const navigate = useNavigate();
  return (
    <div className="p-3">
      <div className="d-flex justify-content-between">
        <h5>{console.log(detailJobs)}Standard</h5>
        <p className="h5  text-black">{item.congViec?.giaTien}$</p>
      </div>
      <p className="disabled h6 my-4">{item.congViec?.tenCongViec}</p>
      <div className="timeJob mb-3">
        <i class="fa-regular fa-clock mx-2"></i>
        30 Day Delivery
        <i class="fa-solid fa-rotate mx-2"></i>
        Revlslons
      </div>
      <span>{item.congViec?.moTaNgan}</span>
      <div className="flex flex-col">
        {!localStorage.getItem(USER_LOGIN) ? (
          <>
            <button
              className="btn-lg btn btn-success btn-block my-4"
              onClick={() => navigate(`/login`)}
            >
              <span>Continue ({item?.congViec?.giaTien}$)</span>
            </button>

            <div role="button" className="h5 text-success text-center">
              Compare Package
            </div>
          </>
        ) : (
          <>
            <button
              className="btn-lg btn btn-success btn-block my-4"
              onClick={() => {
                const thongTinThueCongViec = new ThongTinThueCongViec();

                thongTinThueCongViec.maCongViec = detailJobs?.congViec?.id;
                thongTinThueCongViec.maNguoiThue = userLogin?.user?.id;
                thongTinThueCongViec.ngayThue = moment().format("DD/MM/YYYY");
                thongTinThueCongViec.hoanThanh = true;
                dispatch(ThueCongViecActions(thongTinThueCongViec));
              }}
            >
              <span>Continue ({item?.congViec?.giaTien}$)</span>
            </button>

            <div role="button" className="h5 text-success text-center">
              Compare Package
            </div>
          </>
        )}
      </div>
    </div>
  );
}
