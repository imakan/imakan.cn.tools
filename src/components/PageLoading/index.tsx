import { Spin } from 'antd';
import React from 'react';

export const PageLoading = () => (
  <div style={{ paddingTop: 100, textAlign: 'center' }}>
    <Spin size="large" />
  </div>
);
