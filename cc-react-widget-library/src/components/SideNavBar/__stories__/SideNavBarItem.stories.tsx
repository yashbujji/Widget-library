import React from 'react'
import { Home as HomeIcon, Settings as SettingsIcon } from '@material-ui/icons'

import { SideNavBarItem } from '../SideNavBarItem'
import { SideNavBarSubItem } from '../SideNavBarSubItem'

export default {
  title: 'SideNavBar/Item'
}

export const Basic = () => <SideNavBarItem icon={<HomeIcon />} text={`Home`} />
Basic.story = {
  parameters: {
    info: {
      text: `Hover on the item to see its hover state.`
    }
  }
}

export const Active = () => (
  <SideNavBarItem icon={<HomeIcon />} text={`Home`} active />
)
Active.story = {
  parameters: {
    info: {
      text: `Hover still works while active.`
    }
  }
}

export const WithSubItems = () => (
  <SideNavBarItem icon={<SettingsIcon />} text={`Admin`}>
    <SideNavBarSubItem text={`Users`} />
    <SideNavBarSubItem text={`System`} />
  </SideNavBarItem>
)
WithSubItems.story = {
  parameters: {
    info: {
      text: `Click on expand icon to expand sub items. You can use \`showSubItemsOnClick\` to expand the sub items on clicking the whole item (this is shown in a later story).`
    }
  }
}

export const ExpandSubItemsOnItemClickEnabled = () => (
  <SideNavBarItem icon={<SettingsIcon />} text={`Admin`} showSubItemsOnClick>
    <SideNavBarSubItem text={`Users`} />
    <SideNavBarSubItem text={`System`} />
  </SideNavBarItem>
)
ExpandSubItemsOnItemClickEnabled.story = {
  parameters: {
    info: {
      text: `Click on the item to expand sub items.`
    }
  }
}

export const ShowSubItemsOnStart = () => (
  <SideNavBarItem icon={<SettingsIcon />} text={`Admin`} showSubItemsOnStart>
    <SideNavBarSubItem text={`Users`} />
    <SideNavBarSubItem text={`System`} />
  </SideNavBarItem>
)

ShowSubItemsOnStart.story = {
  parameters: {
    info: {
      text: `Sub items are displayed at the starting time itself`
    }
  }
}

export const ActiveWithSubItems = () => (
  <SideNavBarItem active icon={<SettingsIcon />} text={`Admin`}>
    <SideNavBarSubItem text={`Users`} />
    <SideNavBarSubItem text={`System`} />
  </SideNavBarItem>
)
ActiveWithSubItems.story = {
  parameters: {
    info: {
      text: `Admin is shown as active on start`
    }
  }
}

export const WithActiveSubItem = () => (
  <SideNavBarItem icon={<SettingsIcon />} text={`Admin`} showSubItemsOnStart>
    <SideNavBarSubItem text={`Users`} active />
    <SideNavBarSubItem text={`System`} />
  </SideNavBarItem>
)

WithActiveSubItem.story = {
  parameters: {
    info: {
      text: `Sub item User is shown as active on start`
    }
  }
}
