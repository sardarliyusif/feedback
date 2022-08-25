import React , {useContext} from "react";
import { Card, Chip, Typography } from "../shared";
import categories from "../../data/categories.json";
import { Feedback } from "../../context/Feedback";

export const LeftFilter = () => {
    const { selectedCategories , handleSelectCategory} = useContext(Feedback)
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
          onClick={() => handleSelectCategory()}
        >
          All
        </Chip>
        {categories.map(({ label, value }, index) => (
          <Chip
            key={index}
            selected={selectedCategories.includes(value)}
            onClick={() => handleSelectCategory(value)}
          >
            {label}
          </Chip>
        ))}
      </Card>
    </div>
  );
};
