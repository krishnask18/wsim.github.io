import React from 'react';
import styled from 'styled-components';

const ResponsiveText = styled.p`
  font-size: 16px;

  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const ResponsiveComponent = () => {
  return (
    <div>
      <ResponsiveText>
        This text size adjusts based on screen width.
      </ResponsiveText>
    </div>
  );
};

export default ResponsiveComponent;
