import Link from "next/link";

import { Wrapper } from "./Wrapper";
import { Logo } from "./Logo";
import { Button } from "./Button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white py-6">
      <Wrapper className="flex items-center justify-between">
        <Logo />
        <nav className="flex items-center gap-6 divide-x divide-gray-200">
          <ul className="flex gap-8">
            <li>
              <Link
                href="#"
                className="text-sm font-semibold text-gray-700 hover:text-blue-700"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm font-semibold text-gray-700 hover:text-blue-700"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="pl-6">
            <Button>
              <Link href="/signin">Sign in</Link>
            </Button>
          </div>
        </nav>
      </Wrapper>
    </header>
  );
};
