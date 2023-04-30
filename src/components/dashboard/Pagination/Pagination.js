import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export default function PaginationControlled({updatePaginatedCoins, page}) {

  const handleChange = (event, value) => {
    updatePaginatedCoins(value);
  };

  

  return (
    <Stack alignItems="center"  spacing={2}>
      <Pagination  color="primary"  sx={{button:{color: '#ffffff'}, div: {color:"#ffffff"}}} count={10} page={page} onChange={handleChange} />
        <br/>
    </Stack>
  );
}