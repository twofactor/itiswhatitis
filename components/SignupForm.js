import { Flex, Box, Input, Button, Text, useToast } from "@chakra-ui/core";
import { motion } from "framer-motion";

const twitterurl = encodeURIComponent(`it is what it is

👁👄👁.fm

https://xn--mp8hai.fm/`);

export default function SignupForm() {
  const [email, setEmail] = React.useState();
  const [submitted, setSubmit] = React.useState(false);
  const toast = useToast();
  const handleChange = (event) => setEmail(event.target.value);

  const submitForm = (e) => {
    if (email) {
      const formUrl = `https://getform.io/f/37afe85a-94fa-4dda-9696-4363a0e8a1a3`;
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
        }),
      };

      fetch(formUrl, requestOptions);
      setSubmit(true);
    } else {
      toast({
        description: "you forgot an email silly!!!!!!!",
        status: "error",
        duration: 9000,
        isClosable: false,
      });
    }
    e.preventDefault();
    return false;
  };

  return submitted ? (
    <motion.div
      initial={{
        scale: 0.1,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
    >
      <Box padding="20px" backgroundColor="teal.500" borderRadius="16px">
        <Text fontSize="4xl" fontWeight="bold" color="white">
          yay your email has been submitted!! follow us <a href="https://twitter.com/whatitisfm">@whatitisfm 👁👄👁</a>
        </Text>
        <Button
          as="a"
          target="_blank"
          href={"https://twitter.com/intent/tweet?text=" + twitterurl}
          variantColor="blue"
        >
          share on twitter for special treatment 😉
        </Button>
        <Text fontSize="2xl" fontWeight="bold" color="white">
          ps don't forget to add 👁👄👁 to your twitter name
        </Text>
      </Box>
    </motion.div>
  ) : (
    <Flex flexDirection={["column", "column", "row", "row"]}>
      <form onSubmit={submitForm}>
        <Input
          borderRadius="16px"
          placeholder="email address here"
          value={email}
          onChange={handleChange}
          onSubmit={submitForm}
        />
      </form>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
        <Button
          borderRadius="12px"
          variantColor="pink"
          borderRadius="16px"
          ml="8px"
          onClick={submitForm}
        >
          give us ur email
        </Button>
      </motion.div>
    </Flex>
  );
}
