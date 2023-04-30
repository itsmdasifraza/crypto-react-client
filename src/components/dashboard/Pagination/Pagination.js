import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export default function PaginationControlled({handlePageChange, page}) {

  return (
    <Stack alignItems="center"  spacing={2}>
      <Pagination  color="primary"  sx={{button:{color: '#ffffff'}, div: {color:"#ffffff"}}} count={10} page={page} onChange={handlePageChange} />
        <br/>
    </Stack>
  );
}