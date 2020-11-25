import React, { useCallback, useState } from 'react'

import * as Styled from './SideNavBar.styles'

interface SideNavBarProps {
  height?: string
  width?: number
  collapsedWidth?: number
  collapsed?: any
  children: any
}
const SideNavBar = (props: SideNavBarProps) => {
  const {
    height = '100%',
    width = 200,
    collapsedWidth = 60,
    collapsed,
    children
  } = props
  const [expand, setExpand] = useState(false)

  const onMouseEnter = useCallback(() => {
    if (collapsed) {
      setExpand(true)
    }
  }, [collapsed])

  const onMouseLeave = useCallback(() => {
    if (collapsed) {
      setExpand(false)
    }
  }, [collapsed])

  return (
    <Styled.SideNavBarWrapper height={height}>
      <Styled.SideNavBarCollapsedPlaceholder
        collapsed={collapsed}
        width={width}
        collapsedWidth={collapsedWidth}
      />

      <Styled.SideNavBar
        width={width}
        collapsedWidth={collapsedWidth}
        collapsed={collapsed}
        expand={expand}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {React.Children.map(children, (child) => {
          if (!child) {
            return null
          }
          return React.cloneElement(child, {
            iconWidth: collapsedWidth,
            collapsed: collapsed,
            navBarExpanded: expand
          })
        })}
      </Styled.SideNavBar>
    </Styled.SideNavBarWrapper>
  )
}

export default SideNavBar
