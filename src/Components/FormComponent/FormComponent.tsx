import React, { useState, useEffect } from "react";
import "./formComponent.scss";
import events from "../../data/agenda.json";
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
        <option key="A" value="A">
          Option A - Some Pitch Description Here
        </option>
        <option key="B" value="B">
          Option B - Some Pitch Description Here
        </option>
        <option key="C" value="C">
          Option C - Some Pitch Description Here
        </option>
        <option key="D" value="D">
          Option D - Some Pitch Description Here
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
  );
};

export default FormComponent;
