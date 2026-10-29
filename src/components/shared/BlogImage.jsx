import React from 'react';

export default function BlogImage({ post, eager = false, sizes = '(max-width: 1240px) calc(100vw - 40px), 1200px' }) {
  return <img
    src={post.hero}
    srcSet={[640, 960, 1440].map(width => `${post.heroBase}-${width}.webp ${width}w`).join(', ')}
    sizes={sizes} width="1440" height="810" alt={post.heroAlt}
    loading={eager ? 'eager' : 'lazy'} fetchpriority={eager ? 'high' : 'auto'} decoding="async"
  />;
}
