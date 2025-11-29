import Chip from '@mui/material/Chip';

export const CategoryTag = ({ category }: { category: string }) => {
  return (
    <Chip
      label={category}
      size="small"
      sx={{
        width: 'max-content',
        fontSize: '0.6rem',
        fontWeight: 500,
        textTransform: 'capitalize',
      }}
    />
  );
};
