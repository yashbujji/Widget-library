import styled from 'styled-components/macro'
import {
  SideNavBarProps,
  SideNavBarCollapsedPlaceholderProps,
  SideNavBarWrapperProps,
  ItemWrapperCommonProps,
  NavBarSubItemWrapperProps,
  NavBarSubItemsWrapperProps,
  NavBarItemWrapperProps
} from './SideNavBar.props'

const activeColor = '#f58534'
const hoverColor = '#fff1f1'

const getActiveStateStyle = () => `
background: #fff;

&:after {
  content: '';
  display: inline-block;
  height: 100%;
  width: 4px;
  background: ${activeColor};
  position: absolute;
  right: 0;
  top: 0;
}`

const getHoverStateStyle = () => `
&:hover {
  background: ${hoverColor};
  color: #000;
}
`

const getSideNavBarTransition = () => `all 300ms cubic-bezier(0.4, 0, 0.2, 1)`

/**
 * NavBar Styles
 */
export const SideNavBar = styled.div<SideNavBarProps>`
  background: #fff;
  ${({ collapsed, expand, collapsedWidth, width }) => {
    const w = `${collapsed && !expand ? collapsedWidth : width}px`
    return `
    width: ${w};
    flex: 0 0 ${w};`
  }}
  box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12);
  height: ${({ height }) => height || '100%'};
  z-index: 1200;
  border-top: 1px solid #eeeeee;
  overflow-y: auto;
  overflow-x: hidden;
  transition: ${getSideNavBarTransition};
  position: absolute;
  left: 0;
`

export const SideNavBarCollapsedPlaceholder = styled.div<
  SideNavBarCollapsedPlaceholderProps
>`
  pointer-events: none;
  transition: ${getSideNavBarTransition};
  overflow: hidden;
  ${({ width, height = '100%', collapsed, collapsedWidth }) => {
    const w = `${collapsedWidth}px`
    // IE11 -> Width transition does not work. Hence, using margin-right to push the content
    // with proper transition
    const marginRight = `${collapsed ? 0 : width - collapsedWidth}px`
    return `
    width: ${w};
    flex: 0 0 ${w};
    height: ${height};
    margin-right: ${marginRight};
  `
  }}
`

export const SideNavBarWrapper = styled.div<SideNavBarWrapperProps>`
  position: relative;
  display: inline-flex;
  height: ${({ height }) => height || '100%'};
`

/**
 * Item Styles
 */
const ItemWrapperCommon = styled.div<ItemWrapperCommonProps>`
  display: flex;

  font-family: sans-serif;

  align-items: center;

  position: relative;
  cursor: ${({ $noPointer }) => ($noPointer ? 'normal' : 'pointer')};
  color: #000;

  ${getHoverStateStyle()}

  ${({ $active }) => $active && getActiveStateStyle()}
`

export const NavBarSubItemWrapper = styled(ItemWrapperCommon)<
  NavBarSubItemWrapperProps
>`
  padding: 12px;
  padding-left: ${({ $offset }) => $offset && `calc(${$offset}px + 12px)`};
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
`

const SUB_ITEM_HEIGHT_WITH_OFFSET = 60

export const NavBarSubItemsWrapper = styled.div<NavBarSubItemsWrapperProps>`
  transition: ${getSideNavBarTransition()};
  overflow: hidden;
  max-height: ${({ $expanded, $itemCount = 0 }) =>
    $expanded ? `${SUB_ITEM_HEIGHT_WITH_OFFSET * $itemCount}px` : 0};
`

export const NavBarItemText = styled.span``
export const NavBarItemIconWrapper = styled.span``

export const ExpandIconButtonWrapper = styled.span`
  opacity: 0.7;
  cursor: pointer;
  position: absolute;
  right: 0;
  padding: 8px;
  top: 50%;
  transform: translateY(-50%);
  transition: ${getSideNavBarTransition};

  &:hover {
    opacity: 1;
  }
`

export const NavBarItemWrapper = styled(ItemWrapperCommon)<
  NavBarItemWrapperProps
>`
  padding: ${({ $showExpandButton }) =>
    $showExpandButton ? `20px 28px 20px 0` : `20px 20px 20px 0`};

  ${NavBarItemText} {
    font-weight: ${({ $active }) => ($active ? 600 : 400)};
  }

  ${NavBarItemIconWrapper} {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 ${({ $iconWidth }) => $iconWidth}px;
    ${({ $active }) => $active && `color: ${activeColor};`}
  }

  ${({ $collapsed, $navBarExpanded }) =>
    $collapsed &&
    `${NavBarItemText} {
      white-space: nowrap;
    }
    
    ${ExpandIconButtonWrapper} {
      right: ${$navBarExpanded ? 0 : `-10px`};
    }`}
`
