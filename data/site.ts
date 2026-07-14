export const siteConfig = {
  name: "nu_digital",
  url: "https://nu-meta.vercel.app",
  description:
    "nu_digitalは、ゲーム制作、VRChatワールド、3Dモデル、Webなどのデジタル創作に取り組むプロジェクト団体です。",
  ogImage: "/ogp/member.png",
};

export const brand = {
  blue: "#004aad",
  white: "#ffffff",
  ink: "#071b3f",
  pale: "#f4f8ff",
  line: "#dbe7ff",
};

export const navItems = [
  { name: "Home", href: "/" },
  { name: "News", href: "/news" },
  { name: "Blog", href: "/blog" },
  { name: "Project", href: "/project" },
  { name: "Terms", href: "/terms" },
];

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/yurarara23/nu.meta",
    type: "github",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCP50CAz2iyb8KKa3EV5BGKw",
    type: "youtube",
  },
  {
    label: "X",
    href: "https://x.com/nuMetasou",
    type: "x",
  },
] as const;

export const heroSlides = [
  {
    src: "/yurarara/IVRC/ivrc5.jpg",
    alt: "IVRCに出展した作品の展示風景",
  },
  {
    src: "/yurarara/vkasai/3.png",
    alt: "V化祭での展示風景",
  },
  {
    src: "/mizmelon/DG/dimmgate_top.webp",
    alt: "VRChatワールド DimensionsGate",
  },
];

export const homeFeatureTiles = [
  {
    title: "Game / VR",
    description: "遊べる体験、VRChatワールド、インタラクティブな展示を制作します。",
  },
  {
    title: "Creative Tech",
    description: "3D、Web、映像、サウンドを横断して作品の形を探ります。",
  },
  {
    title: "Community",
    description: "勉強会、展示、制作会を通してメンバーの創作を育てます。",
  },
];

export const memberImages = [
  "member_alma.jpg",
  "member_ff.jpg",
  "member_iwa.jpg",
  "member_lemonkey.jpg",
  "member_mizmelon.jpg",
  "member_nero.jpg",
  "member_potty.jpg",
  "member_s.jpg",
  "member_syama.jpg",
  "member_takoyaki.jpg",
  "member_yoshi.jpg",
  "member_yura.jpg",
].map((fileName) => ({
  src: `/member/${fileName}`,
  alt: `nu_digital member ${fileName.replace(/\.[^.]+$/, "")}`,
}));

export const projectImages = Array.from({ length: 10 }, (_, index) => ({
  src: `/project/${index + 1}.jpg`,
  alt: `nu_digital project image ${index + 1}`,
}));

export const recruitImages = [
  { src: "/recruit/recruit_1.jpg", alt: "nu_digital recruitment image 1" },
  { src: "/recruit/recruit_2.jpg", alt: "nu_digital recruitment image 2" },
  { src: "/recruit/recruit_3.jpg", alt: "nu_digital recruitment image 3" },
];

export const homeCopy = {
  about:
    "nu_digitalは、VRChat向けのワールドやゲーム制作をはじめ、3Dモデル制作、Web開発、映像、サウンドなど、デジタル創作に特化したプロジェクト団体です。",
  project:
    "メンバーそれぞれの得意分野を持ち寄り、ゲーム制作、VRChatワールド、モデリング、デザイン、サウンド、Web開発など幅広い制作活動に取り組んでいます。技術書制作、イベント企画、広報、展示ブース制作、団体運営など、リアルとデジタルの両面から創作を広げています。",
};

export const homeLinks = {
  about: [
    {
      href: "https://numa-meta.com/posts/blogs/metasou/",
      label: "活動紹介",
    },
    {
      href: "https://nu-digital.github.io/nu-document/",
      label: "部内ドキュメント",
    },
  ],
  project: [
    { href: "/project", label: "制作物を見る" },
    {
      href: "https://www.youtube.com/channel/UCP50CAz2iyb8KKa3EV5BGKw",
      label: "公式YouTube",
    },
    {
      href: "https://numetaproject.booth.pm/",
      label: "公式Booth",
    },
  ],
  join: [
    { href: "https://x.com/nuMetasou", label: "公式Xを見る" },
    {
      href: "https://docs.google.com/forms/d/1XyNhN6aowMRva62H6plLdzpJDn9_OE4IUh69zu3vsrY/edit",
      label: "募集フォーム",
    },
  ],
};

export const featuredProjects = [
  {
    title: "DimensionsGate",
    description:
      "メタバース空間で4次元の不思議な体験を楽しめるVRChatワールドです。",
    image: "/mizmelon/DG/dimmgate_top.webp",
    link: "https://vrchat.com/home/world/wrld_d84a41e8-fd6a-4167-bc90-637af6fc3c41/info",
  },
];
