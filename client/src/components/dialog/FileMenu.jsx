import { Menu } from '@mui/material';
import React from 'react';

const FileMenu = ({ anchorEl }) => {
  return (
    <Menu
      // Open menu only if anchorEl is not null
      anchorEl={anchorEl}
    >
      <div
        style={{
          width: '10rem',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia obcaecati, nihil veritatis velit ab ea error iusto quo eligendi inventore?
      </div>
    </Menu>
  );
};

export default FileMenu;
