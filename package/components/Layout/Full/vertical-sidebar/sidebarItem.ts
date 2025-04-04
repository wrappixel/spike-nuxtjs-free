import {
  LayoutDashboardIcon,
  BorderAllIcon,
  AlertCircleIcon,
  CircleDotIcon,
  BoxMultiple1Icon,
  LoginIcon,
  MoodHappyIcon,
  ApertureIcon,
  UserPlusIcon,
} from "vue-tabler-icons";

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
  external?: boolean;
}

const sidebarItem: menu[] = [
  { header: "Home" },
  {
    title: "Dashboard",
    icon: "graph-new-linear",
    to: "/",
  },
  {
    title: "Dashboard 1",
    icon: "screencast-2-linear",
    to: "https://spike-nuxtjs-pro-main.netlify.app/dashboards/dashboard1",
    chip: "Pro",
    external: true,
  },
  {
    title: "Dashboard 2",
    icon: "chart-line-duotone",
    to: "https://spike-nuxtjs-pro-main.netlify.app/dashboards/dashboard2",
    chip: "Pro",
    external: true,
  },
  {
    title: "Front Pages",
    icon: "home-angle-linear",
    to: "/frontpages",
    children: [
      {
        title: "Homepage",
        to: "https://spike-nuxtjs-pro-main.netlify.app/front-pages/homepage",
        chip: "Pro",
        external: true,
      },
      {
        title: "About Us",
        to: "https://spike-nuxtjs-pro-main.netlify.app/front-pages/about-us",
        chip: "Pro",
        external: true,
      },
      {
        title: "Blog",
        to: "https://spike-nuxtjs-pro-main.netlify.app/front-pages/blog/posts",
        chip: "Pro",
        external: true,
      },
      {
        title: "Blog Details",
        to: "https://spike-nuxtjs-pro-main.netlify.app/front-pages/blog/early-black-friday-amazon-deals-cheap-tvs-headphones",
        chip: "Pro",
        external: true,
      },
      {
        title: "Contact Us",
        to: "https://spike-nuxtjs-pro-main.netlify.app/front-pages/contact-us",
        chip: "Pro",
        external: true,
      },
      {
        title: "Portfolio",
        to: "https://spike-nuxtjs-pro-main.netlify.app/front-pages/portfolio",
        chip: "Pro",
        external: true,
      },
      {
        title: "Pricing",
        to: "https://spike-nuxtjs-pro-main.netlify.app/front-pages/pricing",
        chip: "Pro",
        external: true,
      },
    ],
  },

  { header: "ui" },
  {
    title: "Alert",
    icon: "volume-small-broken",
    to: "/ui-components/alerts",
  },
  {
    title: "Button",
    icon: "tag-horizontal-outline",
    to: "/ui-components/buttons",
  },
  {
    title: "Cards",
    icon: "cardholder-linear",
    to: "/ui-components/cards",
  },
  {
    title: "Tables",
    icon: "suspension-outline",
    to: "/ui-components/tables",
  },
  {
    title: "Ui Elements",
    icon: "code-scan-line-duotone",
    to: "/components/",
    children: [
      {
        title: "Alert",
        to: "https://spike-nuxtjs-pro-main.netlify.app/ui-components/alert",
        chip: "Pro",
        external: true,
      },
      {
        title: "Accordion",
        to: "https://spike-nuxtjs-pro-main.netlify.app/ui-components/accordion",
        chip: "Pro",
        external: true,
      },
      {
        title: "Avatar",
        to: "https://spike-nuxtjs-pro-main.netlify.app/ui-components/avatar",
        chip: "Pro",
        external: true,
      },
      {
        title: "Chip",
        to: "https://spike-nuxtjs-pro-main.netlify.app/ui-components/chip",
        chip: "Pro",
        external: true,
      },
      {
        title: "Dialog",
        to: "https://spike-nuxtjs-pro-main.netlify.app/ui-components/dialogs",
        chip: "Pro",
        external: true,
      },
      {
        title: "List",
        to: "https://spike-nuxtjs-pro-main.netlify.app/ui-components/list",
        chip: "Pro",
        external: true,
      },
      {
        title: "Menus",
        to: "https://spike-nuxtjs-pro-main.netlify.app/ui-components/menus",
        chip: "Pro",
        external: true,
      },
      {
        title: "Rating",
        to: "https://spike-nuxtjs-pro-main.netlify.app/ui-components/rating",
        chip: "Pro",
        external: true,
      },
      {
        title: "Tabs",
        to: "https://spike-nuxtjs-pro-main.netlify.app/ui-components/tabs",
        chip: "Pro",
        external: true,
      },
      {
        title: "Tooltip",
        to: "https://spike-nuxtjs-pro-main.netlify.app/ui-components/tooltip",
        chip: "Pro",
        external: true,
      },
      {
        title: "Typography",
        to: "https://spike-nuxtjs-pro-main.netlify.app/ui-components/typography",
        chip: "Pro",
        external: true,
      },
    ],
  },

  { header: "Apps" },
  {
    title: "Contact",
    icon: "phone-line-duotone",
    to: "https://spike-nuxtjs-pro-main.netlify.app/apps/contacts",
    chip: "Pro",
    external: true,
  },

  {
    title: "Blog",
    icon: "align-vertical-spacing-line-duotone",
    to: "/apps",
    children: [
      {
        title: "Posts",
        to: "https://spike-nuxtjs-pro-main.netlify.app/apps/blog/posts",
        chip: "Pro",
        external: true,
      },
      {
        title: "Detail",
        to: "https://spike-nuxtjs-pro-main.netlify.app/apps/blog/early-black-friday-amazon-deals-cheap-tvs-headphones",
        chip: "Pro",
        external: true,
      },
    ],
  },
  {
    title: "E-Commerce",
    icon: "smart-speaker-minimalistic-line-duotone",
    to: "/ecommerce/",
    BgColor: "success",
    children: [
      {
        title: "Shop One",
        to: "https://spike-nuxtjs-pro-main.netlify.app/apps/ecommerce/productsone",
        chip: "Pro",
        external: true,
      },
      {
        title: "Shop Two",
        to: "https://spike-nuxtjs-pro-main.netlify.app/apps/ecommerce/productstwo",
        chip: "Pro",
        external: true,
      },
      {
        title: "Details One",
        to: "https://spike-nuxtjs-pro-main.netlify.app/apps/ecommerce/product/one/detail/1",
        chip: "Pro",
        external: true,
      },
      {
        title: "Details Two",
        to: "https://spike-nuxtjs-pro-main.netlify.app/apps/ecommerce/producttwo/two/detail/1",
        chip: "Pro",
        external: true,
      },
      {
        title: "List",
        to: "https://spike-nuxtjs-pro-main.netlify.app/apps/ecommerce/productlist",
        chip: "Pro",
        external: true,
      },
      {
        title: "Checkout",
        to: "https://spike-nuxtjs-pro-main.netlify.app/apps/ecommerce/checkout",
        chip: "Pro",
        external: true,
      },
      {
        title: "Add Product",
        to: "https://spike-nuxtjs-pro-main.netlify.app/apps/ecommerce/addproduct",
        chip: "Pro",
        external: true,
      },
      {
        title: "Edit Product",
        to: "https://spike-nuxtjs-pro-main.netlify.app/apps/ecommerce/editproduct",
        chip: "Pro",
        external: true,
      },
    ],
  },
  {
    title: "Chats",
    icon: "chat-round-unread-line-duotone",
    to: "https://spike-nuxtjs-pro-main.netlify.app/apps/chats",
    chip: "Pro",
    external: true,
  },
  {
    title: "User Profile",
    icon: "user-rounded-line-duotone",
    BgColor: "error",
    to: "/user",
    children: [
      {
        title: "Profile One",
        to: "https://spike-nuxtjs-pro-main.netlify.app/apps/userprofile/one",
        chip: "Pro",
        external: true,
      },
      {
        title: "Profile Two",
        to: "https://spike-nuxtjs-pro-main.netlify.app/apps/userprofile/two",
        chip: "Pro",
        external: true,
      },
    ],
  },
  {
    title: "Invoice",
    icon: "bill-check-outline",
    BgColor: "success",
    to: "/invoice",
    children: [
      {
        title: "List",
        to: "https://spike-nuxtjs-pro-main.netlify.app/apps/invoice",
        chip: "Pro",
        external: true,
      },
      {
        title: "Details",
        to: "https://spike-nuxtjs-pro-main.netlify.app/apps/invoice/details/102",
        chip: "Pro",
        external: true,
      },
      {
        title: "Create",
        to: "https://spike-nuxtjs-pro-main.netlify.app/apps/invoice/create",
        chip: "Pro",
        external: true,
      },
      {
        title: "Edit",
        to: "https://spike-nuxtjs-pro-main.netlify.app/apps/invoice/edit/102",
        chip: "Pro",
        external: true,
      },
    ],
  },
  {
    title: "Notes",
    icon: "notification-unread-line-duotone",
    to: "https://spike-nuxtjs-pro-main.netlify.app/apps/notes",
    chip: "Pro",
    external: true,
  },
  {
    title: "Calendar",
    icon: "calendar-line-duotone",
    to: "https://spike-nuxtjs-pro-main.netlify.app/apps/calendar",
    chip: "Pro",
    external: true,
  },
  {
    title: "Email",
    icon: "letter-linear",
    to: "https://spike-nuxtjs-pro-main.netlify.app/apps/email",
    chip: "Pro",
    external: true,
  },
  {
    title: "Kanban",
    icon: "widget-4-linear",
    to: "https://spike-nuxtjs-pro-main.netlify.app/apps/kanban",
    chip: "Pro",
    external: true,
  },
  {
    title: "Tickets",
    icon: "ticker-star-outline",
    to: "https://spike-nuxtjs-pro-main.netlify.app/apps/tickets",
    chip: "Pro",
    external: true,
  },

  { header: "Pages" },
  {
    title: "Pricing",
    chip: "Pro",
    external: true,
    icon: "tag-price-line-duotone",
    to: "https://spike-nuxtjs-pro-main.netlify.app/theme-pages/pricing",
  },
  {
    title: "FAQ",
    icon: "question-circle-line-duotone",
    chip: "Pro",
    external: true,
    to: "https://spike-nuxtjs-pro-main.netlify.app/theme-pages/faq",
  },
  {
    title: "Account Setting",
    icon: "settings-minimalistic-line-duotone",
    chip: "Pro",
    external: true,
    to: "https://spike-nuxtjs-pro-main.netlify.app/theme-pages/account-settings",
  },
  {
    title: "Landing Page",
    icon: "layers-minimalistic-line-duotone",
    chip: "Pro",
    external: true,
    to: "https://spike-nuxtjs-pro-main.netlify.app/",
  },
  {
    title: "Gallery Lightbox",
    icon: "gallery-minimalistic-outline",
    chip: "Pro",
    external: true,
    to: "https://spike-nuxtjs-pro-main.netlify.app/theme-pages/gallery-lightbox",
  },
  {
    title: "Search Results",
    icon: "calendar-search-line-duotone",
    chip: "Pro",
    external: true,
    to: "https://spike-nuxtjs-pro-main.netlify.app/theme-pages/search-results",
  },
  {
    title: "Social Contacts",
    icon: "socket-outline",
    chip: "Pro",
    external: true,
    to: "https://spike-nuxtjs-pro-main.netlify.app/theme-pages/social-media",
  },
  {
    title: "Treeview",
    icon: "transmission-line-duotone",
    chip: "Pro",
    external: true,
    to: "https://spike-nuxtjs-pro-main.netlify.app/theme-pages/treeview",
  },

  {
    title: "Widget",
    icon: "widget-add-line-duotone",
    to: "/widget-card",
    children: [
      {
        title: "Cards",
        to: "https://spike-nuxtjs-pro-main.netlify.app/widgets/cards",
        chip: "Pro",
        external: true,
      },
      {
        title: "Banners",
        to: "https://spike-nuxtjs-pro-main.netlify.app/widgets/banners",
        chip: "Pro",
        external: true,
      },
      {
        title: "Charts",
        to: "https://spike-nuxtjs-pro-main.netlify.app/widgets/charts",
        chip: "Pro",
        external: true,
      },
    ],
  },

  { header: "School Pages" },
  {
    title: "Teachers",
    icon: "square-academic-cap-linear",
    to: "/schoolpage",
    children: [
      {
        title: "All Teachers",
        to: "https://spike-nuxtjs-pro-main.netlify.app/school-pages/teachers",
        chip: "Pro",
        external: true,
      },
      {
        title: "Teachers Details",
        to: "https://spike-nuxtjs-pro-main.netlify.app/school-pages/teachers/details",
        chip: "Pro",
        external: true,
      },
    ],
  },
  {
    title: "Exam",
    icon: "notebook-minimalistic-outline",
    to: "/exam",
    children: [
      {
        title: "Exam Schedule",
        to: "https://spike-nuxtjs-pro-main.netlify.app/school-pages/exam/schedule",
        chip: "Pro",
        external: true,
      },
      {
        title: "Exam Result",
        to: "https://spike-nuxtjs-pro-main.netlify.app/school-pages/exam/result",
        chip: "Pro",
        external: true,
      },
      {
        title: "Exam Result Details",
        to: "https://spike-nuxtjs-pro-main.netlify.app/school-pages/exam/result-details",
        chip: "Pro",
        external: true,
      },
    ],
  },
  {
    title: "Students",
    icon: "case-broken",
    to: "",
    children: [
      {
        title: "All Students",
        to: "https://spike-nuxtjs-pro-main.netlify.app/school-pages/students",
        chip: "Pro",
        external: true,
      },
      {
        title: "Students Details",
        to: "https://spike-nuxtjs-pro-main.netlify.app/school-pages/students/details",
        chip: "Pro",
        external: true,
      },
    ],
  },
  {
    title: "Classes",
    icon: "smart-home-broken",
    to: "https://spike-nuxtjs-pro-main.netlify.app/school-pages/classes",
    chip: "Pro",
    external: true,
  },
  {
    title: "Attendance",
    icon: "diploma-linear",
    to: "https://spike-nuxtjs-pro-main.netlify.app/school-pages/attendance",
    chip: "Pro",
    external: true,
  },

  { header: "Forms" },
  {
    title: "Form Elements",
    icon: "widget-3-line-duotone",
    to: "/components/",
    children: [
      {
        title: "Autocomplete",
        to: "https://spike-nuxtjs-pro-main.netlify.app/forms/form-elements/autocomplete",
        chip: "Pro",
        external: true,
      },
      {
        title: "Combobox",
        to: "https://spike-nuxtjs-pro-main.netlify.app/forms/form-elements/combobox",
        chip: "Pro",
        external: true,
      },
      {
        title: "Button",
        to: "https://spike-nuxtjs-pro-main.netlify.app/forms/form-elements/button",
        chip: "Pro",
        external: true,
      },
      {
        title: "Checkbox",
        to: "https://spike-nuxtjs-pro-main.netlify.app/forms/form-elements/checkbox",
        chip: "Pro",
        external: true,
      },
      {
        title: "Custom Inputs",
        to: "https://spike-nuxtjs-pro-main.netlify.app/forms/form-elements/custominputs",
        chip: "Pro",
        external: true,
      },
      {
        title: "File Inputs",
        to: "https://spike-nuxtjs-pro-main.netlify.app/forms/form-elements/fileinputs",
        chip: "Pro",
        external: true,
      },
      {
        title: "Radio",
        to: "https://spike-nuxtjs-pro-main.netlify.app/forms/form-elements/radio",
        chip: "Pro",
        external: true,
      },
      {
        title: "Date Time",
        to: "https://spike-nuxtjs-pro-main.netlify.app/forms/form-elements/date-time",
        chip: "Pro",
        external: true,
      },
      {
        title: "Select",
        to: "https://spike-nuxtjs-pro-main.netlify.app/forms/form-elements/select",
        chip: "Pro",
        external: true,
      },
      {
        title: "Slider",
        to: "https://spike-nuxtjs-pro-main.netlify.app/forms/form-elements/slider",
        chip: "Pro",
        external: true,
      },
      {
        title: "Switch",
        to: "https://spike-nuxtjs-pro-main.netlify.app/forms/form-elements/switch",
        chip: "Pro",
        external: true,
      },
      {
        title: "Time Picker",
        to: "https://spike-nuxtjs-pro-main.netlify.app/forms/form-elements/timepicker",
        chip: "Pro",
        external: true,
      },
      {
        title: "Stepper",
        to: "https://spike-nuxtjs-pro-main.netlify.app/forms/form-elements/stepper",
        chip: "Pro",
        external: true,
      },
    ],
  },

  {
    title: "Form Input",
    icon: "book-minimalistic-outline",
    to: "/forms",
    children: [
      {
        title: "Form Layout",
        to: "https://spike-nuxtjs-pro-main.netlify.app/forms/form-layouts",
        chip: "Pro",
        external: true,
      },
      {
        title: "Form Horizontal",
        to: "https://spike-nuxtjs-pro-main.netlify.app/forms/form-horizontal",
        chip: "Pro",
        external: true,
      },
      {
        title: "Form Vertical",
        to: "https://spike-nuxtjs-pro-main.netlify.app/forms/form-vertical",
        chip: "Pro",
        external: true,
      },
      {
        title: "Form Custom",
        to: "https://spike-nuxtjs-pro-main.netlify.app/forms/form-custom",
        chip: "Pro",
        external: true,
      },
      {
        title: "Form Validation",
        to: "https://spike-nuxtjs-pro-main.netlify.app/forms/form-validation",
        chip: "Pro",
        external: true,
      },
    ],
  },
  {
    title: "Editor",
    icon: "gallery-edit-line-duotone",
    to: "https://spike-nuxtjs-pro-main.netlify.app/forms/editor",
    chip: "Pro",
    external: true,
  },

  { header: "Tables" },
  {
    title: "Basic Table",
    icon: "tablet-line-duotone",
    chip: "Pro",
    external: true,
    to: "https://spike-nuxtjs-pro-main.netlify.app/tables/basic",
  },
  {
    title: "Dark Table",
    icon: "bedside-table-2-linear",
    chip: "Pro",
    external: true,
    to: "https://spike-nuxtjs-pro-main.netlify.app/tables/dark",
  },
  {
    title: "Density Table",
    icon: "password-minimalistic-input-linear",
    chip: "Pro",
    external: true,
    to: "https://spike-nuxtjs-pro-main.netlify.app/tables/density",
  },
  {
    title: "Fixed Header Table",
    icon: "align-left-line-duotone",
    chip: "Pro",
    external: true,
    to: "https://spike-nuxtjs-pro-main.netlify.app/tables/fixed-header",
  },
  {
    title: "Height Table",
    icon: "bookmark-square-minimalistic-outline",
    chip: "Pro",
    external: true,
    to: "https://spike-nuxtjs-pro-main.netlify.app/tables/height",
  },
  {
    title: "Editable Table",
    icon: "pen-new-square-broken",
    chip: "Pro",
    external: true,
    to: "https://spike-nuxtjs-pro-main.netlify.app/tables/editable",
  },

  { header: "Data Tables" },
  {
    title: "Basic Table",
    icon: "database-outline",
    chip: "Pro",
    external: true,
    to: "https://spike-nuxtjs-pro-main.netlify.app/datatables/basic",
  },
  {
    title: "Header Table",
    icon: "clapperboard-text-broken",
    chip: "Pro",
    external: true,
    to: "https://spike-nuxtjs-pro-main.netlify.app/datatables/headers",
  },
  {
    title: "Selection Table",
    icon: "documents-minimalistic-linear",
    chip: "Pro",
    external: true,
    to: "https://spike-nuxtjs-pro-main.netlify.app/datatables/selection",
  },
  {
    title: "Sorting Table",
    icon: "sort-from-bottom-to-top-linear",
    chip: "Pro",
    external: true,
    to: "https://spike-nuxtjs-pro-main.netlify.app/datatables/sorting",
  },
  {
    title: "Pagination Table",
    icon: "programming-linear",
    chip: "Pro",
    external: true,
    to: "https://spike-nuxtjs-pro-main.netlify.app/datatables/pagination",
  },
  {
    title: "Filtering Table",
    icon: "filter-outline",
    chip: "Pro",
    external: true,
    to: "https://spike-nuxtjs-pro-main.netlify.app/datatables/filtering",
  },
  {
    title: "Grouping Table",
    icon: "users-group-rounded-line-duotone",
    chip: "Pro",
    external: true,
    to: "https://spike-nuxtjs-pro-main.netlify.app/datatables/grouping",
  },
  {
    title: "Table Slots",
    icon: "server-line-duotone",
    chip: "Pro",
    external: true,
    to: "https://spike-nuxtjs-pro-main.netlify.app/datatables/slots",
  },
  {
    title: "CRUD Table",
    icon: "medal-star-square-outline",
    chip: "Pro",
    external: true,
    to: "https://spike-nuxtjs-pro-main.netlify.app/datatables/crudtable",
  },

  { header: "Charts" },
  {
    title: "Apex Charts",
    icon: "pie-chart-2-linear",
    to: "/charts",
    children: [
      {
        title: "Line",
        to: "https://spike-nuxtjs-pro-main.netlify.app/charts/line-chart",
        chip: "Pro",
        external: true,
      },
      {
        title: "Gredient",
        to: "https://spike-nuxtjs-pro-main.netlify.app/charts/gredient-chart",
        chip: "Pro",
        external: true,
      },
      {
        title: "Area",
        to: "https://spike-nuxtjs-pro-main.netlify.app/charts/area-chart",
        chip: "Pro",
        external: true,
      },
      {
        title: "Candlestick",
        to: "https://spike-nuxtjs-pro-main.netlify.app/charts/candlestick-chart",
        chip: "Pro",
        external: true,
      },
      {
        title: "Column",
        to: "https://spike-nuxtjs-pro-main.netlify.app/charts/column-chart",
        chip: "Pro",
        external: true,
      },
      {
        title: "Doughnut & Pie",
        to: "https://spike-nuxtjs-pro-main.netlify.app/charts/doughnut-pie-chart",
        chip: "Pro",
        external: true,
      },
      {
        title: "Radialbar & Radar",
        to: "https://spike-nuxtjs-pro-main.netlify.app/charts/radialbar-chart",
        chip: "Pro",
        external: true,
      },
    ],
  },

  { header: "Auth" },
  {
    title: "Login",
    icon: "user-linear",
    to: "/auth/login",
  },
  {
    title: "Register",
    icon: "user-hand-up-linear",
    to: "/auth/register",
  },
  {
    title: "Auth Pages",
    icon: "shield-user-outline",
    to: "/auth",
    children: [
      {
        title: "Side Login",
        to: "https://spike-nuxtjs-pro-main.netlify.app/auth/login",
        chip: "Pro",
        external: true,
      },
      {
        title: "Boxed Login",
        to: "https://spike-nuxtjs-pro-main.netlify.app/auth/login2",
        chip: "Pro",
        external: true,
      },
      {
        title: "Side Register",
        to: "https://spike-nuxtjs-pro-main.netlify.app/auth/register2",
        chip: "Pro",
        external: true,
      },
      {
        title: "Boxed Register",
        to: "https://spike-nuxtjs-pro-main.netlify.app/auth/register",
        chip: "Pro",
        external: true,
      },
      {
        title: "Side Forgot Password",
        to: "https://spike-nuxtjs-pro-main.netlify.app/auth/forgot-password",
        chip: "Pro",
        external: true,
      },
      {
        title: "Boxed Forgot Password",
        to: "https://spike-nuxtjs-pro-main.netlify.app/auth/forgot-password2",
        chip: "Pro",
        external: true,
      },
      {
        title: "Side Two Steps",
        to: "https://spike-nuxtjs-pro-main.netlify.app/auth/two-step",
        chip: "Pro",
        external: true,
      },
      {
        title: "Boxed Two Steps",
        to: "https://spike-nuxtjs-pro-main.netlify.app/auth/two-step2",
        chip: "Pro",
        external: true,
      },
    ],
  },
  {
    title: "Error",
    icon: "bug-line-duotone",
    to: "https://spike-nuxtjs-pro-main.netlify.app/auth/404",
    chip: "Pro",
    external: true,
  },
  {
    title: "Maintenance",
    icon: "settings-line-duotone",
    to: "https://spike-nuxtjs-pro-main.netlify.app/auth/maintenance",
    chip: "Pro",
    external: true,
  },
  { header: "Extra" },
  {
    title: "Icons",
    icon: "ghost-smile-outline",
    to: "/pages/icons",
  },
  {
    title: "Sample Page",
    icon: "book-bookmark-linear",
    to: "/pages/sample-page",
  },
];

export default sidebarItem;
