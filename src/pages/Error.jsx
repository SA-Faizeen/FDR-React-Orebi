import { Flex } from "faizen-react-components";
import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="ml-auto pb-20.25">
      <Container>
        <h1 className="text-ink text-[200px]">404</h1>
        <Flex className="flex-col items-start gap-y-10">
          <p className={`text-muted w-161 text-base`}>
            The page you were looking for couldn't be found. The page could be
            removed or you misspelled the word while searching for it. Maybe try
            a search?
          </p>
          <SearchBar
            placeholder="Type to search"
            className={`border-line border h-17.75 placeholder:text-muted placeholder:text-base`}
          />
          <Link to="/" className={`w-50 h-12.5 grid place-items-center bg-ink text-white font-bold text-sm`}>Back to Home</Link>
        </Flex>
      </Container>
    </section>
  );
};

export default Error;
