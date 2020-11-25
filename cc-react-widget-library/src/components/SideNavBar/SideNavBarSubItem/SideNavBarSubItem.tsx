import React from 'react'

import * as Styled from '../SideNavBar.styles'

const SideNavBarSubItem = (props: {
  text: any,
  active?: any,
  offset?: any,
  as?: any,
  wrapperProps?: any
}) => (
  <Styled.NavBarSubItemWrapper
    {...props.wrapperProps}
    $active={props.active}
    $offset={props.offset}
    as={props.as}
  >
    {props.text}
  </Styled.NavBarSubItemWrapper>
)
export default SideNavBarSubItem
