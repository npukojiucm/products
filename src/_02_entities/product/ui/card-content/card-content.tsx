import React, { JSX } from 'react';
import Typography from '@mui/material/Typography';
import { highlightText } from '@/_01_shared/libs/highlight-text';
import { default as CardContentMUI } from '@mui/material/CardContent';

const styles = {
  list: {
    lineHeight: 1.3,
    minHeight: `calc(0.9rem * 1.3 * 5)`,
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 5,
    WebkitBoxOrient: 'vertical',
    color: 'text.secondary',
  },
  page: {
    lineHeight: 1.3,
    color: 'text.secondary',
  },
};

export const CardContent = ({
  description,
  query,
  children,
  variant = 'list',
}: {
  description: string;
  query?: string;
  children?: React.ReactNode;
  variant: 'list' | 'page';
}): JSX.Element => {
  return (
    <CardContentMUI sx={{ padding: 0 }}>
      {children}

      <Typography title={description} variant="body2" sx={styles[variant]}>
        {query ? highlightText(description, query) : description}
      </Typography>
    </CardContentMUI>
  );
};
