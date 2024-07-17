import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import { EcAccordionProps } from "./types";
import { Typography } from "@mui/material";

const EcAccordion = ({ id = 'Ec Accordion', title, children }: EcAccordionProps) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id={id}
      ></AccordionSummary>
      <Typography>{title}</Typography>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default EcAccordion;
