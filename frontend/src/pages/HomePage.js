import React, { useEffect, useState } from "react";
import AppLayout from "../components/Layout";
import axios from "axios";
import { Col, Row } from "antd";
import ItemsList from "../components/ItemsList";
import { HIDE_LOADING, SHOW_LOADING } from "../redux/constants";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const [itemData, setItemData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const getItemsData = async () => {
      try {
        dispatch({
          type: SHOW_LOADING,
        });
        const { data } = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/api/items/get-item`
        );
        setItemData(data);
        dispatch({
          type: HIDE_LOADING,
        });
      } catch (error) {
        dispatch({ type: HIDE_LOADING });
        console.log("Error", error);
      }
    };
    getItemsData();
  }, []);
  return (
    <AppLayout>
      <Row>
        {itemData.map((item) => (
          <Col xs={24} sm={12} md={12} lg={6}>
            <ItemsList item={item} />
          </Col>
        ))}
      </Row>
    </AppLayout>
  );
};

export default HomePage;
