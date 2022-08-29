import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Card, Chip, Typography } from "../shared";
import categories from "../../data/categories.json";
import { selectedCategory } from '../../redux/actions/selectedCategories'
import { Link } from "react-router-dom";
import { StatusBar } from "../StatusBar";

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
      <Card style={{flexDirection: "column"}}>
        <div style={{display: 'flex' , justifyContent: 'space-between' , alignItems: 'center' , width: '100%'}}>
          <Typography color="purple" weight='bold'>Roadmap</Typography>
          <Link to='/roadmap'>View</Link>
        </div>
        <StatusBar/>
      </Card>
    </div>
  );
};
