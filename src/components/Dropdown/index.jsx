import React from "react";
import { sorting } from "../../data/sorting";
import { Typography } from "../shared";
import { Select } from "antd";

export const Dropdown = ({ sort, setSort }) => {
  const { Option } = Select;

  
  return (
    <div>
      <Typography  weight='small' size="small" style={{margin:'0 8px 0 40px'}}>
        Sort By:
      </Typography>
      
      <Select
        
        defaultValue="Sort by"
        style={{
          width: 160,
          background: "red",
        }}
        onChange={(value) => {
          setSort(value);
        }}
      >
        {sorting.map(({ label, value }, index) => (
          <Option key={index} value={value}>{label}</Option>
        ))}
      </Select>
    </div>
  );
};
