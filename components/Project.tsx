import SectionHeader from "./SectionHeader";
import YouTubeEmbed from "./YouTubeEmbed";
import ButtonLink from "./ButtonLink";
import ImageCarousel from "./ImageCarousel";

const images = [
  { src: "/project/1.jpg", alt: "Project 1" },
  { src: "/project/2.jpg", alt: "Project 2" },
  { src: "/project/3.jpg", alt: "Project 3" },
  { src: "/project/4.jpg", alt: "Project 4" },
  { src: "/project/5.jpg", alt: "Project 5" },
  { src: "/project/6.jpg", alt: "Project 6" },
  { src: "/project/7.jpg", alt: "Project 7" },
  { src: "/project/8.jpg", alt: "Project 8" },
  { src: "/project/9.jpg", alt: "Project 9" },
  { src: "/project/10.jpg", alt: "Project 10" },
];

const Project = () => {
  return (
    <section className="relative px-6 py-12 text-white">
      <div className="relative z-20 max-w-6xl mx-auto text-center">
        <SectionHeader
          title="Project"
          description={`nu_digital では、メンバーそれぞれの得意分野を掛け合わせ、
ゲーム制作や VRChat 向けワールド制作を中心に、モデリング・デザイン・サウンド・Web 開発など幅広い制作活動を行っています。
また、技術書制作、イベント企画、広報、展示ブース制作、団体運営など、リアルとデジタルの両面から創作活動に取り組んでいます。`}
        />

        {/* カルーセル */}
        <div className="mt-10">
          <ImageCarousel images={images} />
        </div>

        <YouTubeEmbed videoId="HHPRAg5ijXE" title="Nu.メタ創 Project Movie" />

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <ButtonLink href="/project">制作物リンク</ButtonLink>

          <ButtonLink href="https://www.youtube.com/channel/UCP50CAz2iyb8KKa3EV5BGKw">
            公式 YouTube
          </ButtonLink>

          <ButtonLink href="https://numetaproject.booth.pm/">
            公式 Booth
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default Project;
