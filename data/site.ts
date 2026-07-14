export const siteConfig = {
  name: "nu_digital",
  url: "https://nu-meta.vercel.app",
  description:
    "nu_digitalは、ゲーム制作、VRChatワールド、3Dモデル、Webなどのデジタル創作に取り組むプロジェクト団体です。",
  ogImage: "/ogp/member.png",
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

export const memberImages = [
  "member_yura.jpg",
  "member_iwa.jpg",
  "member_mizmelon.jpg",
  "member_syama.jpg",
  "member_nero.jpg",
  "member_potty.jpg",
  "member_alma.jpg",
  "member_yoshi.jpg",
  "member_ff.jpg",
  "member_lemonkey.jpg",
  "member_s.jpg",
  "member_takoyaki.jpg",
  "member_asi.jpg",
].map((fileName) => ({
  src: `/member/${fileName}`,
  alt: `nu_digital member ${fileName.replace(/\.[^.]+$/, "")}`,
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
    "ゲーム制作、VRChatワールド、モデリング、デザイン、サウンド、Web開発など幅広い制作活動に取り組んでいます。展示、イベント、技術発信、団体運営まで、リアルとデジタルの両面から創作を広げています。",
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
    title: "nu_room",
    description:
      "nu_digitalの拠点件活動や制作物を紹介するためのVRChatワールド。",
    image: "/contents/nu_room.png",
    link: "https://vrchat.com/home/world/wrld_560b9015-2293-4530-b97f-130125d37ccc/info",
  },
  {
    title: "FogLand",
    description:
      "霧に包まれた空間を魔法を使って探索できるオープンワールドVRChatゲームワールド。",
    image: "/contents/FogLand.png",
    link: "https://vrchat.com/home/world/wrld_83eb91f2-aaf8-4576-88eb-5e6f09103da7/info",
  },
  {
    title: "DimensionsGate",
    description: "メタバース空間で4次元を体験を楽しめるVRChatワールド。",
    image: "/contents/DimensionsGate.png",
    link: "https://vrchat.com/home/world/wrld_d84a41e8-fd6a-4167-bc90-637af6fc3c41/info",
  },
];
