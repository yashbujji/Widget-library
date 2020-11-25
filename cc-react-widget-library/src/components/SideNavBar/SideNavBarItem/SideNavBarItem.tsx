import React, { useEffect, useState, useRef } from 'react'
import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon
} from '@material-ui/icons'

import * as Styled from '../SideNavBar.styles'

const ExpandIconButton = (props: { onClick: () => void; expanded: any }) => (
  <Styled.ExpandIconButtonWrapper onClick={props.onClick}>
    {props.expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
  </Styled.ExpandIconButtonWrapper>
)

const SideNavBarItemWithoutSubItems = (props: {
  icon: any
  text: any
  active: any
  iconWidth: number
  collapsed: any
  navBarExpanded: any
  showExpandButton: any
  expanded: any
  onExpandButtonClick: () => void
  as: any
  noPointer: any
  wrapperProps: any
}) => (
  <Styled.NavBarItemWrapper
    {...props.wrapperProps}
    as={props.as}
    $collapsed={props.collapsed}
    $navBarExpanded={props.navBarExpanded}
    $active={props.active}
    $center
    $iconWidth={props.iconWidth}
    $showExpandButton={props.showExpandButton}
    $noPointer={props.noPointer}
  >
    <Styled.NavBarItemIconWrapper>{props.icon}</Styled.NavBarItemIconWrapper>
    <Styled.NavBarItemText>{props.text}</Styled.NavBarItemText>
    {props.showExpandButton && (
      <ExpandIconButton
        expanded={props.expanded}
        onClick={props.onExpandButtonClick}
      />
    )}
  </Styled.NavBarItemWrapper>
)

const SideNavBarItemWithSubItems = (props: {
  text: any
  icon: any
  active: any
  children: any
  iconWidth: number
  collapsed: any
  navBarExpanded: any
  onExpandedChange: (e: any) => void
  showSubItemsOnClick: any
  showSubItemsOnStart: any
  wrapperProps: any
}) => {
  const [expanded, setExpanded] = useState(props.showSubItemsOnStart)

  const previousExpandedState = useRef(props.showSubItemsOnStart)
  useEffect(() => {
    if (!props.collapsed) {
      const expandedState = previousExpandedState.current || false
      setExpanded(expandedState)
    } else if (props.collapsed) {
      setExpanded(props.navBarExpanded ? previousExpandedState.current : false)
    }
  }, [props.collapsed, props.navBarExpanded])

  useEffect(() => {
    props.onExpandedChange && props.onExpandedChange(expanded)
  }, [expanded, props.onExpandedChange])

  const toggleExpansion = () => {
    const newExpanded = !expanded
    previousExpandedState.current = newExpanded
    setExpanded(newExpanded)
  }

  const extraProps = props.showSubItemsOnClick
    ? { onClick: toggleExpansion }
    : { noPointer: true }

  return (
    <>
      <SideNavBarItemWithoutSubItems
        text={props.text}
        icon={props.icon}
        active={props.active}
        {...props.wrapperProps}
        iconWidth={props.iconWidth}
        collapsed={props.collapsed}
        navBarExpanded={props.navBarExpanded}
        showExpandButton
        expanded={expanded}
        onExpandButtonClick={(e: any) => {
          e.preventDefault()
          toggleExpansion()
        }}
        {...extraProps}
      />
      <Styled.NavBarSubItemsWrapper
        $expanded={expanded}
        $itemCount={props.children.length}
      >
        {React.Children.map(props.children, (child) => {
          if (!child) {
            return null
          }
          return React.cloneElement(child, {
            offset: props.iconWidth
          })
        })}
      </Styled.NavBarSubItemsWrapper>
    </>
  )
}

const SideNavBarItem = (props: {
  icon: any
  text: any
  active?: any
  iconWidth?: number
  children?: any
  as?: any
  collapsed?: any
  showSubItemsOnClick?: boolean
  showSubItemsOnStart?: boolean
  wrapperProps?: any
}) => {
  if (!props.children) {
    return (
      <SideNavBarItemWithoutSubItems
        {...props.wrapperProps}
        icon={props.icon}
        text={props.text}
        active={props.active}
        iconWidth={props.iconWidth || 60}
        collapsed={props.collapsed}
        as={props.as}
      />
    )
  }

  return (
    <SideNavBarItemWithSubItems
      {...props.wrapperProps}
      icon={props.icon}
      text={props.text}
      active={props.active}
      iconWidth={props.iconWidth || 60}
      collapsed={props.collapsed}
      as={props.as}
      showSubItemsOnClick={props.showSubItemsOnClick}
      showSubItemsOnStart={props.showSubItemsOnStart}
    >
      {props.children}
    </SideNavBarItemWithSubItems>
  )
}

export default SideNavBarItem
