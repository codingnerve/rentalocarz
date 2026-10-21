import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-3 py-24 text-center sm:px-6">
      <p className="text-8xl font-extrabold text-brand" style={{ fontFamily: "var(--font-sora)" }}>
        404
      </p>
      <h1 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl">Wrong turn — this page isn&apos;t here.</h1>
      <p className="mt-4 max-w-md text-ink-muted">
        The page may have moved or never existed. Head back to the start and we&apos;ll point you the right way.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/" size="lg">
          Back to home
        </Button>
        <Button href="/contact#quote" variant="secondary" size="lg">
          Get a Quote
        </Button>
      </div>
    </div>
  );
}
