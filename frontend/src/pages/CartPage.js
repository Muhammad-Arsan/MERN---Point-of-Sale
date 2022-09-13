import React from "react";
import AppLayout from "../components/Layout";

import {
  DeleteOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";
import {
  INCREMENT_PRODUCT_QUNATITY,
  DELETE_FROM_CART,
} from "../redux/constants";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.rootReducer);

  const handleIncrementQunatity = (record) => {
    dispatch({
      type: INCREMENT_PRODUCT_QUNATITY,
      payload: { ...record, quantity: record.quantity + 1 },
    });
  };
  const handleDecrementQuantity = (record) => {
    if (record.quantity !== 1) {
      dispatch({
        type: INCREMENT_PRODUCT_QUNATITY,
        payload: { ...record, quantity: record.quantity - 1 },
      });
    }
  };

  console.log("first", cartItems);

  const columns = [
    { title: "Name", dataIndex: "name" },
    {
      title: "Image",
      dataIndex: "image",
      render: (image, record) => (
        <img src={image} alt={record.name} height="60" width="60" />
      ),
    },
    { title: "Price", dataIndex: "price" },
    {
      title: "Quantity",
      dataIndex: "_id",
      render: (id, record) => (
        <div>
          <PlusCircleOutlined
            className="mx-3"
            style={{ cursor: "pointer" }}
            onClick={() => handleIncrementQunatity(record)}
          />
          <b>{record.quantity}</b>
          <MinusCircleOutlined
            onClick={() => handleDecrementQuantity(record)}
            className="mx-3 "
            style={{ cursor: "pointer" }}
          />
        </div>
      ),
    },
    {
      title: "Actions",
      dataIndex: "_id",
      render: (id, record) => (
        <DeleteOutlined
          onClick={() =>
            dispatch({
              type: DELETE_FROM_CART,
              payload: record,
            })
          }
        />
      ),
    },
  ];
  return (
    <AppLayout>
      <h2>Cart Page</h2>
      <Table columns={columns} dataSource={cartItems} bordered />
    </AppLayout>
  );
};

export default CartPage;
