'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface BackNavigationProps {
  label?: string;
}

export default function BackNavigation({ label = 'Back to Home' }: BackNavigationProps) {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-grey-energy hover:text-white-warm transition-colors group"
    >
      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}