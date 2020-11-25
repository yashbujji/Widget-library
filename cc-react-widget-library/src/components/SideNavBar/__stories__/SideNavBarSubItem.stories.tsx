import React from 'react'

import { SideNavBarSubItem } from '../SideNavBarSubItem'

export default {
  title: 'SideNavBar/Sub Item'
}

export const Basic = () => <SideNavBarSubItem text={`Users`} />

Basic.story = {
  parameters: {
    info: {
      text: `hover on the sub item to see its hover state`
    }
  }
}

export const Active = () => <SideNavBarSubItem text={`Users`} active />

Active.story = {
  parameters: {
    info: {
      text: `Sub item is shown as Active on start`
    }
  }
}

export const WithOffset = () => (
  <SideNavBarSubItem offset={20} text={`Users`} active />
)

WithOffset.story = {
  parameters: {
    info: {
      text: `Sub item is displayed with offset of 20 from left and is Active`
    }
  }
}
