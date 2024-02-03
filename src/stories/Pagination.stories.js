// Pagination.stories.js

import React from 'react';
import Pagination from "../Components/Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
};

const Template = (args) => <Pagination {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  currentPage: 1,
  totalPages: 5,
  onPageChange: (pageNumber) => {
    console.log(`Page changed to ${pageNumber}`);
    // Handle the page change in your parent component
  },
  mode:"Primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
  currentPage: 1,
  totalPages: 5,
  onPageChange: (pageNumber) => {
    console.log(`Page changed to ${pageNumber}`);
    // Handle the page change in your parent component
  },
  mode:"Secondary"
};

export const Previous = Template.bind({});
Previous.args = {
  currentPage: 1,
  totalPages: 5,
  onPageChange: (pageNumber) => {
    console.log(`Page changed to ${pageNumber}`);
    // Handle the page change in your parent component
  },
  mode:"Previous"
};
