import * as React from 'react'

import { BasicText } from './'

export default {
  title: 'atoms|Text',
  component: Text
}

export const basic = () => (
  <BasicText size={16} textcolor={'BLACK'}>
    test
  </BasicText>
)
