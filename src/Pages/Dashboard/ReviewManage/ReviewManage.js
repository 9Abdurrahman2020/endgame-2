import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const ReviewManage = () => {
  const [reviews, setReviews] = useState([]);
  const [count, setCount] = useState(1);
  const [cancel, setCancel] = useState(1);
  const [update, setUpdate] = useState(1);
  useEffect(() => {
    fetch(`https://afternoon-brook-80659.herokuapp.com/review`)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.length);
        setReviews(data);
      });
  }, [cancel, update]);
  const removeBookings = (id) => {
    const confirm = window.confirm("Are you sure? Want to cancel?");
    if (confirm) {
      fetch(`https://afternoon-brook-80659.herokuapp.com/review-delete/${id}`, {
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
    fetch(`https://afternoon-brook-80659.herokuapp.com/review-update/${id}`, {
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
                <th>Reviewer Name</th>
                <th>Comments</th>
                <th>Status</th>
                <th>Update</th>
                <th>Remove Review</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((appointment, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{appointment.name}</td>
                  <td>{appointment.comments}</td>
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

export default ReviewManage;
