import "./agenda-item.scss";
import PlusMinusIcon from "../../modules/plusMinusIcon/PlusMinusIcon";

type Props = {
  eventTime: string;
  eventTitle: string;
  eventSubTitle?: string;
  eventSpeaker?: string;
  eventSummary?: string;
  isOpen: boolean;
  onAgendaItemClick: () => void;
};

const AgendaItem = ({
  eventTime,
  eventTitle,
  eventSubTitle,
  eventSpeaker,
  eventSummary,
  isOpen,
  onAgendaItemClick,
}: Props) => {
  return (
    <div className="diageo-soi-agenda-item-container">
      <div className="diageo-soi-agenda-item" onClick={onAgendaItemClick}>
        <div className="diageo-soi-agenda-item__time">
          <div>
            <p>{eventTime}</p>
          </div>
        </div>
        <div className="diageo-soi-agenda-item__break" />
        <div className="diageo-soi-agenda-item__event">
          <div className="diageo-soi-agenda-item__event__details">
            <div className="diageo-soi-agenda-item__event__title">
              <p>{eventTitle}</p>
            </div>
            {eventSubTitle && (
              <div className="diageo-soi-agenda-item__event__subtitle">
                <p>- {eventSubTitle}</p>
              </div>
            )}
            {eventSpeaker && (
              <div className="diageo-soi-agenda-item__event__speaker">
                <p>Speaker(s): {eventSpeaker}</p>
              </div>
            )}
          </div>
          {eventSummary && (
            <div className="diageo-soi-agenda-item__plus">
              <div className="diageo-soi-agenda-item__plus__padding">
                <PlusMinusIcon isOpen={isOpen} />
              </div>
            </div>
          )}
        </div>
      </div>
      {eventSummary && (
        <div
          className={`diageo-soi-agenda-item__accordion-panel__${
            isOpen ? "open" : "closed"
          }`}
        >
          <p style={{ whiteSpace: "pre-wrap" }}>{eventSummary}</p>
        </div>
      )}
    </div>
  );
};

export default AgendaItem;
