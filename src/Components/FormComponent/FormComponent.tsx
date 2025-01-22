import React, { useState, useEffect } from "react";
import "./formComponent.scss";
//import events from "../../data/agenda.json";
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
          <option key="Session A" value="Session A">
            Session A - Test Session A
          </option>
          <option key="Session B" value="Session B">
          Session B - Test Session B
          </option>
          <option key="Session C" value="Session C">
            Session C - Test Session C
          </option>
          <option key="Session D" value="Session D">
            Session D - Test Session D
          </option>
        </select>

        <div className="error">{errors.session}</div>

        <label htmlFor="content" className="label">
          Name & Comment
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
    </div>
  );
};

export default FormComponent;
