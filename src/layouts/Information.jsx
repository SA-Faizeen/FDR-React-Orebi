/* eslint-disable no-unused-vars */
import { Flex } from "faizen-react-components";
import Container from "../components/Container";
import { FaTruck, FaUndo, FaUndoAlt } from "react-icons/fa";
import FeatureItem from "../components/FeatureItem";

const Information = () => {
  return (
    <section className="border-line min-h-[10vh] border-y py-5.5">
      <Container>
        <Flex className="justify-between">
          <FeatureItem icon="2" text="Two years warranty" />
          <FeatureItem icon={<FaTruck />} text="Free shipping" />
          <FeatureItem icon={<FaUndoAlt />} text="Return policy in 30 days" />
        </Flex>
      </Container>
    </section>
  );
};

export default Information;
