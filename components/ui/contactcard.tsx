import * as React from "react";

const ContactCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-xl border border-gray-700 bg-gray-800 text-white shadow-md p-6 w-full max-w-md ${className}`} // Added padding and width control
    {...props}
  />
));
ContactCard.displayName = "ContactCard";

const ContactCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={`flex flex-col space-y-4 ${className}`} {...props}> {/* Adjusted spacing for content */}
    {props.children} {/* Ensure children are rendered */}
  </div>
));
ContactCardContent.displayName = "ContactCardContent";

export { ContactCard, ContactCardContent };
