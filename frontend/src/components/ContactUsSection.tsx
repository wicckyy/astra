import { Container, Title, TextInput, Textarea, Button, Box, Space } from '@mantine/core';
import { useForm } from '@mantine/form';
import React from 'react';

const ContactUsSection: React.FC = () => {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: {
      name: (value) => (value.trim().length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      message: (value) => (value.trim().length === 0 ? 'Message cannot be empty' : null),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log('Form values:', values);
    // Handle form submission logic here (e.g., send data to a server)
    alert(`Thank you, ${values.name}! Your message has been submitted.`);
    form.reset();
  };

  return (
    <Container size="md" py="xl">
      <Title order={2} align="center" mb="xl">
        Contact Us
      </Title>
      <Box component="form" onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Name"
          placeholder="Your Name"
          required
          mb="md"
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Email"
          placeholder="your@email.com"
          required
          mb="md"
          {...form.getInputProps('email')}
        />
        <Textarea
          label="Message"
          placeholder="Your message"
          required
          minRows={4}
          mb="xl"
          {...form.getInputProps('message')}
        />
        <Button type="submit" fullWidth>
          Send Message
        </Button>
      </Box>
      <Space h="xl" />
    </Container>
  );
};

export default ContactUsSection;
