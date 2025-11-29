import { JSX } from 'react';

export function highlightText(text: string, query: string): JSX.Element {
  if (!query) return <>{text}</>;

  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();

  const index = lowerText.indexOf(lowerQuery);

  if (index === -1) return <>{text}</>;

  const before = text.slice(0, index);
  const match = text.slice(index, index + query.length);
  const after = text.slice(index + query.length);

  return (
    <>
      {before}
      <mark style={{ background: '#ffe58a', padding: '0 2px' }}>{match}</mark>
      {after}
    </>
  );
}
