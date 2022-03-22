import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const AllAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [count, setCount] = useState(1);
  const [cancel, setCancel] = useState(1);
  const [update, setUpdate] = useState(1);

  useEffect(() => {
    fetch("http://https://afternoon-brook-80659.herokuapp.com/appointment")
      .then((res) => res.json())
      .then((result) => {
        setCount(result.length);
        setAppointments(result);
      });
  }, [cancel, update]);

  const removeBookings = (id) => {
    const confirm = window.confirm("Are you sure? Want to cancel?");
    if (confirm) {
      fetch(`http://https://afternoon-brook-80659.herokuapp.com/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            alert("Successfully canceled !");
            setCancel(cancel + 1);
          }
        });
    }
  };

  const updateStatus = (id) => {
    fetch(`http://https://afternoon-brook-80659.herokuapp.com/update/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          setUpdate(update + 1);
        }
      });
  };

  return (
    <div className="my-booking-container">
      {count < 1 ? (
        <h3 className="text-center text-danger my-5 text-uppercase">
          No trip booked yet !
        </h3>
      ) : (
        <div className="table-responsive-md">
          <Table striped bordered hover size="md" className="text-center">
            <thead>
              <tr>
                <th>Index</th>
                <th>Patient Name</th>
                <th>Email</th>
                <th>Appointment Date</th>
                <th>Status</th>
                <th>Update</th>
                <th>Cancel Appointment</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{appointment.name}</td>
                  <td>{appointment.email}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.status}</td>
                  <td>
                    {appointment.status == "approved" ? (
                      <b className="text-success text-uppercase">Updated</b>
                    ) : (
                      <button
                        onClick={() => updateStatus(appointment._id)}
                        className="btn btn-primary"
                      >
                        Approve
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => removeBookings(appointment._id)}
                      className="btn btn-danger"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default AllAppointment;
