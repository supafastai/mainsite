import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <div className="flex flex-col text-left items-start justify-center">
        <h1 className="text-4xl font-bold">Your Unfair Advantage</h1>
        <p className="text-lg">
          AI-powered competitor insights to help you make better decisions.
          <br />
          Join our waitlist to get early access.
        </p>
        <Button>Join waitlist</Button>
      </div>
      <div>Image here</div>
    </div>
  );
}
