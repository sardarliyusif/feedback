import React, { useContext } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Card, Chip, Typography } from "../shared";
import categories from "../../data/categories.json";
import { selectedCategory } from '../../redux/actions/selectedCategories'

export const LeftFilter = () => {
  const dispatch = useDispatch();
  const selectedCategories = useSelector((state) => state.selectedCategories);
  return (
    <div>
      <Card
        mode="colored"
        justify="end"
        style={{
          height: "137px",
          flexDirection: "column",
        }}
      >
        <Typography.Title>Front end mentor</Typography.Title>
        <Typography>Something else</Typography>
      </Card>
      <Card
        mode="light"
        style={{
          flexWrap: "wrap",
          columnGap: "8px",
          rowGap: "14px",
        }}
      >
        <Chip
          selected={selectedCategories.length === 0}
          onClick={() => dispatch(selectedCategory())}
        >
          All
        </Chip>
        {categories.map(({ label, value }, index) => (
          <Chip
            key={index}
            selected={selectedCategories.includes(value)}
            onClick={() => dispatch(selectedCategory(value))}
          >
            {label}
          </Chip>
        ))}
      </Card>
    </div>
  );
};
