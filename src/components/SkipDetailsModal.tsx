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
  const rowData = [
    { label: "Size", value: `${item.size} yards` },
    { label: "Hire Period", value: `${item.hire_period_days} days` },
    { label: "Transport Cost", value: item.transport_cost ?? "N/A" },
    { label: "Per Tonne Cost", value: item.per_tonne_cost ?? "N/A" },
    { label: "Price Before VAT", value: `£${item.price_before_vat}` },
    { label: "VAT", value: `${item.vat}%` },
    { label: "Postcode", value: item.postcode },
    { label: "Area", value: item.area || "N/A" },
    { label: "Forbidden", value: item.forbidden ? "Yes" : "No" },
    { label: "Allowed on Road", value: item.allowed_on_road ? "Yes" : "No" },
    {
      label: "Allows Heavy Waste",
      value: item.allows_heavy_waste ? "Yes" : "No",
    },
  ];

  const renderTableRows = () =>
    rowData.map(({ label, value }) => (
      <tr key={label}>
        <th>{label}</th>
        <td>{value}</td>
      </tr>
    ));

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Item Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className="table table-sm">
          <tbody>{renderTableRows()}</tbody>
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
