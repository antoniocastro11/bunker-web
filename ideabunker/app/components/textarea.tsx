import * as React from "react"


export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({
        label,
        className,
        ...props
    }, ref ) => {
        return (
            <div>
                {label && (
                    <label> {label} </label>
                )}
                <textarea className='flex min-h-[130px] w-full rounded-xl border-[2px] border-input bg-transparent px-5 py-4 text-primary-text text-xs'
                ref={ref}
                {...props}/>
            </div>
        )
    });


TextArea.displayName = 'TextArea'
export {TextArea}
