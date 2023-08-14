import React from "react";
import Button from "@mui/material/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { Link } from "react-router-dom";

import { DataCustomer } from "../../constants";
import { viVNGrid } from "../../utils/locale/vi-VN";

const listButton = [
  { label: "Nhóm KH" },
  { label: "Trạng thái" },
  { label: "Ngày tạo" },
  { label: "Bộ lọc khác" },
];

const List = () => {
  const columns: GridColDef[] = [
    {
      field: "customerCode",
      headerName: "Mã khách hàng",
      width: 150,
      renderCell: (params) => {
        return (
          <div style={{ display: "flex", margin: "auto" }}>{params.value}</div>
        );
      },
    },
    {
      field: "customerName",
      headerName: "Tên khách hàng",
      width: 350,
      renderCell: (params) => {
        return <Link style={{ color: `#4361EE` }}>{params.value}</Link>;
      },
    },
    {
      field: "customerPhone",
      headerName: "Số điện thoại",
      width: 130,
      renderCell: (params) => {
        return (
          <div style={{ display: "flex", margin: "auto" }}>{params.value}</div>
        );
      },
    },
    {
      field: "type",
      headerName: "Nhóm khách hàng",
      width: 150,
      renderCell: (params) => {
        return (
          <div style={{ display: "flex", margin: "auto" }}>{params.value}</div>
        );
      },
    },
    {
      field: "debt",
      headerName: "Nợ hiện tại",
      sortable: false,
      width: 130,
      renderCell: (params) => {
        return (
          <div style={{ display: "flex", margin: "auto" }}>{params.value}</div>
        );
      },
    },
    {
      field: "total",
      headerName: "Tổng chi tiêu",
      sortable: false,
      width: 130,
      renderCell: (params) => {
        return (
          <div style={{ display: "flex", margin: "auto" }}>{params.value}</div>
        );
      },
    },
    {
      field: "numberOrder",
      headerName: "Số lượng đơn hàng",
      sortable: false,
      width: 150,
      renderCell: (params) => {
        return (
          <div style={{ display: "flex", margin: "auto" }}>{params.value}</div>
        );
      },
    },
    {
      field: "dateOrder",
      headerName: "Ngày tạo",
      width: 130,
      renderCell: (params) => {
        return (
          <div style={{ display: "flex", margin: "auto" }}>{params.value}</div>
        );
      },
    },
    {
      field: "status",
      headerName: "Trạng thái",
      width: 130,
      renderCell: (params) => {
        return (
          <div style={{ display: "flex", margin: "auto" }}>
            {params.value === 1 ? "Đang hoạt động" : "Ngưng hoạt động"}
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <Button
        sx={{ margin: "12px 10px" }}
        variant="contained"
        startIcon={<AddOutlinedIcon />}
      >
        Thêm khách hàng mới
      </Button>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <OutlinedInput
          id="outlined-adornment-weight"
          sx={{
            width: "600px",
            height: "36.5px !important",
            margin: "12px 10px",
          }}
          placeholder="Tìm kiếm theo mã khách hàng, tên khách hàng và số điện thoại"
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
        />
        <Box sx={{ display: "flex", gap: "10px", marginRight: "10px" }}>
          {listButton.map((item, index: number) => (
            <Button
              sx={{ height: "36.5px", color: "black", borderColor: "#E0E6ED" }}
              key={index}
              variant="outlined"
              endIcon={<KeyboardArrowDownOutlinedIcon />}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Box>
      <Box>
        <DataGrid
          rows={DataCustomer}
          columns={columns}
          localeText={viVNGrid}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </Box>
    </div>
  );
};

export default List;
