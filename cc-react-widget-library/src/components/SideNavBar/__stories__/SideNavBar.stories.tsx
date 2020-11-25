import React from 'react'

import { Home as HomeIcon, Settings as SettingsIcon } from '@material-ui/icons'

import SideNavBar from '../SideNavBar'
import { SideNavBarItem } from '../SideNavBarItem'
import { SideNavBarSubItem } from '../SideNavBarSubItem'

export default {
  title: 'SideNavBar',
  decorators: [(storyFn: any) => <div style={{ height: 250 }}>{storyFn()}</div>]
}

export const Basic = () => (
  <SideNavBar>
    <SideNavBarItem text={`Home`} icon={<HomeIcon />} active />
    <SideNavBarItem
      icon={<SettingsIcon />}
      text={`Admin`}
      showSubItemsOnStart
      showSubItemsOnClick
    >
      <SideNavBarSubItem text={`Users`} />
      <SideNavBarSubItem text={`System`} />
    </SideNavBarItem>
  </SideNavBar>
)

Basic.story = {
  parameters: {
    info: {
      text: `Side navigation bar having Home and admin as Menu Items. User and System as Submenu items for Admin. Clicking on the Admin will expand/Collapse the submenu items and corresponding onClick action if required got fired`
    }
  }
}

export const Collapsed = () => (
  <SideNavBar collapsed>
    <SideNavBarItem text={`Home`} icon={<HomeIcon />} />
    <SideNavBarItem
      icon={<SettingsIcon />}
      text={`Admin`}
      showSubItemsOnStart
      showSubItemsOnClick
      active
    >
      <SideNavBarSubItem text={`Users`} />
      <SideNavBarSubItem text={`System`} />
    </SideNavBarItem>
  </SideNavBar>
)
Collapsed.story = {
  parameters: {
    info: {
      text: `Hover on the nav bar to auto expand. If sub-items are expanded they will be collapsed and expanded automatically based on nav bar's collapsed state.`
    }
  }
}
