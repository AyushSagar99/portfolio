"use client";
import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { profile } from "@/lib/data";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.3);
  return (
    <section id="contact" ref={ref} className="scroll-mt-16 px-4 py-12 sm:px-6">
      <h2 className="mb-2 text-lg font-semibold tracking-tight">Contact</h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Reach me directly at{" "}
        <a className="underline" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-6 flex max-w-xl flex-col gap-3"
        action={async (formData) => {
          const { error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully");
        }}
      >
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Your email"
          className="h-11 rounded-md border border-zinc-200 bg-transparent px-3 text-sm outline-none transition focus:border-zinc-400 dark:border-zinc-800 dark:focus:border-zinc-600"
        />
        <textarea
          name="message"
          required
          maxLength={5000}
          placeholder="Your message"
          className="h-40 rounded-md border border-zinc-200 bg-transparent p-3 text-sm outline-none transition focus:border-zinc-400 dark:border-zinc-800 dark:focus:border-zinc-600"
        />
        <SubmitBtn />
      </form>
    </section>
  );
}
