import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  // rootNotionPageId: 'niviki-com-t-do-t-i-ch-nh-10f5e54221eb4b059bc5b5305da949ba',
  rootNotionPageId: '26c9db4259894b3fbf5bea5903c6c5ac',
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'TỰ DO TÀI CHÍNH',
  domain: '',
  author: '',

  // open graph metadata (optional)
  description: 'Lan toả tinh thần tự do tài chính đến với nhiều người hơn nữa! Tự do tài chính là bạn được quyền “thất nghiệp” nhưng vẫn có đủ tiền cho một cuộc sống thoải mái trong thời gian dài',

  // social usernames (optional)
  twitter: '',
  linkedin: '',
  
  facebook: '',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  youtube: '', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
  ]
})
