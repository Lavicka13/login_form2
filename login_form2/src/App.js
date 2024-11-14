import React from 'react';
import { MantineProvider } from '@mantine/core';
import LoginForm from './login';
import '@mantine/core/styles.css';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div>
        <LoginForm />
      </div>
    </MantineProvider>
  );
}

export default App;