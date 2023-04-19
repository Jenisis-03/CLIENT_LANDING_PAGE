import * as React from 'react';
import { Box, SimpleGrid, Image, Text, Link, Heading } from '@chakra-ui/react';

const Blog = () => {
  return (
    <Box maxW="7xl" mx="auto" px={{ base: '6', lg: '8' }} py="14">
      <Heading textAlign="center" mb="10">
        Health Blog
      </Heading>
      <SimpleGrid columns={4} spacing="14">
        {['1', '2', '3', '4'].map((i) => (
          <Link key={i} href={`/blog/${i}`}>
            <Box
              rounded="lg"
              overflow="hidden"
              bg="white"
              borderWidth="1px"
              borderColor="gray.200"
              borderStyle="solid"
              transition="transform 0.2s"
              _hover={{ bg: 'gray.100', cursor: 'pointer', transform: 'scale(1.05)' }}
            >
              <Image
                w="full"
                h={48}
                fit="cover"
                src={`https://picsum.photos/id/${i}00/200`}
                alt={`Image ${i}`}
              />
              <Box p="6">
                <Text mt="1" fontSize="xl" fontWeight="semibold">
                  Blog post title {i}
                </Text>
                <Text mt="2" fontSize="md">
                  This is a description of blog post {i}. It provides more information about the content of the post.
                </Text>
              </Box>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Blog;