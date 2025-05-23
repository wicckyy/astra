import { Header, Group, Text, Anchor, Box } from '@mantine/core';
import React from 'react';

const HeaderComponent: React.FC = () => {
  return (
    <Header height={60} p="xs">
      <Group position="apart">
        <Box
          sx={(theme) => ({
            padding: theme.spacing.xs,
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
            borderRadius: theme.radius.sm,
          })}
        >
          <Text>SolarCo Logo</Text>
        </Box>
        <Group>
          <Anchor href="#">Home</Anchor>
          <Anchor href="#">About</Anchor>
          <Anchor href="#">Services</Anchor>
          <Anchor href="#">Contact</Anchor>
        </Group>
      </Group>
    </Header>
  );
};

export default HeaderComponent;
