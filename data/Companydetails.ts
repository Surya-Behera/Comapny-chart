export interface Company {
    name: string;
    logo: string;
    data: number[];
    description?: string;
    color?: string;
}

export const companies: Company[] = [
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', data: [50, 60, 70, 80, 90], description: 'Global technology leader in internet services and innovation', color: 'from-blue-500 to-blue-700' },
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Apple_Logo.svg/1200px-Apple_Logo.svg.png', data: [50, 60, 70, 80, 90], description: 'Pioneering consumer electronics and software technology', color: 'from-gray-700 to-gray-900' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', data: [55, 65, 70, 80, 85], description: 'Enterprise software and cloud computing innovator', color: 'from-blue-600 to-blue-800' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', data: [45, 55, 65, 70, 80], description: 'E-commerce and cloud computing global powerhouse', color: 'from-orange-500 to-orange-700' },
    { name: 'Facebook', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg', data: [50, 60, 70, 75, 85], description: 'Social media and digital communication platform', color: 'from-indigo-500 to-indigo-700' },
    { name: 'Netflix', logo: 'https://deshicompanies.com/wp-content/uploads/2021/07/netflixlogo.0.0.jpg', data: [40, 60, 80, 85, 95], description: 'Streaming media and entertainment platform', color: 'from-red-500 to-red-700' },
    { name: 'Tesla', logo: 'http://blog.logomyway.com/wp-content/uploads/2019/06/tesla-logo.jpg', data: [60, 70, 80, 90, 100], description: 'Electric vehicle and clean energy company', color: 'from-red-700 to-red-900' },
    { name: 'Intel', logo: 'https://tse4.mm.bing.net/th?id=OIP.J3wt_bFoYkdb7NT_yunHIQHaEK&pid=Api&P=0&h=220', data: [50, 65, 75, 80, 85], description: 'Semiconductor and technology company', color: 'from-blue-500 to-blue-700' },
    { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/1920px-Adobe_Systems_logo_and_wordmark.svg.png', data: [55, 65, 75, 85, 95], description: 'Creative software and solutions provider', color: 'from-red-500 to-red-700' },
    { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg', data: [45, 55, 65, 70, 80], description: 'Technology and consulting services company', color: 'from-blue-800 to-blue-900' },
    { name: 'Spotify', logo: 'https://wikiake.com/wp-content/uploads/2022/01/Spotify-logo.jpeg', data: [45, 60, 70, 80, 85], description: 'Music streaming service', color: 'from-green-500 to-green-700' },
    { name: 'Twitter', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Twitter-Emblem.png', data: [55, 60, 70, 80, 90], description: 'Social media platform for sharing short messages', color: 'from-blue-400 to-blue-600' },
    { name: 'Snapchat', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Snapchat_logo.svg/150px-Snapchat_logo.svg.png', data: [40, 50, 60, 70, 80], description: 'Multimedia messaging app', color: 'from-yellow-500 to-yellow-700' },
    { name: 'LinkedIn', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png', data: [60, 70, 80, 90, 100], description: 'Professional networking platform', color: 'from-blue-600 to-blue-800' },
    { name: 'YouTube', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/500px-YouTube_Logo_2017.svg.png', data: [50, 60, 75, 85, 95], description: 'Video-sharing platform', color: 'from-red-500 to-red-700' },
    { name: 'Uber', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png', data: [40, 60, 75, 85, 95], description: 'Ride-sharing and transportation company', color: 'from-black-500 to-black-700' },
    { name: 'Continental', logo: 'https://png.pngitem.com/pimgs/s/21-219150_continental-wikipedia-logo-hd-png-download.png', data: [50, 60, 70, 80, 90], description: 'Automotive parts manufacturer', color: 'from-blue-600 to-blue-800' },
    { name: 'Dropbox', logo: 'https://tse1.mm.bing.net/th?id=OIP.pOzALIIotFIjc57dXsnb7AHaC0&pid=Api&P=0&h=220', data: [60, 70, 80, 90, 100], description: 'Cloud storage service provider', color: 'from-blue-500 to-blue-700' }
];
// ... (continue with all companies from the original data)


export const fullCompanyList: Company[] = [
    ...companies
];