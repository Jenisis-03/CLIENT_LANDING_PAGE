import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, Heading, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const MotionBox = motion(Box);

function FAQSection() {
  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 30 days of purchase. The item must be in its original condition and packaging."
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping typically takes 3-5 business days for domestic orders, and 7-10 business days for international orders."
    },
    {
      question: "Do you offer gift wrapping?",
      answer:
        "Yes, we offer gift wrapping for an additional fee. You can select this option at checkout."
    }
  ];

  return (
    <MotionBox
      p={8}
      mx="auto"
      maxW="800px"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h2" size="xl">
            Frequently Asked Questions
          </Heading>
        </Box>
        <Accordion allowToggle>
          {faqs.map((faq) => (
            <AccordionItem key={faq.question}>
              <AccordionButton
                _expanded={{ bg: "gray.100" }}
                _hover={{ bg: "gray.50" }}
              >
                <Box flex="1" textAlign="left">
                  {faq.question}
                </Box>
                <Box as={AccordionIcon} />
              </AccordionButton>
              <AccordionPanel pb={4}>
                {faq.answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </VStack>
    </MotionBox>
  );
}

const AccordionIcon = ({ isOpen }) => {
  if (isOpen) {
    return <AiOutlineMinus />;
  } else {
    return <AiOutlinePlus />;
  }
};

export default FAQSection;
