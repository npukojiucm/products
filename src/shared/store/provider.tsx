'use client';

import React, { useState } from 'react';
import { Provider } from 'react-redux';
import type { AppStore } from './index';
import { makeStore } from './index';

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [store] = useState<AppStore>(() => makeStore());

  return <Provider store={store}>{children}</Provider>;
};
