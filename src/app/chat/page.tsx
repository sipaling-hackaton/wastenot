"use client"
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {chatGemini} from "@/app/chat/gemini";
import {useFormState, useFormStatus} from "react-dom";
import {useEffect, useState} from "react";
import Image from "next/image";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";


interface ChatProps {
  text: string;
  index: number;
  img: string;
  sender: "user" | "model";
}

export default function Chat() {
  // @ts-ignore
  const [state, formAction] = useFormState(chatGemini);
  const [userHistory, setUserHistory] = useState<ChatProps[]>([{
    text: "",
    index: 0,
    img: "",
    sender: "user"
  }])

  const [modelHistory, setModelHistory] = useState<ChatProps[]>([{
    text: "",
    index: 0,
    img: "",
    sender: "model"
  }])

  const [history, setHistory] = useState<ChatProps[]>([])

  useEffect(() => {

  }, []);

  const [imgURL, setImgUrl] = useState()
  useEffect(() => {
    if (state) {

    }
  }, [state])
  return (
      <form
          action={formAction}
          className={"relative flex flex-col justify-end h-full"}
      >

        {/*chat history section*/}
        <div className="flex flex-col p-6 gap-2.5">
          <h1
              className={"text-2xl font-bold text-center"}
          >
          </h1>
          <div
              className={"flex-col flex gap-2.5 rounded-2xl "}
          >
            {
              userHistory.map((item, index) => {
                if (!item.text) return;
                return (
                    <section
                        key={index}
                        className={"flex flex-row gap-2.5 justify-end"}
                    >
                      <p
                          className={"p-3 text-black text-right bg-primaryGrey rounded-r-2xl rounded-t-2xl"}
                      >
                        {item.text}
                      </p>
                      <Avatar>
                        <AvatarImage src="image/logo.png"
                                     className={"p-[0.5px]"}
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </section>
                )
              })
            }
            {
              modelHistory.map((item, index) => {
                if (!item.text) return;
                return (
                    <section
                        key={index}
                        className={"flex flex-row gap-2.5 max-w-[75vw]"}
                    >
                      <Avatar>
                        <AvatarImage src="image/logo.png"
                                     className={"p-[0.5px]"}
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <p
                          className={"p-3 text-black text-left bg-primaryGrey rounded-l-2xl rounded-t-2xl"}
                      >
                        {item.text}
                      </p>
                    </section>
                )
              })
            }
          </div>
        </div>

        {/* input section */}
        <div className="sticky bottom-0 flex flex-row w-full px-2 py-3">
          <Input
              name={"input"}
              className={"w-full outline-none"}
              type="input"
              placeholder="input"
              style={{
                borderRight: "none",
              }}
          />
          <label
              htmlFor={"file"}
              className={""}
          >
            <Image
                className={"cursor-pointer border-2 border-primaryGrey h-full w-[2.5rem] rounded-r-xl opacity-75"}
                style={{
                  borderLeft: "none",
                }}
                src={"/image/paperclip.svg"}
                alt={"image icon"}
                width={24}
                height={24}
            />
            <Input
                className={"w-[5rem] h-auto hidden"}
                name={"file"}
                type={"file"}
                id={"file"}
            />
          </label>
          <Button
              type={"submit"}
              variant={"ghost"}
          >
            <Image
                src={"/image/send.svg"}
                alt={"send icon"}
                width={24}
                height={24}
            />
          </Button>
        </div>
      </form>
  )
}