"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./components/Button";
import MailBox from "./components/MailBox";
import RandomEmailBox from "./components/RandomEmailBox";
import Title from "./components/Title";
import About from "./components/About";
import MessagePageBox from "./components/MessagePageBox";
import EmailDisplay from "./components/MessagePageBox";



const Home: React.FC = () => {
  const [refresh, setRefresh] = useState(false);
  const [del, setDelete] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [message, setMessageData] = useState<any[]>([]);
  const [username, setUsername] = useState<string>("");
  const [domain, setDomain] = useState<string>("");
  const [messageShow, setMessageShow] = useState(false);
  const [messageSubject, setMessageSubject] = useState<string>("");
  const [messageFrom, setMessageFrom] = useState<string>("");
  const [messageTextBody, setMessageTextBody] = useState<string>("");

  useEffect(() => {
    let interval: NodeJS.Timeout;
    async function getEmail() {
      const res = await fetch(
        "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
      );
      const randomEmail = await res.json();
      setEmail(randomEmail);
      const email = randomEmail[0];
      const atIndex = email.indexOf("@");
      const username = email.substring(0, atIndex);
      setUsername(username);
      const domain = email.substring(atIndex + 1);
      setDomain(domain);

      interval = setInterval(async () => {
        try {
          const res2 = await fetch(
            `https://www.1secmail.com/api/v1/?action=getMessages&login=${username}&domain=${domain}`
          );
          const messageData = await res2.json();
          setMessageData(messageData);
        } catch (error) {
          console.log("Error fetching messages:", error);
        }
      }, 10000); // Intervalle de 10 secondes
    }
    getEmail();

    return () => {
      clearInterval(interval);
    };
  }, [del]);

  async function refreshMessage() {
    try {
      const res2 = await fetch(
        `https://www.1secmail.com/api/v1/?action=getMessages&login=${username}&domain=${domain}`
      );
      const messageData = await res2.json();
      setMessageData(messageData);
    } catch (error) {
      console.log("Error refreshing messages:", error);
    }
  }

  function copyToClipboard(email: string) {
    const input = document.createElement("input");
    input.value = email;
    document.body.appendChild(input);
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(input);
  }

  function whichMessageClicked(d: any) {
    fetch(
      `https://www.1secmail.com/api/v1/?action=readMessage&login=${username}&domain=${domain}&id=${d.id}`
    )
      .then((res) => res.json())
      .then((messagedata) => {
        setMessageFrom(messagedata.from);
        setMessageTextBody(messagedata.textBody);
        setMessageSubject(messagedata.subject);
        setMessageShow(true);
      })
      .catch((error) => {
        console.log("Error reading message:", error);
      });
  }

  return (
    <div className="w-[100%] h-screen">
      <div className="uppercontainer w-full h-[60%] bg-[#0099FF] md:rounded-b-full sm:rounded-b-3xl flex flex-col justify-center items-center gap-7">
        <Title />
        <RandomEmailBox value={email} />
        <div className="buttoncontainer flex gap-5">
          <Button
            onClick={() => {
              copyToClipboard(email);
            }}
            label={"Copy Email"}
            imgsrc={"/copyicon.png"}
          />
          <Button
            onClick={() => {
              window.location.reload();
            }}
            label={"generer un nouveau mail"}
            imgsrc={"/loadingarrowicon.png"}
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-5">
        {!refresh ? (
          <Image
            className="cursor-pointer"
            src={"/loadingarrowicon.png"}
            width={50}
            height={50}
            alt=""
            onClick={() => {
              setRefresh(true);
              setTimeout(() => {
                setRefresh(false);
                refreshMessage();
              }, 1000);
            }}
          />
        ) : (
          <div className="w-[50px] h-[50px] bg-[#0099FF] rounded-full flex justify-center items-center">
            <Image
              className="cursor-pointer"
              src={"/loadinganimation.svg"}
              width={40}
              height={40}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="bottomcontainer w-full h-[80%] flex justify-center items-center">
        <div className="w-[80%] h-[90%] border rounded-md overflow-y-scroll overflow-x-hidden custom-scrollbar border-[#000000] border-opacity-20 shadow-md">
          <div className="mailboxtitle flex m-2 gap-2 justify-center items-center">
            <Image src={"/mail.png"} width={30} height={30} alt="mailbox" />
            <span className="inbox text-lg opacity-80">{!messageShow ? "Inbox" : "Message Box"}</span>
          </div>
          {messageShow ? (
            <>
              <div
                onClick={() => {
                  setMessageShow(false);
                }}
                className="w-full bg-[#0099FF] pt-5 pl-5"
              >
                <Button label="Go Back" imgsrc="/arrow.png" className="border"></Button>
              </div>
              <EmailDisplay
                from={messageFrom}
                subject={messageSubject}
                body={messageTextBody}
              />
            </>
          ) : (
            message.map((d) => (
              <div
                key={d.id}
                onClick={() => {
                  whichMessageClicked(d);
                }}
              >
                <MailBox email={d.from} subject={d.subject} message={d.message} time={d.date} />
              </div>
            ))
          )}
        </div>
      </div>
      <div className="bottomcontainer w-full h-fit flex justify-center items-center">
        <About />
      </div>
    </div>
  );
};

export default Home;
