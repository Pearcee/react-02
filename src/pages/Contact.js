import { useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <>
      <div className="w3-container w3-padding-64 w3-blue-grey w3-grayscale-min w3-xlarge">
        <div className="w3-content">
          <h1 className="w3-center w3-jumbo">Contact</h1>
          <p>
            Find us at some address at some place or call us at 05050515-122330
          </p>
          <p>
            <span className="w3-tag">FYI!</span> We offer full-service catering
            for any event, large or small. We understand your needs and we will
            cater the food to satisfy the biggerst criteria of them all, both
            look and taste.
          </p>
          <p className="w3-xxlarge">
            <strong>Reserve</strong> a table, ask for today's special or just
            send us a message:
            <form
              onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
            >
              <input {...register("name")} placeholder="Name" className="w3-input w3-padding-16 w3-border" />
              <select {...register("number", { required: true })} className="w3-input w3-padding-16 w3-border">
                <option value="">Number</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">More than 4</option>
              </select>
              <input type="datetime-local" {...register("when", {
    valueAsDate: true,
  })} placeholder="2020-11-16T20:00" className="w3-input w3-padding-16 w3-border"/>
              <textarea {...register("note")} placeholder="Message \ Special requirements" className="w3-input w3-padding-16 w3-border"/>
              <p>{data}</p>
              <input type="submit" />
            </form>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;

// {/* <form onSubmit={handleSubmit}>
// <input
//   type="text"
//   placeholder="Name"
//   name="username"
//   value={inputs.username || ""}
//   onChange={handleChange}
//   className="w3-input w3-padding-16 w3-border"
// />

// <input
//   type="number"
//   placeholder="How many people"
//   name="many"
//   value={inputs.many || ""}
//   onChange={handleChange}
//   className="w3-input w3-padding-16 w3-border"
// />

// <input
//   type="datetime-local"
//   placeholder="Date and time"
//   name="when"
//   value={inputs.when || "2023-11-16T20:00"}
//   onChange={handleChange}
//   className="w3-input w3-padding-16 w3-border"
// />

// <input
//   type="text"
//   placeholder="Message\Special requirements"
//   name="note"
//   value={inputs.note|| ""}
//   onChange={handleChange}
//   className="w3-input w3-padding-16 w3-border"
// />

// <input className="w3-button w3-light-grey w3-block" type="submit" />
// </form> */}
