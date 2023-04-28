import { p_01, p_02, p_03, p_04, p_05, p_06 } from '../assets'
import { c_01, c_02, c_03 } from '../assets'


export const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
  },
  {
    id: 'mission',
    title: 'Mission',
  },
  {
    id: 'blog',
    title: 'Blog',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

export const features = [
  {
    id: '01',
    title: 'Graphic Design',
    content: 'Compore iddem isla del lannae insumi duto, la rari soum',
  },
  {
    id: '02',
    title: 'Web & Mobile Design',
    content: 'Compore iddem isla del lannae insumi duto, la rari soum',
  },
  {
    id: '03',
    title: 'Social Media Marketing',
    content: 'Compore iddem isla del lannae insumi duto, la rari soum',
  },
  {
    id: '04',
    title: 'Document Legal Policy',
    content: 'Compore iddem isla del lannae insumi duto, la rari soum',
  }
]

export const categories = [
  {
    id: '01',
    title: 'ALL',
  },
  {
    id: '02',
    title: 'BRANDING',
  },
  {
    id: '03',
    title: 'CREATIVE',
  },
]

export const posts = [
  {
    id: '01',
    title: 'Inovation and Crafts',
    info: 'Project info goes in here',
    img: p_01,
    tags: ['branding', 'tech', 'books', 'design'],
    category: '01'
  },
  {
    id: '02',
    title: 'Inspiring new spaces',
    info: 'Project info goes in here',
    img: p_06,
    tags: ['books', 'design'],
    category: '02'
  },
  {
    id: '03',
    title: 'Natural plus modern',
    info: 'Project info goes in here',
    img: p_02,
    tags: ['tech', 'books'],
    category: '01'
  },
  {
    id: '04',
    title: 'Mobile tech',
    info: 'Project info goes in here',
    img: p_03,
    tags: ['design'],
    category: '01'
  },
  {
    id: '05',
    title: 'Longview CA',
    info: 'Project info goes in here',
    img: p_04,
    tags: ['branding', 'design'],
    category: '03'
  },
  {
    id: '06',
    title: 'Books for 2023',
    info: 'Project info goes in here',
    img: p_05,
    tags: ['branding'],
    category: '03'
  },
  {
    id: '07',
    title: 'Books for 2023',
    info: 'Project info goes in here',
    img: p_05,
    tags: ['branding'],
    category: '02'
  },
  {
    id: '08',
    title: 'Books for 2023',
    info: 'Project info goes in here',
    img: p_05,
    tags: ['branding'],
    category: '01'
  },
]

export const test = [
  {
    id: '01',
    name: 'Alex Huffman',
    title: 'CEO',
    workplace: 'Danish Floor',
    comment: 'I would highly recommend Vie Digital. I worked with the team on an animation for our Click & Collect service.',
    img: c_01
  },
  {
    id: '02',
    name: 'Pierre Doe',
    title: 'Head of Design',
    workplace: 'Cadence, Tampa',
    comment: 'Great experience working with XYZ Web Development Agency! Their team was highly skilled, responsive, and delivered a beautiful website on time.',
    img: c_03
  },
  {
    id: '03',
    name: 'Janice Oppel',
    title: 'Marketing dr',
    workplace: 'Tesla Inc.',
    comment: 'Fantastic experience working with DEF Web Development Agency! They were able to create a modern and sleek website for my business in a timely manner.',
    img: c_02
  },
]

export const blogPosts = [
  {
    id: '01',
    date: '13 MAY',
    title: 'Accumsan lacus vel facilisis volutpat est velit',
    content: 'Cras semper auctor neque vitae tempus quam. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Eu scelerisque felis imperdiet',
    img: `bg-[url('./assets/blog_01.jpg')]`
  },
  {
    id: '02',
    date: '29 March',
    title: 'Varius sit amet mattis vulputate enim nulla aliquet porttitor.',
    content: 'Vel orci porta non pulvinar neque. Sit amet commodo nulla facilisi nullam. Etiam tempor orci eu lobortis',
    img: `bg-[url('./assets/blog_02.jpg')]`
  },
  {
    id: '03',
    date: '04 JULY',
    title: 'Amet venenatis urna cursus eget',
    content: 'Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Nascetur ridiculus mus mauris vitae ultricies',
    img: `bg-[url('./assets/blog_03.jpg')]`
  },
]