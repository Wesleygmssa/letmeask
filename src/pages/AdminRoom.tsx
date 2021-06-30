import { FormEvent, useState } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import { RoomCode } from "../components/RoomCode";
import { useAuth } from "../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";

import "../styles/room.scss";
import { database } from "../services/firebase";
import { Question } from "../components/Question";
import { useRoom } from "../contexts/useRoom";

type RoomParams = {
  id: string;
};

const notify = () => toast.error("You must be logged in.");

export function AdinRoom() {
  const { user } = useAuth();
  const params = useParams<RoomParams>();

  const roomId = params.id;
  const { questions, title } = useRoom(roomId);

  const history = useHistory();
  return (
    <div className="page-room">
      <Toaster />;
      <header>
        <div className="content">
          <img
            src={logoImg}
            alt="Letmeask"
            onClick={() => {
              history.push(`/`);
            }}
          />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined={true}>Encerrar sala</Button>
          </div>
        </div>
      </header>
      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className="question-list">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
