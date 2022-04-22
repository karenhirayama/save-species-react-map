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
      <a href='https://www.icmbio.gov.br/ran/images/Arquivos/especies_ameacadas/categorias_criterios_iucn_2012.pdf'>
        Informações extraídas do Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio)
      </a>
    </>
  )
}
