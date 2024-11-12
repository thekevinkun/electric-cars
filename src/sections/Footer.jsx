import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full padding-x sm:py-3 pt-8 pb-2">
      <ul className="flex flex-wrap flex-col sm:flex-row items-center justify-center">
        {footerLinks.map((item) => (
          <li className="lg:px-3 md:px-2 px-1 sm:py-0 py-1">
            <a
              href={item.url}
              className="font-code font-medium md:text-sm text-xs text-slate-zinc"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
