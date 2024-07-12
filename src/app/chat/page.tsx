"use client"
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {chatGemini} from "@/app/chat/gemini";
import {useFormState, useFormStatus} from "react-dom";
import {useEffect, useState} from "react";
import Image from "next/image";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export default function Chat() {
  // @ts-ignore
  const [state, formAction] = useFormState(chatGemini);
  const [history, setHistory] = useState([{input: "", output: ""}]);
  const [imgURL, setImgUrl] = useState()
  useEffect(() => {
    if (state) {
      // @ts-ignore
      console.log(state)
      setHistory([...history, {
        input: state.input,
        output: state.output
      }])
    }
  }, [state])
  const reader = new FileReader();
  const [imageState, setImageState] = useState(null);
  // useEffect(() => {
  //   if (imageState) {
  //     // @ts-ignore
  //     setHistory([...history, imageState])
  //   }
  // }, [imageState])
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
          {
            history?.map((item, index) => {
              if (!item.input) return;
              return (
                  <div
                      className={"flex-col flex gap-2.5 rounded-2xl "}
                      key={index}
                  >
                    <section
                        className={"flex flex-row-reverse gap-2.5"}
                    >
                      <Avatar>
                        <AvatarImage src="image/logo.png"/>
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <p
                          className={"p-3 text-right bg-primaryGreen rounded-l-2xl rounded-t-2xl text-white"}
                      >
                        {item.input.text}
                      </p>
                      <Image
                          src={
                            // parse from File to
                            reader.readAsDataURL(item.input.image)
                          }
                          alt={
                            "image"
                          }
                          width={25}
                          height={25}
                      />
                    </section>

                    <section
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
                        {item.output}
                      </p>
                    </section>
                  </div>
              )
            })
          }
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