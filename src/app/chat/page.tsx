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
  const [modelHistory, setModelHistory] = useState<ChatProps[]>([{
    text: "",
    index: 0,
    img: "",
    sender: "model"
  }])

  const [history, setHistory] = useState<ChatProps[]>([{
    text: "",
    index: 0,
    img: "",
    sender: "model"
  }])

  useEffect(() => {
    if (state) {
      setHistory(prevHistory => [
        ...prevHistory,
        {
          text: state.input?.text,
          index: 2,
          img: state.input?.image,
          sender: "user"
        },
        {
          text: state.output?.text,
          index: 2,
          img: state.output?.image,
          sender: "model"
        }
      ]);
      ;
    }
  }, [state])


  const handleAfterSubmit = (e: any) => {
    // reset form
    e.target.reset();
  }
  return (
      <form
          onSubmitCapture={handleAfterSubmit}
          action={formAction}
          className={"relative flex flex-col justify-end h-full pb-[3rem] z-[100]"}
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
              history?.map((item, index) => {
                if (!item.text) return null;

                const isModel = item.sender === "model";
                const isUser = item.sender === "user";

                return (
                    <section
                        key={index}
                        className={`flex flex-row gap-2.5 ${isModel ? 'max-w-[75vw]' : 'justify-end'}`}
                    >
                      {isModel && (
                          <Avatar>
                            <AvatarImage src="image/logo.png" className="p-[0.5px]"/>
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                      )}
                      <p
                          className={`p-3 text-black ${isModel ? 'text-left' : 'text-right'} bg-primaryGrey rounded-t-2xl ${
                              isModel ? 'rounded-l-2xl' : 'rounded-r-2xl'
                          }`}
                      >
                        {item.text}
                      </p>
                      {isUser && (
                          <Avatar>
                            <AvatarImage src="image/logo.png" className="p-[0.5px]"/>
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                      )}
                    </section>
                );
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