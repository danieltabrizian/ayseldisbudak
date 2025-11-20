"use client";

export default function Section({
  children,
  variant = "white",
  className = "",
  id = "",
}) {
  const getBgClass = () => {
    switch (variant) {
      case "purple":
        return "section-purple";
      case "red":
        return "section-red";
      case "bright-purple":
        return "section-bright-purple";
      case "light-blue":
        return "section-light-blue";
      case "gradient":
        return "section-gradient";
      default:
        return "section-default";
    }
  };

  return (
    <section id={id} className={`section ${getBgClass()} ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
}
