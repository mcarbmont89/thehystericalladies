import Image from 'next/image'
import type { Review } from '@/data/types'
import StarRating from './StarRating'

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="bg-surface border border-border rounded-sm p-6 flex flex-col gap-4 shadow-card">
      <div className="flex items-center justify-between gap-3">
        {review.logo ? (
          <div className="relative h-8 w-24 flex-shrink-0">
            <Image src={review.logo} alt={review.source} fill
              className="object-contain object-left" sizes="96px" />
          </div>
        ) : null}
        {review.rating && <StarRating rating={review.rating} />}
      </div>
      <blockquote className="text-xl font-bold font-display italic text-text leading-snug flex-1">
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <footer className="flex items-center justify-between text-xs text-muted border-t border-border pt-3 mt-auto">
        <cite className="not-italic font-semibold text-accent underline underline-offset-2">{review.source}</cite>
        <span>{review.city} · {review.date}</span>
      </footer>
    </article>
  )
}
