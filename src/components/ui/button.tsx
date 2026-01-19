import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  // Base styles - pill shaped
  `inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full 
   text-[0.9375rem] font-medium tracking-wide transition-all duration-200
   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
   disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        primary: 
          `bg-[rgb(var(--color-navy))] text-white
           hover:bg-[rgb(var(--color-navy-light))]
           focus-visible:ring-[rgb(var(--color-navy))]`,
        secondary: 
          `bg-white text-[rgb(var(--color-navy))] border border-neutral-200
           hover:bg-neutral-50 hover:border-neutral-300
           focus-visible:ring-[rgb(var(--color-navy))]`,
        accent: 
          `bg-[rgb(var(--color-sage))] text-white
           hover:bg-[rgb(100,145,50)]
           focus-visible:ring-[rgb(var(--color-sage))]`,
        ghost: 
          `bg-transparent text-[rgb(var(--color-navy))]
           hover:bg-neutral-100
           focus-visible:ring-[rgb(var(--color-navy))]`,
        link: 
          `bg-transparent text-[rgb(var(--color-navy))] underline-offset-4
           hover:underline p-0 h-auto
           focus-visible:ring-[rgb(var(--color-navy))]`,
        outline: 
          `bg-transparent text-[rgb(var(--color-navy))] border-2 border-[rgb(var(--color-navy))]
           hover:bg-[rgb(var(--color-navy))] hover:text-white
           focus-visible:ring-[rgb(var(--color-navy))]`,
      },
      size: {
        default: 'h-12 px-6 py-3',
        sm: 'h-10 px-5 py-2 text-sm',
        lg: 'h-14 px-8 py-4',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  showArrow?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, showArrow = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    
    if (showArrow && !asChild) {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif' }}
          {...props}
        >
          <span>{children}</span>
          <span className={cn(
            "flex items-center justify-center rounded-full transition-colors",
            variant === 'primary' && "bg-white/20 w-7 h-7",
            variant === 'secondary' && "bg-[rgb(var(--color-navy))] text-white w-7 h-7",
            variant === 'accent' && "bg-white/20 w-7 h-7",
            variant === 'outline' && "bg-[rgb(var(--color-navy))] text-white w-7 h-7 group-hover:bg-white group-hover:text-[rgb(var(--color-navy))]",
            (!variant || variant === 'ghost' || variant === 'link') && "bg-neutral-200 w-7 h-7"
          )}>
            <ArrowRight className="w-4 h-4" />
          </span>
        </Comp>
      )
    }
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif' }}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

// Standalone arrow circle for link-style buttons
export function ArrowCircle({ 
  variant = 'dark',
  size = 'default' 
}: { 
  variant?: 'dark' | 'light' | 'sage'
  size?: 'sm' | 'default' | 'lg'
}) {
  return (
    <span className={cn(
      "inline-flex items-center justify-center rounded-full transition-all",
      variant === 'dark' && "bg-[rgb(var(--color-navy))] text-white",
      variant === 'light' && "bg-white text-[rgb(var(--color-navy))]",
      variant === 'sage' && "bg-[rgb(var(--color-sage))] text-white",
      size === 'sm' && "w-8 h-8",
      size === 'default' && "w-10 h-10",
      size === 'lg' && "w-12 h-12",
    )}>
      <ArrowRight className={cn(
        size === 'sm' && "w-4 h-4",
        size === 'default' && "w-5 h-5",
        size === 'lg' && "w-6 h-6",
      )} />
    </span>
  )
}

export { Button, buttonVariants }
