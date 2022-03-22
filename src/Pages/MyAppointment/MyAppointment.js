import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../context/useAuth";

const MyAppointment = () => {
  const { user } = useAuth();
  const [count, setCount] = useState(1);
  const [appointment, setAppointment] = useState([]);
  const [cancel, setCancel] = useState(1);
  useEffect(() => {
    fetch(
      `http://https://afternoon-brook-80659.herokuapp.com/my-bookings/${user?.email}`
    )
      .then((res) => res.json())
      .then((result) => {
        setCount(result.count);
        setAppointment(result.result);
      });
  }, [cancel]);
  console.log(appointment);

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
  return (
    <div className="my-booking-container">
      {count < 1 ? (
        <h3 className="text-center text-danger my-5 text-uppercase">
          You didn't book any Appointment yet !
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
                <th>Payment</th>
                <th>Cancel Appointment</th>
              </tr>
            </thead>
            <tbody>
              {appointment.map((booking, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{booking.name}</td>
                  <td>{booking.email}</td>
                  <td>{booking.date}</td>
                  <td className="text-uppercase">{booking.status}</td>
                  <td>
                    <Link to={`/payment/${booking._id}`}>
                      <button className="btn btn-success">Pay</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => removeBookings(booking._id)}
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

export default MyAppointment;
