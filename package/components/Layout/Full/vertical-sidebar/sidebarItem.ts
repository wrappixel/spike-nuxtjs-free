import {
    LayoutDashboardIcon,BorderAllIcon,
    AlertCircleIcon,
    CircleDotIcon,
    BoxMultiple1Icon,
    LoginIcon, MoodHappyIcon, ApertureIcon, UserPlusIcon
  } from 'vue-tabler-icons';
  
  export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    chip?: string;
    BgColor?: string;
    chipBgColor?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
  }
  
  const sidebarItem: menu[] = [
    { header: 'Home' },
    {
      title: 'Dashboard',
      icon: LayoutDashboardIcon,
      to: '/'
    },
    { header: 'ui' },
    {
      title: "Alert",
      icon: AlertCircleIcon,
      to: "/ui-components/alerts",
      
    },
    {
      title: "Button",
      icon: CircleDotIcon,
      to: "/ui-components/buttons",
    },
    {
      title: "Cards",
      icon: BoxMultiple1Icon,
      to: "/ui-components/cards",
    },
    {
      title: "Tables",
      icon: BorderAllIcon,
      to: "/ui-components/tables",
    },
  
    { header: 'Auth' },
    {
      title: 'Login',
      icon: LoginIcon,
      to: '/auth/login'
  },
  {
      title: 'Register',
      icon: UserPlusIcon,
      to: '/auth/register'
  },
  { header: 'Extra' },
  {
      title: 'Icons',
      icon: MoodHappyIcon,
      to: '/pages/icons'
  },
  {
      title: 'Sample Page',
      icon: ApertureIcon,
      to: '/pages/sample-page'
  },
  
  ];
  
  export default sidebarItem;
  