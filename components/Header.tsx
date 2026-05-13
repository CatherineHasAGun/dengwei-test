import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/site";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/test", label: "答题" },
  { href: "/result", label: "结果" },
  { href: "/poster", label: "海报" },
];

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-[480px] items-center justify-between gap-4 pl-0 pr-5 py-5">
      <Link className="flex shrink-0 items-center" href="/">
        <Image
          alt="你有多登？"
          className="h-auto w-56"
          height={256}
          src={withBasePath("/logo.png")}
          width={276}
        />
      </Link>
      <nav className="flex items-center gap-1 rounded-full bg-white/55 p-1 text-xs font-bold text-ink/70 backdrop-blur">
        {navItems.map((item) => (
          <Link
            className="rounded-full px-3 py-2 transition hover:bg-white hover:text-ink"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
