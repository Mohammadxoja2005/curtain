import {FC} from 'react'

import { FormattedMessage } from "react-intl";

interface props {
    text: string, 
    values?: any, 
}

const TRANSLATE:FC<props> = ({text, values = {}}) => { 

  return (
    <FormattedMessage id={text} values={{...values}} />
  )
}

export default TRANSLATE; 