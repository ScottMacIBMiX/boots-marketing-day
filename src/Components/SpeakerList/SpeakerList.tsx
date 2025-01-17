import { useState } from "react";
import SpeakerItem from "../SpeakerItem/SpeakerItem";
import "./speaker-list.scss";

type SpeakerType = {
  speakerName: string;
  speakerBio?: string;
  speakerTitle?: string;
  speakerLinkedin?: string;
};

interface Props {
  speakers: SpeakerType[];
}

const SpeakerList = ({ speakers }: Props) => {
  const [openedSpeaker, setOpenedSpeaker] = useState<string | null>(null);

  const handleSpeakerClick = (speakerName: string) => {
    setOpenedSpeaker(speakerName === openedSpeaker ? null : speakerName);
  };

  return (
    <div className="diageo-soi-speaker-list">
      {speakers.map((speaker, index) => (
        <div
          key={speaker.speakerName}
          className="diageo-soi-agenda-speaker__item"
        >
          <SpeakerItem
            speakerName={speaker.speakerName}
            speakerBio={speaker.speakerBio ? speaker.speakerBio : undefined}
            speakerTitle={
              speaker.speakerTitle ? speaker.speakerTitle : undefined
            }
            speakerLinkedin={
              speaker.speakerLinkedin ? speaker.speakerLinkedin : undefined
            }
            isOpen={openedSpeaker === speaker.speakerName}
            onSpeakerClick={handleSpeakerClick}
          />
        </div>
      ))}
    </div>
  );
};

export default SpeakerList;
