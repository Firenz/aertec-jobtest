import * as React from 'react';

interface Props {
  imgPath: string;
  alt: string;
}

export const ResponsiveImg: React.FC<Props> = ({ imgPath, alt }) => {
  return (
    <img
      style={{
        flex: 1,
        height: 'auto',
        width: '100%',
      }}
      src={imgPath}
      alt={alt}
    />
  );
};
