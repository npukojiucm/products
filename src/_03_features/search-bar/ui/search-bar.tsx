'use client';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useAppDispatch, useAppSelector } from '@/_01_shared/store/hooks';
import { setQuery, toggleShowFavorites } from '../model/search.slice';

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const query = useAppSelector((s) => s.search.query);
  const showFavorites = useAppSelector((s) => s.search.showFavorites);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <TextField
        label="Search..."
        variant="outlined"
        value={query}
        onChange={(e) => dispatch(setQuery(e.target.value))}
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={showFavorites}
            onChange={() => dispatch(toggleShowFavorites())}
            color="error"
          />
        }
        label="Show favorite products only"
      />
    </Box>
  );
};
