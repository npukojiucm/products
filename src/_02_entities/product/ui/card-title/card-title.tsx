import { JSX } from 'react';
import Typography from '@mui/material/Typography';
import { highlightText } from '@/_01_shared/libs/highlight-text';

const styles = {
  list: {
    lineHeight: 1.3,
    minHeight: `calc(1.5rem * 1.3 * 2)`,
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
  },
  page: {
    lineHeight: 1.3,
    overflow: 'hidden',
  },
};

export const CardTitle = ({
  title,
  query,
  variant = 'list',
}: {
  title: string;
  query?: string;
  variant: 'list' | 'page';
}): JSX.Element => {
  return (
    <Typography gutterBottom variant="h5" component="div" sx={styles[variant]}>
      {query ? highlightText(title, query) : title}
    </Typography>
  );
};
