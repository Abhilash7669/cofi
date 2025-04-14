"use client";

import { postAxios } from "@/lib/api/axiosAPI";
import { SyntheticEvent } from "react";

type Props = object;

export default function Page({}: Props) {
  async function handleSubmit(
    e: SyntheticEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const email = formData.get("email") as string;
    const image = formData.get("image") as File;

    const newFormData = new FormData();
    newFormData.append("email", email);
    newFormData.append("image", image);

    const m_res = await postAxios<unknown>(
      "http://localhost:8080",
      newFormData,
      {
        headers: {},
      }
    );

    if (m_res) console.log(m_res, "RESPONSE");
  }

  return (
    <main className="h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="flex flex-col space-y-2">
          <label>Email</label>
          <input name="email" type="text" placeholder="johndoe@gmail.com" />
        </div>
        <div className="flex flex-col space-y-2">
          <label>Image</label>
          <input
            onChange={(e) => console.log(e, "CHANGE")}
            name="image"
            type="file"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
