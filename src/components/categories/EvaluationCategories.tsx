import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import { libEvaluationCategories } from "./libEvaluationCategories"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const EvaluationCategories = () => {

  return (
    <>
      {libEvaluationCategories.map((category) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id={category.abreviation}
          >
            <Typography>
              {category.label} ({category.abreviation})
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {category.definition}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  )
}
