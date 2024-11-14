import React, {useState} from 'react';
import{Anchor,
    TextInput,
    PasswordInput,
    Checkbox,
    Paper,
    Button,
    Title,
    Container,
    Text,
    Group,
    
} from '@mantine/core';

import { useForm } from '@mantine/form';

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
        password: (value) => (value ? null : 'Password is required')
      },
    });
  
    return (

        <Container size={420} my={40}>
            <Title align ="center" mb="xs">Welcome Back</Title>
                <Text color="dimmed" size="sm" align="center" mt={5} mb= 'xl'>
                    Do not have an account yet?{" "}
                        <Anchor
                        href="#"
                        size="sm"
                        onClick={(event) => event.preventDefault()}
                        >
                        Create account
                    </Anchor>
                </Text>
            
        
      <Paper withBorder shadow="md" radius="lg">
        <div style ={{width: '100%', display: 'flex',
        justifyContent: 'center'}} >
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
                
                mt='lg'
                withAsterisk
                label="Email" 
                
                placeholder="your@email.com"
                key={form.key('email')}
                {...form.getInputProps('email')}
                required
                error={form.errors.email}
            />

            <PasswordInput
                mt='md'
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
            
                <Button type="submit" fullWidth mt="xl" mb="xl">Sign in</Button>
           
        </form>
        </div>
      </Paper>
      </Container>
    );
  }

  
export default LoginForm;








        


