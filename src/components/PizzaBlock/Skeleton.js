import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="139" cy="121" r="121" />
    <rect x="0" y="272" rx="15" ry="15" width="280" height="20" />
    <rect x="0" y="322" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="437" rx="10" ry="10" width="95" height="30" />
    <rect x="124" y="429" rx="20" ry="20" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
