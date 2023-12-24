const linkAdmin = [
  {
    link: '/admin/dashboard',
    icon: 'fas fa-chart-bar',
    title: 'DashBoard',
    expend: false,
  },
  {
    link: '/admin/business',
    icon: 'fas fa-building',
    title: 'Business',
    expend: [
      {
        link: '/admin/business/size',
        icon: 'fas fa-building',
        title: 'Size',
      },
      {
        link: '/admin/business/category',
        icon: 'fas fa-building',
        title: 'Category',
      },
      {
        link: '/admin/business/report',
        icon: 'fas fa-building',
        title: 'Report',
      },
      {
        link: '/admin/business/brand',
        icon: 'fas fa-building',
        title: 'Brand',
      },
    ],
  },
    

];

export default linkAdmin;
