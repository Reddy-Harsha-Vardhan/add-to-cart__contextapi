/* eslint-disable @typescript-eslint/no-unused-vars */
import styled , {css} from "styled-components";


interface FlexProps {
    /* activate flexbox for top elements*/
    container?: boolean;
    alignItems?: 'stretch'|'center'|'flex-start'|'flex-end'|'baseline'|'initial'|'inherit'
      
    justifyContent?: 'flex-start'|'flex-end'|'center'|'space-between'|'space-around'|'initial'|'inherit'
        
    flexDirection?: 'row'|'row-reverse'|'column'|'column-reverse'|'initial'|'inherit'
       
    flexWrap?:  'wrap'|'nowrap'|'wrap-reverse'|'initial'|'inherit'

}
 export const Flex = styled.div<FlexProps>`
 ${({container,alignItems,justifyContent,flexDirection,flexWrap}) => container && css`
    display: ${container ? 'flex' : 'block'}):
  
    align-items: ${alignItems || 'stretch'};
    justify-content: ${justifyContent || 'flex-start'};
    flex-direction: ${flexDirection || 'row'};
    flex-wrap: ${flexWrap || 'nowrap'};
    `}
`;