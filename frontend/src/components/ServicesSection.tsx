import { Container, Title, Text, Grid, Card, ThemeIcon, Space, Group } from '@mantine/core';
import { IconSun, IconSettings, IconMessageCircle } from '@tabler/icons-react'; // Example icons
import React from 'react';

const servicesData = [
  {
    title: 'Solar Panel Installation',
    description: 'Professional installation of high-efficiency solar panels tailored to your property and energy needs.',
    icon: IconSun,
  },
  {
    title: 'System Maintenance & Repair',
    description: 'Comprehensive maintenance and repair services to ensure your solar system operates at peak performance.',
    icon: IconSettings,
  },
  {
    title: 'Energy Consultation',
    description: 'Expert consultation to help you understand your energy usage and how solar can benefit you.',
    icon: IconMessageCircle,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <Container size="lg" py="xl">
      <Title order={2} align="center" mb="xl">
        Our Services
      </Title>
      <Grid gutter="xl">
        {servicesData.map((service, index) => (
          <Grid.Col span={12} md={4} key={index}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Group position="center" mb="md">
                <ThemeIcon size="xl" radius="xl" variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
                  <service.icon size={30} />
                </ThemeIcon>
              </Group>
              <Title order={3} align="center" mb="sm">
                {service.title}
              </Title>
              <Text size="sm" color="dimmed" align="center">
                {service.description}
              </Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
      <Space h="xl" />
    </Container>
  );
};

export default ServicesSection;
