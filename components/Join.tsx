import SectionHeader from "./SectionHeader";
import ButtonLink from "./ButtonLink";
import ImageCarousel from "./ImageCarousel";

const New = () => {
  const images = [
    { src: "/recruit/recruit_1.jpg", alt: "Project 1" },
    { src: "/recruit/recruit_2.jpg", alt: "Project 2" },
    { src: "/recruit/recruit_3.jpg", alt: "Project 3" },
  ];

  return (
    <section className="px-6 py-12 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeader title="Join nu.digital" description={``} />

        <div className="mt-10">
          <ImageCarousel images={images} />
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <ButtonLink href="https://x.com/nuMetasou">公式Xはこちら</ButtonLink>

          <ButtonLink href="https://docs.google.com/forms/d/1XyNhN6aowMRva62H6plLdzpJDn9_OE4IUh69zu3vsrY/edit">
            募集フォームはこちら
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default New;
