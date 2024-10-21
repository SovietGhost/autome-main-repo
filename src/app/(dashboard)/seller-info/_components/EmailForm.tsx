"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

import { api } from "~/trpc/react";

export default function EmailForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const user = useUser();

  const mutation = api.email.send.useMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    mutation.mutate(
      {
        fullName,
        email,
        message,
      },
      {
        onSuccess: () => {
          alert("Message sent successfully");
        },
        onError: (error) => {
          alert(error.message);
        },
      },
    );
    // Reset form fields after submission
    setFullName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-6 py-10">
      <div>
        <Label htmlFor="fullName">Tam ad</Label>
        <Input
          id="fullName"
          type="text"
          placeholder="John Doe"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Select required onValueChange={setEmail}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Email" />
          </SelectTrigger>
          <SelectContent>
            {user.user &&
              user.user.emailAddresses.map((emailAddress) => (
                <SelectItem
                  key={emailAddress.id}
                  value={emailAddress.emailAddress}
                >
                  {emailAddress.emailAddress}
                </SelectItem>
              ))}
              <SelectItem value="automeauc@gmail.com">
                automeauc@gmail.com
              </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="message">Mesaj</Label>
        <Textarea
          id="message"
          placeholder="Your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="min-h-[150px]"
        />
      </div>
      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  );
}
