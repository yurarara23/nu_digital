type SectionHeaderProps = {
  title: string;
  description?: string;
};

export default function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <>
      <h2 className="mb-4 text-4xl font-extrabold italic tracking-tighter text-white">
        {title}
      </h2>
      <div className="mx-auto mb-8 h-1 w-20 rounded-full bg-cyan-500" />

      {description && (
        <p className="mb-8 whitespace-pre-line text-lg leading-relaxed text-gray-200">
          {description}
        </p>
      )}
    </>
  );
}
