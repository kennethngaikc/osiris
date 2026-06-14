'use client';

import { useEffect, useState } from 'react';

export default function OsirisMapWrapper(props: any) {
  const [Inner, setInner] = useState<any>(null);

  useEffect(() => {
    import('./OsirisMapInner').then(mod => {
      setInner(() => mod.default);
    });
  }, []);

  if (!Inner) {
    return <div className="absolute inset-0 w-full h-full" style={{ background: '#0a0a14' }} />;
  }

  return <Inner {...props} />;
}
