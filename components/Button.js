"use client";

import Link from "next/link";

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
  target,
}) {
  const getVariantClass = () => {
    switch (variant) {
      case "primary":
        return "btn-primary";
      case "primary-reversed":
        return "btn-primary-reversed";
      case "accent":
        return "btn-accent";
      case "outline":
        return "btn-outline";
      case "outline-white":
        return "btn-outline-white";
      default:
        return "btn-primary";
    }
  };

  const classes = `btn ${getVariantClass()} ${className}`;

  if (href) {
    // External links (starting with http)
    if (href.startsWith("http")) {
      return (
        <a
          href={href}
          className={classes}
          target={target || "_blank"}
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    // Internal links
    return (
      <Link href={href} className={classes} target={target}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
