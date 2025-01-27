import React, { useState, useEffect } from "react";
import "./formComponent.scss";
import base from "../../utils/airtable";

interface FormProps {
  formType: "question" | "idea";
}

const FormComponent: React.FC<FormProps> = ({ formType }) => {
  const [selectedSession, setSelectedSession] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors: { [key: string]: string } = {};

    if (!selectedSession) {
      newErrors.session = "Please select a session.";
      isValid = false;
    }

    if (!content.trim()) {
      newErrors.content = `Please enter your ${formType}.`;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await base(`Submitted Votes`).create({
          Vote: selectedSession,
          Name: content,
        });

        // Clear the form after successful submission
        setSelectedSession("");
        setContent("");
        setErrors({});
        setIsSubmitted(true);
      } catch (error) {
        console.error(`Error submitting form data to Airtable:`, error);
      }
    }
  };

  const handleTeamNameSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await base(`Team Names`).create({
          name: content,
        });

        // Clear the form after successful submission
        setSelectedSession("");
        setContent("");
        setErrors({});
        setIsSubmitted(true);
      } catch (error) {
        console.error(`Error submitting form data to Airtable:`, error);
      }
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSubmitted) {
      timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isSubmitted]);
  

  // useEffect(() => {
  //   let namesList=[];
  //   try {
  //     base(`Team Name`)
  //       .select()
  //       .eachPage((records) => {
  //         console.log("🚀 ~ .eachPage ~ records:", records)
  //         records.forEach((record) =>
  //           namesList.push(record)
  //         );
  //       });
  //   } catch (error) {
  //     console.error(`Error retrieving form data from Airtable:`, error);
  //   }
  // }, []);

  return (
    <div>
      <div className="title_vote">
      <h1>Submit your vote!</h1>
      </div>
      <div className="info_vote">
      <h1>Please use the form below to vote for your favourite groups pitch. Please do not vote more than once to ensure the fairness of this system.</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="session" className="label">
          Select your vote
        </label>

        <select
          id="session"
          value={selectedSession}
          onChange={(e) => setSelectedSession(e.target.value)}
          className="select"
        >
          <option value=""></option>
          {/* {events
          .filter((event) => event.isQuestionable)
          .map((event, index) => (
            <option key={index} value={event.sessionTitle}>
            {event.sessionTime} - {event.sessionTitle}
            </option>
            ))} */}
          <option key="Group 1 - Boot Strapped Brains" value="Group 1 - Boot Strapped Brains">
          Group 1 - Boot Strapped Brains
          </option>
          <option key="Group 2 - Cringe GPT" value="Group 2 - Cringe GPT">
          Group 2 - Cringe GPT
          </option>
          <option key="Group 3 - Three's a Crowd" value="Group 3 - Three's a Crowd">
          Group 3 - Three's a Crowd
          </option>
          <option key="Group 4 - When Sat's Day Comes" value="Group 4 - When Sat's Day Comes">
          Group 4 - When Sat's Day Comes
          </option>
        </select>

        <div className="error">{errors.session}</div>

        <label htmlFor="content" className="label">
        Any Comments? Please comment N/A if no comment wanted.
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="textarea"
        />
        <div className="error">{errors.content}</div>

        <div className="button-container">
          {isSubmitted ? (
            <div className="thank-you-message">Thank you for your vote!</div>
          ) : (
            <button type="submit" className="button">
              Submit
            </button>
          )}
        </div>
      </form>
      {/* <div className="title_vote">
      <h1>Submit your team name!</h1>
      </div>
      <div className="info_vote">
      <h1>Please use the form below to submit a team name for your groups pitch. After submitting you should see your team name appear in the submit your vote section after page refresh.</h1>
      </div>
      <form className="form" onSubmit={handleTeamNameSubmit}>
        <label htmlFor="content" className="label">
        Team Name
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="textarea"
        />
        <div className="error">{errors.content}</div>

        <div className="button-container">
          {isSubmitted ? (
            <div className="thank-you-message">Thank you for your team name submission!</div>
          ) : (
            <button type="submit" className="button">
              Submit
            </button>
          )}
        </div>
      </form> */}
    </div>
  );
};

export default FormComponent;
