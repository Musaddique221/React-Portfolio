import { Flex, Link, Icon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "../Style.css"
import pdf from "../Assets/resume.pdf"




pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;


const ResumeScreen = () => {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(3);
  const [pageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      <Flex
        w="full"
        direction="column"
        mt="85px"
        justifyContent="center"
        alignItems="center"
        zIndex="100"
      >
        <Flex
          mt="20"
          mb="5"
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Link
            border="1px solid black"
            bgColor="gray.400"
            p="2"
            rounded="md"
            shadow="md"
            href="https://drive.google.com/file/d/1j902clYKB_mRghbItkqryDwdhO7wW6zo/view?usp=sharing"
            color="black"
            _hover={{ textDecor: "none" }}
          >
            &nbsp;Download CV
          </Link>
          <Icon as={AiOutlineCloudDownload} w="8" h="8" mx="2" />
        </Flex>

        <Flex display="column">
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} scale={width > 786 ? 1.2: 0.6} />
          </Document>
          <p>
            {" "}
            Page {pageNumber} of {numPages}
          </p>
        </Flex>
      </Flex>
    </>
  );
};

export default ResumeScreen;