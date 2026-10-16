import { useEffect, useRef, useState } from "react";

const heroVideo = "/media/scroll-hero.mp4";
const heroVideoMobile = "/media/scroll-hero-mobile.mp4";
const heroVideoWebm = "/media/scroll-hero.webm";
const heroPoster = "/media/hero-poster.png";

/**
 * Scroll-scrubbed background video.
 *
 * The video is never autoplayed: its currentTime is driven purely by document
 * scroll progress, smoothed with a rAF interpolation loop so fast scrolling
 * stays cinematic and stopping freezes the exact frame.
 */
export function ScrollVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const dimRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const isSmall = window.matchMedia("(max-width: 820px)").matches;
    const canH264 = video.canPlayType('video/mp4; codecs="avc1.42E01E"') !== "";
    video.src = canH264
      ? isSmall
        ? heroVideoMobile
        : heroVideo
      : heroVideoWebm;
    video.load();

    // iOS/Safari requires a play() gesture before seeking is reliable.
    const unlock = () => {
      video.play().then(() => video.pause()).catch(() => {});
    };
    unlock();
    window.addEventListener("touchstart", unlock, { once: true, passive: true });
    window.addEventListener("pointerdown", unlock, { once: true });

    const readProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      const duration = video.duration;
      if (Number.isFinite(duration) && duration > 0) {
        targetRef.current = progress * (duration - 0.05);
      }
    };

    const tick = () => {
      const diff = targetRef.current - currentRef.current;
      if (Math.abs(diff) > 0.0015) {
        currentRef.current += diff * 0.12;
        if (video.readyState >= 2) {
          try {
            video.currentTime = currentRef.current;
          } catch {
            /* seek not ready yet */
          }
        }
      }
      // Past the hero, deepen the veil and soften the footage so the
      // typography reads cleanly while the video stays present.
      const depth = Math.min(1, window.scrollY / (window.innerHeight * 0.9));
      const dim = dimRef.current;
      if (dim) dim.style.opacity = String(depth * 0.28);
      video.style.filter = `blur(${(depth * 2).toFixed(2)}px) saturate(${1 - depth * 0.1})`;
      video.style.transform = `scale(${1 + depth * 0.04})`;
      rafRef.current = requestAnimationFrame(tick);
    };

    const onScroll = () => readProgress();
    const onMeta = () => {
      readProgress();
      currentRef.current = targetRef.current;
      video.pause();
    };

    video.addEventListener("loadedmetadata", onMeta);
    video.addEventListener("error", () => setFailed(true));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    readProgress();
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      video.removeEventListener("loadedmetadata", onMeta);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("pointerdown", unlock);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-background">
      {failed ? (
        <img
          src={heroPoster}
          alt="Portrait of Guenna Ikram"
          className="h-full w-full object-cover opacity-70"
        />
      ) : (
        <video
          ref={videoRef}
          poster={heroPoster}
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 veil" />
      <div ref={dimRef} className="absolute inset-0 bg-background opacity-0" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/70 to-transparent" />
    </div>
  );
}
