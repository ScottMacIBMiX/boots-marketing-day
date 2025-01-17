import { useEffect, useRef, useState } from "react";
import AgendaItem from "../AgendaItem/AgendaItem";
import "./agenda-list.scss";

type AgendaType = {
  sessionTime: string;
  sessionTitle: string;
  sessionSubTitle?: string;
  sessionSpeaker?: string;
  sessionSummary?: string;
};

interface Props {
  agenda: AgendaType[];
}

const AgendaList = ({ agenda }: Props) => {
  const agendaListRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [openedItem, setOpenedItem] = useState<number | null>(null);

  useEffect(() => {
    const agendaListElement = agendaListRef.current;
    const lineElement = lineRef.current;

    if (agendaListElement && lineElement) {
      const resizeObserver = new ResizeObserver(() => {
        const agendaListHeight = agendaListElement.offsetHeight;
        const lineTop = 40;
        const lineBottom = 40;

        lineElement.style.top = `${lineTop}px`;
        lineElement.style.bottom = `${lineBottom}px`;
        lineElement.style.height = `calc(${agendaListHeight}px - ${
          lineTop + lineBottom
        }px)`;
      });

      resizeObserver.observe(agendaListElement);

      return () => {
        resizeObserver.unobserve(agendaListElement);
      };
    }
  }, []);

  const handleAgendaItemClick = (index: number) => {
    setOpenedItem(openedItem === index ? null : index);
  };

  return (
    <div className="diageo-soi-agenda-list" ref={agendaListRef}>
      <div className="diageo-soi-agenda-list__line" ref={lineRef}></div>
      <div className="diageo-soi-agenda-list__items">
        {agenda.map((item, index) => (
          <div key={index} className="diageo-soi-agenda-list__item">
            <AgendaItem
              eventTime={item.sessionTime}
              eventTitle={item.sessionTitle}
              eventSubTitle={item.sessionSubTitle}
              eventSpeaker={item.sessionSpeaker}
              eventSummary={item.sessionSummary}
              isOpen={openedItem === index}
              onAgendaItemClick={() => handleAgendaItemClick(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgendaList;
