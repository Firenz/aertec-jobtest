import * as React from 'react';

interface Props {
  title: string;
  youtubeId: string;
}

export const ResponsiveVideo: React.FC<Props> = ({ title, youtubeId }) => {
  return (
    <div
      className="video"
      style={{
        position: 'relative',
        paddingBottom: '56.25%' /* 16:9 */,
        paddingTop: 25,
        height: 0,
      }}
    >
      <iframe
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0,
        }}
        title={title}
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
