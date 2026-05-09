import type { ReactNode } from "react";

export type FooterLink = {
  text?: string;
  href?: string;
  content?: ReactNode;
};

export type FooterLinkColumnProps = {
  title: string;
  links: FooterLink[];
};

export const FooterLinkColumn = ({ title, links }: FooterLinkColumnProps) => (
  <div>
    <h4 className="text-gray-900 font-semibold mb-4 md:mb-5">{title}</h4>
    <ul className="space-y-3 md:space-y-4">
      {links.map((link, i) =>
        link.content ? (
          <li key={i}>{link.content}</li>
        ) : (
          <li key={i}>
            <a
              href={link.href}
              className="text-gray-400 text-sm md:text-base hover:text-sky-500 transition-colors"
            >
              {link.text}
            </a>
          </li>
        ),
      )}
    </ul>
  </div>
);
