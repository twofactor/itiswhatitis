import SignupForm from "./SignupForm";

import { Input, Button, Text } from "@chakra-ui/core";
import { motion } from "framer-motion";

const MotionButton = motion.custom(Button);

export default function Signup() {
  const [opened, setOpened] = React.useState(false);

  const RequestAcesss = () => {
    setOpened(true);
  };

  return opened ? (
    <SignupForm />
  ) : (
    <motion.div whileHover={{ scale: 4 }} whileTap={{ scale: 0.9 }}>
      <Button onClick={RequestAcesss} borderRadius="12px" variantColor="pink">
        <Text>Request Early Access</Text>
      </Button>
    </motion.div>
  );
}
