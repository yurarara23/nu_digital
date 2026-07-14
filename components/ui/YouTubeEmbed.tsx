type YouTubeEmbedProps = {
  videoId: string;
  title?: string;
};

export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  return (
    <div className="mb-8 aspect-video w-full">
      <iframe
        className="h-full w-full rounded-xl"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title ?? "YouTube video"}
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}
