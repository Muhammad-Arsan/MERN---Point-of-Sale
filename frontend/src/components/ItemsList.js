import React from "react";

import { Button, Card } from "antd";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../redux/constants";
const ItemsList = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch({
      type: ADD_TO_CART,
      payload: { ...item, qunatity: 1 },
    });
  };
  const { Meta } = Card;
  return (
    <div>
      {" "}
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img alt={item.name} src={item.image} style={{ height: " 250px" }} />
        }
      >
        <Meta title={item.name} />
        <div className="item-button ">
          <Button onClick={() => handleAddToCart()}>Add to Cart</Button>
        </div>
      </Card>
    </div>
  );
};

export default ItemsList;
