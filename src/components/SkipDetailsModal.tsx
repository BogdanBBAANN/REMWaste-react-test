import { Modal, Button } from "react-bootstrap";
import type { SkipCardProps } from "./CardComponent";

interface ItemDetailsProps {
  show: boolean;
  handleClose: () => void;
  item: SkipCardProps;
}

const SkipDetailsModal: React.FC<ItemDetailsProps> = ({
  show,
  handleClose,
  item,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Item Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className="table table-sm">
          <tbody>
            <tr>
              <th>Size</th>
              <td>{item.size} yards</td>
            </tr>
            <tr>
              <th>Hire Period</th>
              <td>{item.hire_period_days} days</td>
            </tr>
            <tr>
              <th>Transport Cost</th>
              <td>{item.transport_cost ?? "N/A"}</td>
            </tr>
            <tr>
              <th>Per Tonne Cost</th>
              <td>{item.per_tonne_cost ?? "N/A"}</td>
            </tr>
            <tr>
              <th>Price Before VAT</th>
              <td>£{item.price_before_vat}</td>
            </tr>
            <tr>
              <th>VAT</th>
              <td>{item.vat}%</td>
            </tr>
            <tr>
              <th>Postcode</th>
              <td>{item.postcode}</td>
            </tr>
            <tr>
              <th>Area</th>
              <td>{item.area || "N/A"}</td>
            </tr>
            <tr>
              <th>Forbidden</th>
              <td>{item.forbidden ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <th>Allowed on Road</th>
              <td>{item.allowed_on_road ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <th>Allows Heavy Waste</th>
              <td>{item.allows_heavy_waste ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <th>Created At</th>
              <td>{new Date(item.created_at).toLocaleString()}</td>
            </tr>
            <tr>
              <th>Updated At</th>
              <td>{new Date(item.updated_at).toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SkipDetailsModal;
