import PropTypes from 'prop-types';
import css from "./VehicleFeatures.module.css";
import { useSelector } from "react-redux";
import { selectCamperDetails } from "../../redux/selectors";
import VehicleAttributeList from "../VehicleAttributeList/VehicleAttributeList";

const VEHICLE_FORMS = {
  fullyIntegrated: "Fully Integrated",
  alcove: "Alcove",
};

function VehicleFeatures() {
  const details = useSelector(selectCamperDetails);
  const { form, length, width, height, tank, consumption } = details;

  const features = [
    { title: "Form", value: VEHICLE_FORMS[form] || form },
    { title: "Length", value: length },
    { title: "Width", value: width },
    { title: "Height", value: height },
    { title: "Tank", value: tank },
    { title: "Consumption", value: consumption },
  ];

  return (
    <div className={css.container}>
      <div className={css.attributeContainer}>
        <VehicleAttributeList vehicle={details} />
      </div>
      <h2 className={css.title}>Vehicle details</h2>
      <hr className={css.underline}/>
      <ul className={css.vehicleFeatures}>
        {features.map(({ title, value }) => (
          <li key={title} className={css.vehicleFeature}>
            <p className={css.featureTitle}>{title}</p>
            <p className={css.featureValue}>{value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

VehicleFeatures.propTypes = {
  details: PropTypes.shape({
    form: PropTypes.string,
    length: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    tank: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    consumption: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};

export default VehicleFeatures;
