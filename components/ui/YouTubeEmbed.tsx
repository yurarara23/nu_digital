type YouTubeEmbedProps = {
  videoId: string;
  title?: string;
};

export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  return (
    <div className="mt-8 aspect-video w-full overflow-hidden bg-blue-950 shadow-xl shadow-blue-950/20">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title ?? "YouTube video"}
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}
