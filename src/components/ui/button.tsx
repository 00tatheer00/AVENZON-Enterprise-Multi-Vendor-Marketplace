import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/core/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 min-h-[44px]',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary/90 shadow-sm',
        container: 'bg-primary-container text-on-primary-container hover:opacity-90 shadow-sm',
        destructive: 'bg-error text-white hover:bg-error/90 shadow-sm',
        outline: 'border border-outline-variant bg-transparent hover:bg-surface-container-low text-foreground',
        secondary: 'bg-surface-container text-foreground hover:bg-surface-container-high',
        ghost: 'hover:bg-surface-container-low text-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-5 py-2 text-sm',
        sm: 'h-9 rounded-md px-3 text-xs min-h-[36px]',
        lg: 'h-12 rounded-xl px-8 text-base min-h-[48px]',
        icon: 'h-11 w-11 p-0 flex items-center justify-center',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
