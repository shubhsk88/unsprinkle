import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source
            type="image/avif"
            srcSet={`${src} 1x,
              ${src.replace('.jpg', '@2x.avif')} 2x,
              ${src.replace('.jpg', '@3x.avif ')} 3x
              `}
          />
          <source
            type="image/jpeg"
            srcSet={`${src} 1x,
              ${src.replace('.jpg', '@2x.avif')} 2x,
              ${src.replace('.jpg', '@3x.avif')} 3x
              `}
          />
          <Image src={src} alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const Tags = styled.ul`
  text-overflow: ellipsis;

  overflow: hidden;
  padding: 8px 0;
  white-space: nowrap;

  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  display: inline;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  &:not(:last-of-type) {
    margin-right: 8px;
  }

  color: var(--color-gray-800);
`;

export default PhotoGridItem;
