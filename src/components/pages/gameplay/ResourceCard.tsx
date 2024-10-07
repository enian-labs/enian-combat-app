import { RESOURCE_LIST } from '@/constant/core';
import Image from '@/lib/Image';
import { cn, letterFormatMoney } from '@/lib/utils';
import React from 'react';

export default function ResourceCard({
   item,
   className,
   textClassName,
   size,
}: {
   item: (typeof RESOURCE_LIST)[0];
   className?: string;
   textClassName?: string;
   size?: number;
}) {
   return (
      <div
         className={cn(
            'flex items-center gap-2 rounded-full border border-black/0 bg-black/40 backdrop-blur-[6px]',
            className
         )}
      >
         <Image
            src={item.img}
            alt={item.name}
            width={size || 42}
            height={size || 42}
         />
         <div
            className={cn(
               'py-2.5 pr-[1.125rem] text-base font-bold text-white',
               textClassName
            )}
         >
            {letterFormatMoney(item.total, 3)}
         </div>
      </div>
   );
}