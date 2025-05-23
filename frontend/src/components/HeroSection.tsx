import { Container, Title, Text, Button, Box, Group } from '@mantine/core';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <Container size="lg" py="xl">
      <Group position="apart" align="center">
        {/* Text content on the left */}
        <Box sx={{ maxWidth: 600 }}>
          <Title order={1} mb="md">
            Power Your Future with Solar
          </Title>
          <Text size="lg" mb="xl">
            Harness the power of the sun to reduce your energy bills, increase your home's value, and contribute to a cleaner environment. Explore our solar solutions today!
          </Text>
          <Button size="lg">
            Get a Free Quote
          </Button>
        </Box>

        {/* Image placeholder on the right */}
        <Box
          sx={(theme) => ({
            width: '100%', // Make width responsive
            maxWidth: 400, // Max width for larger screens
            height: 300,
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[3],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          })}
        >
          <Text>Hero Image Placeholder</Text>
        </Box>
      </Group>
    </Container>
  );
};

export default HeroSection;
