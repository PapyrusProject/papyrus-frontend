import Link from "next/link";

import { Wrapper } from "./Wrapper";
import { Button } from "./Button";

export const Hero = () => {
  return (
    <section className="py-24">
      <Wrapper className="space-y-10">
        <div className="mx-auto max-w-xl space-y-6">
          <h1 className="text-center text-6xl font-extrabold text-gray-900">
            Enjoy note taking with your friends
          </h1>
          <div className="mx-auto max-w-sm">
            <p className="text-center text-lg text-gray-600">
              Put your thoughts in an app, share it with your friends and loved
              ones.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-6">
          <Button size="lg">Get Papyrus</Button>
          <Button color="secondary" size="lg" variant="text">
            <Link href="/docs">Docs</Link>
          </Button>
        </div>
      </Wrapper>
    </section>
  );
};
