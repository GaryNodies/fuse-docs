/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  basicsSidebar: [
    {
      type: 'autogenerated',
      dirName: 'understanding-fuse'
    },
  ],
  developersSidebar: [
    {
      type: 'autogenerated',
      dirName: 'developers'
    },
  ],
  validatorsSidebar: [
    {
      type: 'autogenerated',
      dirName: 'validators'
    },
  ],
  apiSidebar:[
    {
      type: 'category',
      label: 'Smart Wallet API',
      link:{
        type:"generated-index",
        title:"Smart Wallet API",
      },
      items:require('./docs/smart-wallet-api/sidebar.js'),
    },
    {
      type: 'category',
      label: 'Admin API',
      link:{
        type:"generated-index",
        title:"Admin API",
      },
      items:require('./docs/admin-api/sidebar.js'),
    },
    {
      type: 'category',
      label: 'Trade API',
      link:{
        type:"generated-index",
        title:"Trade API",
      },
      items:require('./docs/trade-api/sidebar.js'),
    },
    {
      type: 'category',
      label: 'Notification API',
      link:{
        type:"generated-index",
        title:"Notification API",
      },
      items:require('./docs/notification-api/sidebar.js'),
    },
  ]
};

module.exports = sidebars;
