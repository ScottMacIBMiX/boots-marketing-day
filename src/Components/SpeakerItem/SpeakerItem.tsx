"use client";
import Image from "next/image";
import "./speaker-item.scss";
import PlusMinusIcon from "../../modules/plusMinusIcon/PlusMinusIcon";
import LinkedinLogo from "../../assets/linkedin-logo.png";

type Props = {
  speakerName: string;
  speakerBio?: string;
  speakerTitle?: string;
  speakerLinkedin?: string;
  isOpen: boolean;
  onSpeakerClick: (speakerName: string) => void;
};

const SpeakerItem = ({
  speakerName,
  speakerTitle,
  speakerBio,
  isOpen,
  onSpeakerClick,
  speakerLinkedin,
}: Props) => {
  const handleSpeakerClick = () => {
    onSpeakerClick(speakerName);
  };

  const handleLinkedInClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };

  return (
    <div className="diageo-soi-speaker-item-container">
      <div className="diageo-soi-speaker-item" onClick={handleSpeakerClick}>
        <div className="diageo-soi-speaker-item__image">
          <div className="diageo-soi-speaker-item__image__circle">
            <Image
              alt={speakerName}
              width={72}
              height={72}
              src={`/images/speakerPics/${speakerName}.jpg`}
            />
          </div>
        </div>
        <div className="diageo-soi-speaker-item__speaker-info">
          <div className="diageo-soi-speaker-item__speaker-info__name">
            {speakerLinkedin && (
              <a
                href={speakerLinkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkedInClick}
              >
                <Image
                  alt="LinkedIn"
                  width={16}
                  height={16}
                  src={LinkedinLogo}
                />
              </a>
            )}
            <p>{speakerName}</p>
            <div className="diageo-soi-speaker-item__speaker-info__title">
              <p>{speakerTitle}</p>
            </div>
          </div>
          <div className="diageo-soi-speaker-item__plus">
            <div className="diageo-soi-speaker-item__plus__padding">
              <PlusMinusIcon isOpen={isOpen} />
            </div>
          </div>
        </div>
        <br />
      </div>
      <div
        className={`diageo-soi-speaker-item__accordion-panel__${
          isOpen ? "open" : "closed"
        }`}
      >
        <p style={{ whiteSpace: "pre-wrap" }}>{speakerBio}</p>
      </div>
    </div>
  );
};

export default SpeakerItem;
