import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";
import { LucideIcon } from "lucide-react";

const inputVariants = cva(
    "flex w-full rounded-lg",
    {
        variants: {
            variant: {
                default: "border-input",
                filled: "border-transparent bg-muted",
                outline: "border-2 border-input",
                ghost: "border-transparent bg-transparent"
            },
            inputSize: {
                sm: "h-9 px-3 text-sm",
                md: "h-11 px-4 text-base",
                lg: "h-14 px-5 text-lg"
            },
            state: {
                default: "",
                error: "border-destructive",
            },
        },
        defaultVariants: {
            variant: "default",
            inputSize: "md",
            state: "default",
        },
    }
);



export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">, VariantProps<typeof inputVariants> {
    label?: string;
    leftIcon?: LucideIcon;
    rightIcon?: LucideIcon;
}


const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className,
            type,
            variant, 
            inputSize,
            state,
            label,
            leftIcon: LeftIcon,
            rightIcon: RightIcon,
            disabled,
            ...props
        }, 
        ref
) => {
    const hasError = state === "error";
    
    const iconSizeClass = inputSize === "sm" ? "w-4 h-4" : inputSize === "lg" ? "w-6 h-6" : "w-5 h-5";
    
    return (
        <div className="w-full space-y-2">
            {label &&(
                <label className={`block text-sm font-medium text-foreground ${disabled ? "opacity-50" : ""}`}
                >
                    {label}
                </label>
            )}
            <div className="relative">
                {LeftIcon &&(
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        <LeftIcon className={`transition-colors ${iconSizeClass}`}/>
                    </div>
                )}
                <input
                    type={type}
                    className={`${inputVariants({ variant, inputSize, state })} ${LeftIcon ? "pl-10" : ""} ${RightIcon ? "pr-10" : ""} ${className || ""}`}
                    disabled={disabled}
                    ref={ref}
                    {...props}
                    />

                    {RightIcon && (
                        <button className={`absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground ${disabled ? "cursor-not-allowed opacity-50" : ""}`}>
                    <RightIcon className={`transition-colors ${iconSizeClass}`}/>
                    
                    </button>)}
            </div>
        </div>
    )
}
);

Input.displayName = "Input";
export { Input, inputVariants };