import SectionHeader from "./SectionHeader";
import ButtonLink from "./ButtonLink";

const members = [
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
];

const AboutUs = () => {
  return (
    <section
      className="relative px-6 py-12 text-white"
      aria-label="What is Nu.Metasou section"
    >
      <div className="relative z-20 max-w-6xl mx-auto text-center">
        <SectionHeader
          title="About Us"
          description={`nu_digitalは、VRC（VRChat）向けのワールドやギミックの制作をはじめ、

3Dモデル制作やWeb開発など、デジタル分野に特化した創作活動を行うプロジェクト団体です。`}
        />

        {/* メンバー画像 */}
        <div className="grid grid-cols-3 gap-4 my-10">
          {members.map((member, index) => (
            <div key={index} className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={`/member/${member}`}
                alt={`member-${index}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <ButtonLink href="https://numa-meta.com/posts/blogs/metasou/">
            活動紹介
          </ButtonLink>

          <ButtonLink href="https://nu-digital.github.io/nu-document/">
            部内ドキュメント
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
