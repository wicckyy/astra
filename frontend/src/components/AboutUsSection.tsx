import { Container, Title, Text, Space } from '@mantine/core';
import React from 'react';

const AboutUsSection: React.FC = () => {
  return (
    <Container size="lg" py="xl">
      <Title order={2} align="center" mb="xl">
        About Us
      </Title>
      <Text mb="md">
        Welcome to SolarCo, your trusted partner in renewable energy solutions. Our mission is to empower homeowners and businesses to transition to clean, sustainable solar power. We believe in a brighter future, powered by the sun.
      </Text>
      <Text mb="md">
        Our core values are integrity, innovation, and customer satisfaction. We are committed to providing high-quality solar installations and exceptional service, ensuring a seamless experience for every client.
      </Text>
      <Text>
        Founded in [Year], SolarCo has been at the forefront of the solar revolution. With years of experience and a dedicated team of experts, we have helped countless customers achieve energy independence and reduce their carbon footprint.
      </Text>
      <Space h="xl" /> {/* Added space for better separation */}
    </Container>
  );
};

export default AboutUsSection;
