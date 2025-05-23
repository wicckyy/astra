import { Footer, Container, Text, Group, Anchor, Space } from '@mantine/core';
import React from 'react';

const FooterComponent: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Footer height={80} p="md" mt="xl">
      <Container size="lg" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
        <Text color="dimmed" size="sm">
          © {currentYear} SolarCo. All rights reserved.
        </Text>
        <Group spacing="xs">
          <Anchor href="#" size="sm" color="dimmed">
            Facebook
          </Anchor>
          <Anchor href="#" size="sm" color="dimmed">
            Twitter
          </Anchor>
          <Anchor href="#" size="sm" color="dimmed">
            LinkedIn
          </Anchor>
        </Group>
      </Container>
    </Footer>
  );
};

export default FooterComponent;
