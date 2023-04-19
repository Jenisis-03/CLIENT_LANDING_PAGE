import { Box, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Heading, Text, Button } from '@chakra-ui/react';
export default function Services() {
  const cardContents = [
    {
      title: 'Diabetes Management',
      body: 'Learn how to manage your diabetes effectively.',
    },
    {
      title: 'Thyroid Disease',
      body: 'Get information and support for thyroid disease.',
    },
    {
      title: 'Heart Problems',
      body: 'Find out how to prevent and treat heart problems.',
    },
    {
      title: 'B.P. Management',
      body: 'Discover ways to manage your blood pressure.',
    },
    {
      title: 'Respiratory Problems',
      body: 'Get help with managing respiratory problems.',
    },
    {
      title: 'Migraine',
      body: 'Find relief from migraine headaches.',
    },
    {
      title: 'Pain Management',
      body: 'Explore options for managing chronic pain.',
    }, 
    {
      title: 'Gastric Disorders',
      body: 'Get support for managing gastric disorders.',
    }, 
  ];
  
  return (
    <>
      <Box textAlign="center" fontWeight="bold" fontSize={["1.5rem", "2rem"]} mb={4}>
  Treatments
</Box>
      <SimpleGrid spacing={2} templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} mx='auto' maxW='1200px'>
        {cardContents.map((content, i) => (
          <Card key={i} transition='all 0.2s' _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }} w='300px' h='250px' p='2'>
            <CardHeader>
              <Heading size='md'>{content.title}</Heading>
            </CardHeader>
            <CardBody>
              <Text>{content.body}</Text>
            </CardBody>
            <CardFooter>
              <Button>Learn more</Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
      
    </>
  );
}  