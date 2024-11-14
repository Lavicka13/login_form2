import React, { useState } from 'react';
import {
  Anchor,
  TextInput,
  PasswordInput,
  Checkbox,
  Paper,
  Button,
  Title,
  Container,
  Text,
  Group,
  Notification,
  rem,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconCheck, IconX } from '@tabler/icons-react';


function LoginForm() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value ? null : 'Password is required'),
    },
  });

  const [notificationVisible, setNotificationVisible] = useState(false);
  const [isError, setIsError] = useState(false); // State für Fehlerstatus

  const handleSubmit = (values) => {
    // Hier kannst du Logik für das tatsächliche Login hinzufügen
    console.log(values);

    // Wenn alles gut geht, zeige die Erfolg-Benachrichtigung
    setIsError(false);
    setNotificationVisible(true);

    // Benachrichtigung nach 3 Sekunden automatisch ausblenden
    setTimeout(() => {
      setNotificationVisible(false);
    }, 3000);
  };

  return (
    <Container size={420} my={40}>
      <Title align="center" mb="xs">Welcome Back</Title>
      <Text color="dimmed" size="sm" align="center" mt={5} mb="xl">
        Do not have an account yet?{" "}
        <Anchor href="#" size="sm" onClick={(event) => event.preventDefault()}>
          Create account
        </Anchor>
      </Text>

      {/* Benachrichtigung wird hier angezeigt */}
      {notificationVisible && (
        <Notification
          icon={isError ? <IconX style={{ width: rem(20), height: rem(20) }} /> : <IconCheck style={{ width: rem(20), height: rem(20) }} />}
          color={isError ? 'red' : 'teal'}
          title={isError ? 'Bummer!' : 'Login Successful!'}
          mt="md"
        >
          {isError ? 'Something went wrong' : 'You have successfully logged in.'}
        </Notification>
      )}

      <Paper withBorder shadow="md" radius="lg">
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              mt="lg"
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              key={form.key('email')}
              {...form.getInputProps('email')}
              required
              error={form.errors.email}
            />

            <PasswordInput
              mt="md"
              withAsterisk
              label="Password"
              placeholder="Your Password"
              key={form.key('password')}
              {...form.getInputProps('password')}
              required
              error={form.errors.password}
            />

            <Group position="apart" mt="xs">
              <Checkbox label="Remember me" />
              <Anchor
                onClick={(event) => event.preventDefault()}
                href="#"
                size="sm"
                style={{ marginLeft: 'auto' }}
              >
                Forgot password?
              </Anchor>
            </Group>

            <Button type="submit" fullWidth mt="xl" mb="xl">
              Sign in
            </Button>
          </form>
        </div>
      </Paper>
    </Container>
  );
}

export default LoginForm;
