import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import SkipDetailsModal from "./SkipDetailsModal";

export interface SkipCardProps {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  selected: boolean;
}

export function CardComponent({ ...props }: SkipCardProps) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  const handleClick = () => {
    if (props.selected) {
      console.log("Continued with skip: ", props);
    }
  };

  const showDetails = () => {
    if (props.selected) {
      setShowModal(true);
    }
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Skip Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table table-sm">
            <tbody>
              <tr>
                <th>Size</th>
                <td>{props.size} yards</td>
              </tr>
              <tr>
                <th>Hire Period</th>
                <td>{props.hire_period_days} days</td>
              </tr>
              <tr>
                <th>Transport Cost</th>
                <td>{props.transport_cost ?? "N/A"}</td>
              </tr>
              <tr>
                <th>Per Tonne Cost</th>
                <td>{props.per_tonne_cost ?? "N/A"}</td>
              </tr>
              <tr>
                <th>Price Before VAT</th>
                <td>£{props.price_before_vat}</td>
              </tr>
              <tr>
                <th>VAT</th>
                <td>{props.vat}%</td>
              </tr>
              <tr>
                <th>Postcode</th>
                <td>{props.postcode}</td>
              </tr>
              <tr>
                <th>Area</th>
                <td>{props.area || "N/A"}</td>
              </tr>
              <tr>
                <th>Forbidden</th>
                <td>{props.forbidden ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <th>Allowed on Road</th>
                <td>{props.allowed_on_road ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <th>Allows Heavy Waste</th>
                <td>{props.allows_heavy_waste ? "Yes" : "No"}</td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <SkipDetailsModal
        show={showModal}
        handleClose={handleClose}
        item={props}
      />

      <div
        className={`card h-100 border-2 rounded shadow-sm ${
          props.selected ? "border-primary" : ""
        } ${props.forbidden ? "bg-light text-muted" : ""}`}
        style={{
          backgroundColor: "#1c1c1c",
          opacity: props.forbidden ? 0.6 : 1,
          transition: "transform 0.2s ease-in-out",
          transform: props.forbidden ? "none" : undefined,
        }}
        onMouseEnter={(e) => {
          if (!props.forbidden) {
            e.currentTarget.style.transform = "scale(1.03)";
            e.currentTarget.style.borderColor = "darkblue";
          }
        }}
        onMouseLeave={(e) => {
          if (!props.forbidden) {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.borderColor = "#1c1c1c";
          }
        }}
        title={props.forbidden ? "This skip is not available" : ""}
      >
        <div className="position-relative">
          <span style={{ fontSize: "0.8rem", color: "white" }}>
            {props.size} Yards
          </span>
        </div>

        <div className="card-body">
          <h5 className="card-title" style={{ color: "#C0C0C0	" }}>
            {props.size} Yard Skip
          </h5>
          <p className="card-text" style={{ color: "#ADD8E6" }}>
            {props.hire_period_days} day hire period
          </p>
          <h4 className="text-primary">£{props.price_before_vat}</h4>

          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button
              className={`btn ${
                props.selected ? "btn-primary" : "btn-outline-primary"
              }`}
              disabled={props.forbidden}
              style={{
                visibility: !props.selected ? "hidden" : "inherit",
                width: "5.7rem",
              }}
              onClick={handleClick}
            >
              Continue
            </button>

            <button
              className={`btn ${
                props.selected ? "btn-secondary" : "btn-outline-secondary"
              }`}
              disabled={props.forbidden}
              style={{
                visibility: !props.selected ? "hidden" : "inherit",
                width: "5.7rem",
              }}
              onClick={showDetails}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
